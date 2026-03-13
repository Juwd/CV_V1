import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Database } from "lucide-react";

const projects = [
  {
    title: "MPA Support Network Database & Website",
    description: "Developed the Marine Protected Area (MPA) Support Network Database and Website to facilitate access for local government units (LGUs) and researchers to information on MPAs, increasing the speed of the product by approximately 1000% from its original form.",
    image: "https://images.unsplash.com/photo-1602144586078-7d95c8d7808c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBtYXJpbmUlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzczMzExNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PostgreSQL", "MongoDB", "Python", "GeoServer", "REST API"],
  },
  {
    title: "Automated Geospatial Data Processing Pipeline",
    description: "Automated geospatial data processing of 2,278 shapefiles using Python pipelines and built a RESTful API and GeoServer to improve data accessibility for NGOs and LGUs.",
    image: "https://images.unsplash.com/photo-1602144586078-7d95c8d7808c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBtYXJpbmUlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzczMzExNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "GeoPandas", "Shapefiles", "Automation", "GIS"],
  },
];

export function MpaDatabase() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="MPA Database"
        subtitle="Marine Protected Areas database, geospatial pipelines, and stakeholder coordination for ocean conservation"
        icon={<Database className="w-6 h-6" />}
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