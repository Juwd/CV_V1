import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Bot as BotIcon } from "lucide-react";

const projects = [
  {
    title: "World Robot Olympiad — AI Self-Built Robots",
    description: "International Participant and Team Captain. Developed Artificial Intelligence (AI) for self-built robots, outperforming national competitors in the Philippines to qualify for international competitions.",
    image: "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzczMjI4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AI", "Robotics", "International Competition", "Team Captain"],
  },
];

export function BotProjects() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Bot Projects"
        subtitle="Artificial Intelligence, robotics, and automation projects"
        icon={<BotIcon className="w-6 h-6" />}
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