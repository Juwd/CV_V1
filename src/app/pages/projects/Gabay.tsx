import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";
import { Rocket } from "lucide-react";

const projects = [
  {
    title: "Champion WE Project — Japan Foundation Manila",
    description: "Received seed funding of $1,700 USD to develop an application aimed at improving mobility for people with disabilities in Japan and the Philippines. Built in partnership with Japan Foundation Manila.",
    image: "https://images.unsplash.com/photo-1576158113421-5484e37d43f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXAlMjBkaWdpdGFsJTIwbGF5ZXJzfGVufDF8fHx8MTc3MzMxMTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Startup", "Social Impact", "Accessibility", "Award Winner"],
  },
  {
    title: "Accenture SLC — Energy Solutions Pitch",
    description: "Developed a business pitch addressing UN SDG 7 by promoting affordable, reliable, and modern energy solutions that enable households to monitor real-time electricity usage and achieve up to 50% cost savings. Nominated as SLC New-Generation Innovator among hundreds of participants.",
    image: "https://images.unsplash.com/photo-1576158113421-5484e37d43f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXAlMjBkaWdpdGFsJTIwbGF5ZXJzfGVufDF8fHx8MTc3MzMxMTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Accenture", "UN SDG 7", "Energy", "Innovation"],
  },
];

export function Gabay() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Gabay & Startup Projects"
        subtitle="Social impact applications, business pitches, and innovation awards"
        icon={<Rocket className="w-6 h-6" />}
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