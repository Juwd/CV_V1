import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Droplets } from "lucide-react";

const projects = [
  {
    title: "Marine Current Turbine with Winglet — Thesis",
    description: "3D designed turbine blades capable of reaching an improvement of up to 3.71% increase in power coefficient. Numerically modelled a stationary and rotor domain in a fluid domain composing of a total of 2.44 million cells using ANSYS software with an acceptable result of a percent error of up to 6.9%.",
    image: "https://images.unsplash.com/photo-1733832759291-9300f5c4ad61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHVpZCUyMHNpbXVsYXRpb24lMjBlbmdpbmVlcmluZyUyMENGRHxlbnwxfHx8fDE3NzMzMTE2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["ANSYS", "CFD", "Marine Energy", "3D Modelling", "Thesis"],
  },
];

export function AnsysSimulation() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Ansys Fluid Simulation"
        subtitle="Design Investigation of a Marine Current Turbine Having a Winglet on the Blade"
        icon={<Droplets className="w-6 h-6" />}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}