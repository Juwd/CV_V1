import { PageHeader } from "../../components/PageHeader";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Box, ExternalLink } from "lucide-react";

const fidgetCubeImage = new URL("../../../assets/CADFiles/fidgetCube.png", import.meta.url).href;
const stirlingEngineImage = new URL("../../../assets/CADFiles/StirlingEngine.png", import.meta.url).href;

const cadProjects = [
  {
    title: "Fidget Cube",
    description: "A 3D computer-aided design model of a compact fidget cube, developed as part of the CAD project collection.",
    image: fidgetCubeImage,
    link: "https://myhub.autodesk360.com/ue2d0b8e7/g/shares/SH7f1edQT22b515c761e4f2e3c85bb085f42",
    tags: ["3D CAD", "Product Design", "Autodesk Viewer"],
  },
  {
    title: "Stirling Engine",
    description: "A 3D computer-aided design model of a Stirling engine assembly, showing the engine body, flywheel, supports, and base.",
    image: stirlingEngineImage,
    link: "https://myhub.autodesk360.com/ue2d0b8e7/g/shares/SH56a43QTfd62c1cd968a2f34bcb6da74b07",
    tags: ["3D CAD", "Mechanical Design", "Engine Assembly", "Autodesk Viewer"],
  },
];

export function CadFiles() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="CAD Files"
        subtitle="3D computer-aided design models and mechanical assemblies"
        icon={<Box className="w-6 h-6" />}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {cadProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl bg-ocean-mid/50 border border-ocean-light/10">
              <div className="relative h-64 overflow-hidden bg-ocean-deep/30">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} CAD model`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem" }}>
                  {project.title}
                </h2>
                <p className="mt-3 text-ocean-foam/60" style={{ fontSize: "0.92rem", lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-ocean-light/10 text-ocean-light border border-ocean-light/15" style={{ fontSize: "0.75rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/20 hover:bg-ocean-teal/20 transition-all"
                  style={{ fontSize: "0.85rem" }}
                >
                  <ExternalLink className="w-4 h-4" /> Open in Autodesk Viewer
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}