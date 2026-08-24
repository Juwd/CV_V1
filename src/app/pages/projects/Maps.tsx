import { PageHeader } from "../../components/PageHeader";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Map, Layers, Database, Globe2, X, ZoomIn } from "lucide-react";

const mpaMap = new URL("../../../assets/Maps/Marine Protected Areas of the Philippines_v7.png", import.meta.url).href;
const vipMpasMap = new URL("../../../assets/Maps/VIPMPAs_edited.png", import.meta.url).href;
const mkbaMap = new URL("../../../assets/Maps/Whole Philippines MKBA_3rd national workshop.png", import.meta.url).href;

const mapGallery = [
  {
    src: mpaMap,
    alt: "Marine Protected Areas in the Philippines map",
    caption: "Marine Protected Areas in the Philippines, showing MPA points and MPAs with visible polygons as of October 24, 2024.",
  },
  {
    src: vipMpasMap,
    alt: "VIP Marine Protected Areas and Verde Island Passage map",
    caption: "Map of Marine Protected Areas and the Verde Island Passage path, including MPA points and protected-area polygons.",
  },
  {
    src: mkbaMap,
    alt: "Proposed Marine Key Biodiversity Areas of the Philippines map",
    caption: "Proposed Marine Key Biodiversity Areas of the Philippines, dated March 26, 2025, with proposed MKBAs and administrative boundaries.",
  },
];

export function MapsProjects() {
  const [selectedMap, setSelectedMap] = useState<(typeof mapGallery)[number] | null>(null);

  useEffect(() => {
    const preventDefault = (event: Event) => {
      if ((event.target as HTMLElement)?.tagName === "IMG") event.preventDefault();
    };

    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("dragstart", preventDefault);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMap(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Maps"
        subtitle="Marine Protected Areas, biodiversity planning, and geospatial visualization"
        icon={<Map className="w-6 h-6" />}
      />
      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10">
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback src={mpaMap} alt="Marine Protected Areas in the Philippines map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Globe2 className="w-4 h-4" /> Philippines-wide mapping</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Layers className="w-4 h-4" /> Marine geospatial data</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Database className="w-4 h-4" /> MPA Support Network</span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>Developed maps and geospatial visualizations supporting the MPA Support Network and the documentation of marine protected areas across the Philippines.</p>
              <p>The map collection brings together protected-area points, polygons, proposed Marine Key Biodiversity Areas, administrative boundaries, and the Verde Island Passage. These outputs help communicate the spatial distribution of priority marine conservation areas.</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Mapping scope</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Philippine marine areas</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Data themes</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>MPAs and proposed MKBAs</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Map elements</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Points, polygons, and paths</p></div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {mapGallery.map((map) => (
                <button
                  type="button"
                  key={map.alt}
                  onClick={() => setSelectedMap(map)}
                  className="group relative overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-deep/30 text-left cursor-zoom-in"
                  aria-label={`Magnify ${map.alt}`}
                >
                  <ImageWithFallback src={map.src} alt={map.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ocean-deep/75 text-ocean-foam/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/55 to-transparent p-3"><p className="text-ocean-foam/80" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>{map.caption}</p></div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Marine Protected Areas", "Marine Key Biodiversity Areas", "GIS Mapping", "Geospatial Visualization", "Conservation Planning"].map((tag) => <span key={tag} className="px-3 py-1 rounded-full bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/15" style={{ fontSize: "0.8rem" }}>{tag}</span>)}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-deep/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedMap(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMap(null)}
                aria-label="Close enlarged map"
                className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ocean-light/20 bg-ocean-mid/80 text-ocean-foam/80 hover:text-ocean-foam"
              >
                <X className="h-5 w-5" />
              </button>
              <ImageWithFallback
                src={selectedMap.src}
                alt={selectedMap.alt}
                className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
              <p className="mt-4 max-w-3xl text-center text-ocean-foam/80" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
                {selectedMap.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}