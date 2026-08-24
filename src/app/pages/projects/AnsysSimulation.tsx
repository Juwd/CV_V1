import { motion } from "motion/react";
import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Droplets, FileText, ExternalLink, Gauge, Layers, Settings2 } from "lucide-react";

const wingletModel = new URL("../../../assets/AnsysFluidSimulation/Thesis/WingletModelling.PNG", import.meta.url).href;
const meshFigure = new URL("../../../assets/AnsysFluidSimulation/Thesis/Mesh.PNG", import.meta.url).href;
const powerCoefficientFigure = new URL("../../../assets/AnsysFluidSimulation/Thesis/PowerCoefficient.PNG", import.meta.url).href;
const pressureContourFigure = new URL("../../../assets/AnsysFluidSimulation/Thesis/PressureContour.PNG", import.meta.url).href;
const vorticesFigure = new URL("../../../assets/AnsysFluidSimulation/Thesis/Vortices.PNG", import.meta.url).href;
const heatTransferFigure = new URL("../../../assets/AnsysFluidSimulation/Fluid_Simulation_HeatTransfer.png", import.meta.url).href;
const thesisPdf = new URL("../../../assets/AnsysFluidSimulation/Thesis/Design Investigation of a Marine Current Turbine Having a Winglet on the Blade.pdf", import.meta.url).href;

const thesisGallery = [
  { src: meshFigure, alt: "Mesh and computational domains for the marine current turbine", caption: "Computational setup showing the stationary and rotor domains, mesh interface, inlet, outlet, and periodic condition." },
  { src: powerCoefficientFigure, alt: "Power coefficient comparison across turbine blade designs", caption: "Power-coefficient comparison between the base blade and trapezoidal and triangular winglet designs." },
  { src: pressureContourFigure, alt: "Pressure contours around turbine blades", caption: "Pressure contours around the base, trapezoidal, and triangular winglet blades at different tip-speed ratios." },
  { src: vorticesFigure, alt: "Vortices at the rotor blade tips", caption: "Visualization of blade-tip vortices at a tip-speed ratio of 6." },
  { src: heatTransferFigure, alt: "Fluid simulation heat-transfer visualization", caption: "Additional fluid-simulation visualization from the project files." },
];

export function AnsysSimulation() {
  useEffect(() => {
    const preventDefault = (event: Event) => {
      if ((event.target as HTMLElement)?.tagName === "IMG") event.preventDefault();
    };

    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("dragstart", preventDefault);
    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
    };
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Ansys Fluid Simulation"
        subtitle="Design Investigation of a Marine Current Turbine Having a Winglet on the Blade"
        icon={<Droplets className="w-6 h-6" />}
      />
      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10">
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback src={wingletModel} alt="Marine current turbine winglet model" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Settings2 className="w-4 h-4" /> Thesis Research</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Layers className="w-4 h-4" /> ANSYS Fluent / CFD</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Gauge className="w-4 h-4" /> Marine Renewable Energy</span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>Investigated a marine current turbine with winglets added to the blade, using computational fluid dynamics to assess its performance and flow behavior.</p>
              <p>Designed and modelled the turbine in ANSYS, comparing the base blade with trapezoidal and triangular winglet geometries. The simulation used stationary and rotor domains with approximately 2.44 million cells and achieved a reported percent error of up to 6.9%.</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Model comparison</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Base + 2 winglet designs</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Computational mesh</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>2.44 million cells</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Reported improvement</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Up to 3.71% in power coefficient</p></div>
            </div>

            <div className="mt-8 border-l-2 border-ocean-teal/40 pl-5 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p className="text-ocean-foam" style={{ fontSize: "1rem" }}>Study focus</p>
              <p className="mt-1">Examined how winglet geometry influenced power coefficient, pressure distribution, and vortices generated at the rotor blade tips.</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {thesisGallery.map((item) => (
                <div key={item.alt} className="group relative overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-deep/30">
                  <ImageWithFallback src={item.src} alt={item.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/55 to-transparent p-3"><p className="text-ocean-foam/80" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>{item.caption}</p></div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["ANSYS Fluent", "CFD", "Marine Energy", "Winglet Design", "Power Coefficient", "Thesis"].map((tag) => <span key={tag} className="px-3 py-1 rounded-full bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/15" style={{ fontSize: "0.8rem" }}>{tag}</span>)}
            </div>

            <a href={thesisPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/20 hover:bg-ocean-teal/20 transition-all" style={{ fontSize: "0.85rem" }}>
              <FileText className="w-4 h-4" /> Read the full thesis <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}