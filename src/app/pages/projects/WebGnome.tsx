import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Waves } from "lucide-react";

const projects = [
  {
    title: "2024 Manila Bay Oil Spill — WebGNOME Simulation",
    description: "Modelled a simulation using data provided by Philippine Space Agency and Copernicus through WebGnome. Developed a bulletin board to assist the Philippine Coast Guard in predicting the timing and location of the 2024 Manila Bay Oil Spill.",
    image: "https://images.unsplash.com/photo-1760624876201-be9e17d332fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBzcGlsbCUyMG9jZWFuJTIwZW52aXJvbm1lbnRhbHxlbnwxfHx8fDE3NzMzMTE2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WebGNOME", "NOAA", "Copernicus", "Oil Spill", "Philippine Coast Guard"],
  },
];

export function WebGnomeProjects() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="WebGNOME"
        subtitle="Oil spill trajectory modeling for the 2024 Manila Bay incident using NOAA's WebGNOME and Copernicus data"
        icon={<Waves className="w-6 h-6" />}
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