from os import kill
from scipy import interpolate,optimize,integrate
import pandas as pd
import numpy as np
import matplotlib as pl

from numpy import e, pi, rad2deg, sin, cos, tan, arcsin,arccos, arctan, sqrt, zeros #in radians

def bladeElements():
    airfoil_data_dict = {'Radius':float, 'twist_deg':float, 'chord':float}
    airfoil_comparison_data_dict = {'alphaCl':float, 'alphaCd':float, 'Cl':float, 'Cd':float}
    airfoil_data = pd.read_csv('testBlade_NREL.csv', dtype=airfoil_data_dict)
    airfoil_comparison_data = pd.read_csv('airfoildata_NRELS814.csv', dtype=airfoil_comparison_data_dict)
    
    bladeParameters = pd.DataFrame({'Radius': airfoil_data.Radius.values, 'twist_deg': airfoil_data.twist_deg.values, 'chord': airfoil_data.chord.values}).dropna()
    bladeComparisonParameters = pd.DataFrame({'alphaCl': airfoil_comparison_data.alphaCl.values, 'Cl': airfoil_comparison_data.Cl.values,'alphaCd': airfoil_comparison_data.alphaCd.values, 'Cd': airfoil_comparison_data.Cd.values})
    #get parameters for each blade element e.g. chord, twist, foiltype, ClCd dataset
    return(bladeParameters,bladeComparisonParameters)

def ClCdLookupInterpolate(Cd_max,Cl_max,alpha,alpha_stall,bladeComparisonParameters):
    if(alpha >= alpha_stall):
        #StallCorrection
        #print("running stall correction")
        
        Kl = (Cl_max - Cd_max*sin(alpha_stall)*cos(alpha_stall)) * (sin(alpha_stall)/cos(alpha_stall)**2)
        Kd = (Cd_max - Cd_max*sin(alpha)**2)/cos(alpha_stall)**2
        Cl = Cd_max*sin(2*alpha) + Kl*(cos(alpha)**2/sin(alpha))
        Cd = Cd_max*sin(alpha_stall)**2 + Kd*cos(alpha)
    else:
        Cl = interpolate.interp1d(bladeComparisonParameters.alphaCl,bladeComparisonParameters.Cl, fill_value='extrapolate', kind='cubic')
        Cl = Cl(alpha)
        Cd = interpolate.interp1d(bladeComparisonParameters.alphaCd,bladeComparisonParameters.Cd, fill_value='extrapolate', kind='cubic')
        Cd = Cd(alpha)
    return(Cl,Cd)
    
def solver(u1,R,omega,bladeParameters,bladeComparisonParameters,A,c_p_arr,c_t_arr):
    #main solving function
    
    #### USUAL ITERATION ####
    # (1) Guess for a and a'(b)
    start = 3
    if start ==1 :
        a = 0
        b = 0
    elif start==2 :
        a = 1/3
        b = 0
    else:
        a = 0.5
        b = 0.5
    # (2) Solve for resulting flow angle
    for el in np.arange(0,len(bladeParameters.Radius)-1,1):
        
        #initialization
        r = bladeParameters.Radius[el]
        pitch_deg = 28 #deg
        B = 3 #blade number
        rho = 1027 #kg/m^3 water density
        R_hub = 0.089 #m #Update this!

        #####Assumptions######
        #omega = 11.592 #rad/s assumption
        Cd_max = 0.10426  #PLEASE UPDATE CD MAX
        Cl_max = 1.3768 #PLEASE UPDATE CL MAX
        alpha_stall = 8.75 #deg 
        ######################
        
        sectionChord = bladeParameters.chord[el]
        sectionTwist = bladeParameters.twist_deg[el]
        twist_rad = np.deg2rad(pitch_deg + sectionTwist)

        def mainSolvingEqn(params):
            # (3) Solve for angle of attack
            a,b = params
            #print(params)
            axVel = u1*(1-a)
            tanVel = omega*r*(1+b)
            phi = arctan(axVel/tanVel)
            w = sqrt(axVel**2 + tanVel**2)

            alpha = np.rad2deg( phi - twist_rad) #in radians
            #print("this is alpha")
            #print(alpha,omega,a,b)
            #interpolating cl and cd
            # (4) Get Cl and Cd, take note of post-stall correction
            Cl,Cd = ClCdLookupInterpolate(Cd_max,Cl_max,alpha,alpha_stall,bladeComparisonParameters)
            #alpha = np.deg2rad(alpha)
            # print("this is Cl")
            # print(Cl)
            # print("this is Cd")
            # print(Cd)
            
            # (5) Get difference in Fn and Q, take note of tip and hub correction 
            Cn = Cl*cos(phi) +Cd*sin(phi)
            Ct = Cl*sin(phi) - Cd*cos(phi)
            Fn_Be =B*0.5*rho*w**2*sectionChord*(Cn)
            Fn_mom = 4*pi*rho*(u1**2*a*(1-a) + (b*omega*r)**2)
            Q_Be = B*0.5*rho*w**2*sectionChord*(Ct)*r
            Q_mom = 4*pi*rho*b*(1-a)*u1*omega*r**3

            #Tip and hub correction
            ftip = B/2 *((R-r)/((r)*abs(sin(phi))))
            F_tip = (2/pi)*arccos(np.exp(-ftip))
            fhub = B/2 * ((r-R_hub)/(r*abs(sin(phi))))
            F_hub = (2/pi)*arccos(np.exp(-fhub))
            #print(r)
            F = F_tip*F_hub
            if(a >= 0.4):
                c_t = 4*a*(1-a)
                c_t = 4*c_t/9 + (4*F - 20*c_t/9)*a + (25/9 * c_t - 4*F)*a**2
                Fn_mom = 0.5*rho*A*u1**2*c_t 
            err = (Fn_Be - F*Fn_mom)**2 + (Q_Be - F*Q_mom)**2
            # print("this is err")
            print(err)
            return(err)
    # (6) Evaluate a and a', take note of buhl correction
        def constraint(params):
            return()
        params = [a,b]
        bound = ([-1,1],[-1,1])
        
        result = optimize.minimize(mainSolvingEqn,params,method='powell',bounds=bound,tol=1e-4)
        
        if (result.success):
            paramsRes = result.x
            save = result.success
            
            # #print(paramsRes)
            # a,b = paramsRes
            # #bruting force solution
            # axVel = u1*(1-a)
            # tanVel = omega*r*(1+b)
            # phi = arctan(axVel/tanVel)
            # w = sqrt(axVel**2 + tanVel**2)

            # alpha = np.rad2deg( phi - twist_rad) #in radians
            # #print("this is alpha")
            # #print(alpha,omega,a,b)
            # #interpolating cl and cd
            # # (4) Get Cl and Cd, take note of post-stall correction
            # Cl,Cd = ClCdLookupInterpolate(Cd_max,Cl_max,alpha,alpha_stall,bladeComparisonParameters)
            # Ct = Cl*sin(phi) - Cd*cos(phi)
            # Q_Be = B*0.5*rho*w**2*sectionChord*(Ct)*r
            # Q_mom = 4*pi*rho*b*(1-a)*u1*omega*r**3
            
            # c_p = Q_Be * w /(0.5*rho*A*u1**3)
            # # #Storing the values
            
            # c_p_arr.append(c_p)
            # c_t_arr.append(c_t)
        else:
            print("this is err")
            raise ValueError(result.message)
        print(result)
    
    # (7) Convergence 
    return()


if __name__ == '__main__':
    #Initialitzation
    u1 = 1 #m/s
    tsr = np.arange(1,8.25,0.25)
    print(tsr)
    bladeParameters,bladeComparisonParameters = bladeElements()
    R = bladeParameters.Radius[len(bladeParameters.Radius)-1]
    A = pi*R**2
    c_p_arr= []
    c_t_arr= []

    for x in tsr:
    #print (np.arange(start, end+increment, increment))
        omega = (x*u1)/R
        # print("this is tsr")
        # print(x)
        solver(omega,u1,R, bladeParameters,bladeComparisonParameters,A,c_p_arr,c_t_arr)
    print(c_p_arr)
    print(len(c_p_arr))
    #print(integrate.simpson(c_p_arr,tsr))
    #load blade parameters
    #get and report results
