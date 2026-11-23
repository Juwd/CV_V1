import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { ExternalLink, FileText, Image, X, ZoomIn } from "lucide-react";

import posterImage from "../../../assets/PamsPoster2_Marino_V3-1.png";
import kbaPosterImage from "../../../assets/KBA Poster PAMS-preview.jpg";
const posterPdf = new URL("../../../assets/PamsPoster2_Marino_V3.pdf", import.meta.url).href;
const kbaPosterPdf = new URL("../../../assets/KBA Poster PAMS.pdf", import.meta.url).href;

const posters = [
  {
    title: "Updating the Philippine MPA Database through Modern Data Frameworks and API Integration",
    conference: "PHILIPPINE ASSOCIATION OF MARINE SCIENCE",
    image: posterImage,
    pdf: posterPdf,
    role: "Presenter",
    description:
      "This research presentation documents the modernization of the Philippine Marine Protected Area database through updated data frameworks and API integration. The work focuses on improving geospatial data management and making MPA information easier to share across researchers, policymakers, and conservation practitioners.",
  },
  {
    title:
      "Towards Achieving the National 30x30 Biodiversity Conservation Target: Reassessment and Updating of the Philippine Marine Key Biodiversity Areas",
    conference: "PHILIPPINE ASSOCIATION OF MARINE SCIENCE",
    image: kbaPosterImage,
    pdf: kbaPosterPdf,
    role: "Contributor",
    description:
      "This poster presents the reassessment and updating of Philippine Marine Key Biodiversity Areas using the revised IUCN KBA criteria. It reports 136 proposed MKBAs covering 452,359.05 km\u00B2, along with coral reef, seagrass, mangrove, and protected-area coverage findings and the next steps for conservation prioritization.",
  },
] as const;

export function PosterProjects() {
  const [expandedPoster, setExpandedPoster] = useState<(typeof posters)[number] | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedPoster(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Posters"
        subtitle="Research posters on marine protected areas and biodiversity conservation"
        icon={<Image className="w-6 h-6" />}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {posters.map((poster) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-2xl bg-ocean-mid/30 border border-ocean-light/10"
            >
              <button
                type="button"
                onClick={() => setExpandedPoster(poster)}
                className="group relative block w-full cursor-zoom-in bg-white"
                aria-label={`Magnify ${poster.title}`}
              >
                <img src={poster.image} alt={poster.title} className="mx-auto h-[420px] w-full object-contain transition-opacity group-hover:opacity-90" />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ocean-deep/75 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </button>

              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-ocean-teal" style={{ fontSize: "0.8rem" }}>{poster.conference}</p>
                  <span className="rounded-full border border-ocean-teal/20 bg-ocean-teal/10 px-3 py-1 text-ocean-teal" style={{ fontSize: "0.75rem" }}>
                    {poster.role}
                  </span>
                </div>
                <h2 className="mt-3 text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", lineHeight: 1.35 }}>
                  {poster.title}
                </h2>
                <p className="mt-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                  {poster.description}
                </p>
                <a
                  href={poster.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 rounded-xl border border-ocean-teal/20 bg-ocean-teal/10 px-4 py-2 text-ocean-teal transition-all hover:bg-ocean-teal/20"
                  style={{ fontSize: "0.85rem" }}
                >
                  <FileText className="h-4 w-4" /> Open full poster <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {expandedPoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-deep/95 p-4" onClick={() => setExpandedPoster(null)}>
          <div className="relative flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setExpandedPoster(null)} aria-label="Close enlarged poster" className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ocean-light/20 bg-ocean-mid/80 text-ocean-foam/80 hover:text-ocean-foam">
              <X className="h-5 w-5" />
            </button>
            <img src={expandedPoster.image} alt={expandedPoster.title} className="max-h-[94vh] max-w-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}