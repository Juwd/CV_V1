import { PageHeader } from "../../components/PageHeader";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ExternalLink, Rocket } from "lucide-react";

const accentureImage = new URL("../../../assets/Startup/ACCENTURE SLC.jpg", import.meta.url).href;
const brainCheckImage = new URL("../../../assets/Startup/BrainCheck.jpg", import.meta.url).href;
const gabayPrototypeUrl = "https://www.figma.com/proto/a0cQ7xcQftxz0rrlXH3gz2/Gabay?node-id=2646-3227&scaling=scale-down&page-id=2590%3A5982&starting-point-node-id=2646%3A3227&show-proto-sidebar=1&t=dDiVF8iiPGPPwYTO-1";
const japanFoundationArticleUrl = "https://jfmo.org.ph/events-and-courses/project-inclusive-design-people-disabilities/";
const japanFoundationFacebookUrl = "https://www.facebook.com/jfmanila/photos/a.106815170803/10159301197485804/";

const projects = [
  {
    title: "Gabay — Inclusive Mobility Companion",
    description: "Gabay was one of the winners of the WE Project Inclusive Design Challenge. It is an app mobility companion designed to help bridge transportation gaps for persons with disabilities in the Philippines and Japan.",
    image: "https://images.unsplash.com/photo-1576158113421-5484e37d43f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXAlMjBkaWdpdGFsJTIwbGF5ZXJzfGVufDF8fHx8MTc3MzMxMTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Inclusive Design", "Accessibility", "Mobility", "Social Impact", "Award Winner"],
    links: [
      { label: "View Figma prototype", href: gabayPrototypeUrl },
      { label: "Read Japan Foundation article", href: japanFoundationArticleUrl },
      { label: "View Facebook post", href: japanFoundationFacebookUrl },
    ],
  },
  {
    title: "Accenture SLC — Energy Solutions Pitch",
    description: "Developed a business pitch addressing UN SDG 7 by promoting affordable, reliable, and modern energy solutions that enable households to monitor real-time electricity usage and achieve up to 50% cost savings. Nominated as SLC New-Generation Innovator among hundreds of participants.",
    image: accentureImage,
    tags: ["Accenture", "UN SDG 7", "Energy", "Innovation"],
    links: [],
  },
  {
    title: "BrainCheck — Venture Lab Series",
    description: "Developed BrainCheck, a health-support application that helps patients manage seizures through tracking, machine learning, and data collection via a cloud server for doctors to monitor. Collaborated with students around the world and coordinated across time zones to develop the product in one week.",
    image: brainCheckImage,
    tags: ["BrainCheck", "Machine Learning", "Health Technology", "Cloud Data", "3rd Place"],
    links: [],
  },
];

export function Gabay() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Gabay & Startup Projects"
        subtitle="Inclusive design, social impact applications, and innovation projects"
        icon={<Rocket className="w-6 h-6" />}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-ocean-mid/50 border border-ocean-light/10">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
              </div>
              <div className="p-5">
                <h2 className="text-ocean-foam mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h2>
                <p className="text-ocean-foam/60 mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-full bg-ocean-light/10 text-ocean-light border border-ocean-light/15" style={{ fontSize: "0.75rem" }}>{tag}</span>)}
                </div>
                {p.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ocean-teal hover:text-ocean-foam transition-colors" style={{ fontSize: "0.8rem" }}>
                        <ExternalLink className="w-3.5 h-3.5" /> {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}