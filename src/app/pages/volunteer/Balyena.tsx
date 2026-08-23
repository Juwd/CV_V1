import { motion } from "motion/react";
import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { Fish, Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

import marinePhoto from "../../../assets/Marine Mammal Surveys — Drone Operations/DJI_0196.JPG";
import marineVideo from "../../../assets/Marine Mammal Surveys — Drone Operations/DJI_0207.MP4";
import marineClip from "../../../assets/Marine Mammal Surveys — Drone Operations/Shark_Short.mp4";

const balyenaGallery = [
  {
    type: "image",
    src: marinePhoto,
    alt: "Marine mammal survey in the Philippines",
    caption: "Marine mammal survey expedition 2025",
  },
  {
    type: "video",
    src: marineVideo,
    alt: "Drone survey footage from the marine mammal survey",
    caption: "Drone footage capturing marine mammal sightings during the survey",
  },
  {
    type: "video",
    src: marineClip,
    alt: "Short marine mammal survey clip",
    caption: "Shark sighting during the marine mammal survey",
  },
];

export function Balyena() {
  useEffect(() => {
    const preventDefault = (event: Event) => {
      if ((event.target as HTMLElement)?.tagName === "IMG") {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("dragstart", preventDefault);

    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
    };
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Balyena.org"
        subtitle="Marine wildlife conservation and cetacean research in the Philippines"
        icon={<Fish className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10"
        >
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback
              src={marinePhoto}
              alt="Marine Mammal Surveys — Drone Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Users className="w-4 h-4" /> Field Volunteer
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <MapPin className="w-4 h-4" /> Babuyanes Islands, Philippines
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Calendar className="w-4 h-4" /> 2025
              </span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>
                Balyena.org is a Philippine marine wildlife research and conservation organization
                dedicated to studying cetaceans (whales and dolphins) in Philippine waters.
              </p>
              <p>
                Served as a skilled drone operator for Marine Mammal Surveys, conducting field documentation 
                of whale populations. Contributed to aerial surveys and data collection that supports 
                Balyena.org's cetacean research and conservation efforts across Philippine waters.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {balyenaGallery.map((item) => (
                <div key={item.alt} className="group relative overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-deep/30">
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      playsInline
                      className="h-64 w-full object-cover"
                     onContextMenu={(e) => e.preventDefault()} // Prevents right-click 'Show Controls'
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/85 via-ocean-deep/45 to-transparent p-3">
                    <p className="text-ocean-foam/80" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Marine Conservation", "Drone Operations", "Cetacean Research", "Field Documentation", "Marine Mammal Surveys"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/15"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href="https://balyena.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/20 hover:bg-ocean-teal/20 transition-all"
              style={{ fontSize: "0.85rem" }}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Balyena.org
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}