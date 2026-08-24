import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { ExternalLink, FileText, Image, X, ZoomIn } from "lucide-react";

import posterImage from "../../../assets/PamsPoster2_Marino_V3-1.png";
const posterPdf = new URL("../../../assets/PamsPoster2_Marino_V3.pdf", import.meta.url).href;
const posterTitle = "Updating the Philippine MPA Database through Modern Data Frameworks and API Integration";

export function PosterProjects() {
  const [posterExpanded, setPosterExpanded] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPosterExpanded(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Posters"
        subtitle="Research poster on modernizing the Philippine Marine Protected Area database"
        icon={<Image className="w-6 h-6" />}
      />
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-2xl bg-ocean-mid/30 border border-ocean-light/10"
        >
          <button
            type="button"
            onClick={() => setPosterExpanded(true)}
            className="group relative block w-full cursor-zoom-in bg-white"
            aria-label="Magnify research poster"
          >
            <img src={posterImage} alt={posterTitle} className="mx-auto max-h-[78vh] w-full object-contain transition-opacity group-hover:opacity-90" />
            <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ocean-deep/75 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ZoomIn className="h-5 w-5" />
            </span>
          </button>

          {posterExpanded && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-deep/95 p-4" onClick={() => setPosterExpanded(false)}>
              <div className="relative flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
                <button type="button" onClick={() => setPosterExpanded(false)} aria-label="Close enlarged poster" className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ocean-light/20 bg-ocean-mid/80 text-ocean-foam/80 hover:text-ocean-foam">
                  <X className="h-5 w-5" />
                </button>
                <img src={posterImage} alt={posterTitle} className="max-h-[94vh] max-w-full object-contain" />
              </div>
            </div>
          )}

          <div className="p-8">
            <p className="text-ocean-teal" style={{ fontSize: "0.8rem" }}>PHILIPPINE ASSOCIATION OF MARINE SCIENCE</p>
            <h2 className="mt-2 text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", lineHeight: 1.3 }}>
              {posterTitle}
            </h2>
            <p className="mt-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              This research presentation documents the modernization of the Philippine Marine Protected
              Area database through updated data frameworks and API integration. The work focuses on
              improving geospatial data management and making MPA information easier to share across
              researchers, policymakers, and conservation practitioners.
            </p>
            <a
              href={posterPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-xl border border-ocean-teal/20 bg-ocean-teal/10 px-4 py-2 text-ocean-teal transition-all hover:bg-ocean-teal/20"
              style={{ fontSize: "0.85rem" }}
            >
              <FileText className="h-4 w-4" /> Open full poster <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}