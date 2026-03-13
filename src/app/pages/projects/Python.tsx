import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Terminal } from "lucide-react";

const projects = [
  {
    title: "Geospatial Data Processing Pipelines",
    description: "Automated processing of 2,278 shapefiles using Python pipelines with GeoPandas for the MPA Support Network. Built spatial data processing workflows for transforming, cleaning, and publishing geospatial datasets.",
    image: "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzczMjI4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "GeoPandas", "Automation", "Shapefiles", "GIS"],
  },
  {
    title: "Numerical Simulations — MATLAB & Python",
    description: "Practiced and certified under Engineering Degree. Developed numerical simulation scripts for computational fluid dynamics analysis and engineering computations using MATLAB and Python.",
    image: "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzczMjI4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "MATLAB", "Numerical Methods", "Engineering"],
  },
];

export function PythonProjects() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Python Projects"
        subtitle="Geospatial data pipelines, numerical simulations, and automation scripts"
        icon={<Terminal className="w-6 h-6" />}
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