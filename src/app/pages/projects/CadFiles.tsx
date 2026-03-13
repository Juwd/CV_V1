import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Box } from "lucide-react";

const projects = [
  {
    title: "3D Computer Aided Design — Engineering Projects",
    description: "Practiced 3D Computer Aided Design under the BS Mechanical Engineering degree at UP Diliman. Designed turbine blade geometries with winglet modifications for marine current energy applications using SolidWorks.",
    image: "https://images.unsplash.com/photo-1726136855707-b5787766d60f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNhZCUyMGVuZ2luZWVyaW5nJTIwbW9kZWx8ZW58MXx8fHwxNzczMzExNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["SolidWorks", "CAD", "Mechanical Engineering", "Turbine Design"],
  },
];

export function CadFiles() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="CAD Files"
        subtitle="3D Computer Aided Design and mechanical engineering modelling"
        icon={<Box className="w-6 h-6" />}
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