import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Map } from "lucide-react";

const projects = [
  {
    title: "MPA Support Network Web GIS Platform",
    description: "Full-stack geospatial web development using Leaflet.js, Mapbox, and ArcGIS services. Built production web GIS platform with backend REST APIs, spatial data processing pipelines, and containerized deployment with Docker on Linode cloud infrastructure for the MSN.",
    image: "https://images.unsplash.com/photo-1576158113421-5484e37d43f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXAlMjBkaWdpdGFsJTIwbGF5ZXJzfGVufDF8fHx8MTc3MzMxMTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Leaflet.js", "Mapbox", "ArcGIS", "Docker", "GeoServer", "REST API"],
  },
];

export function MapsProjects() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Maps"
        subtitle="Production web GIS platforms and interactive geospatial visualization"
        icon={<Map className="w-6 h-6" />}
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