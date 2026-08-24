import { motion } from "motion/react";
import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { Waves, Users, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

import alwanPhoto1 from "../../../assets/Br. Alfred Shields FSC Marine Station — Reef Monitoring/PXL_20250624_012516302.jpg";
import alwanPhoto2 from "../../../assets/Br. Alfred Shields FSC Marine Station — Reef Monitoring/dji_fly_20250625_083304_330_1750814465332_photo_optimized.jpg";
import alwanPhoto3 from "../../../assets/Br. Alfred Shields FSC Marine Station — Reef Monitoring/dji_fly_20250625_071230_310_1750806757773_photo_optimized.jpg";
import alwanVideo from "../../../assets/Br. Alfred Shields FSC Marine Station — Reef Monitoring/dji_fly_20250625_071750_316_1750921437646_video.mp4";

const alwanGallery = [
  {
    type: "image",
    src: alwanPhoto1,
    alt: "Teaching the Alwan Method for reef monitoring",
    caption: "Teaching the Alwan Method for Reef Monitoring",
  },
  {
    type: "image",
    src: alwanPhoto2,
    alt: "Field team assessing reef condition",
    caption: "One of the field team group practicing the Alwan Method for assessing reef condition",
  },
  {
    type: "image",
    src: alwanPhoto3,
    alt: "Practical workshop for conducting the Alwan Method",
    caption: "Practical workshop for conducting the Alwan Method",
  },
  {
    type: "video",
    src: alwanVideo,
    alt: "Reef monitoring video footage",
    caption: "Field footage from the reef monitoring activity",
  },
];

export function Alwan() {
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
        title="Alwan Method Workshop"
        subtitle="The Alwan method is a simplified, low-cost citizen science framework used to monitor and assess coral reef health."
        icon={<Waves className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10"
        >
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback
              src={alwanPhoto1}
              alt="Br. Alfred Shields FSC Marine Station — Reef Monitoring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Users className="w-4 h-4" /> Citizen Science Volunteer
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <MapPin className="w-4 h-4" /> Philippines
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Calendar className="w-4 h-4" /> On-site Visits
              </span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>
                The Alwan Method is a citizen science approach used in marine and coastal conservation 
                assessments. Participated in on-site visits applying the Alwan Method for environmental 
                data collection and community engagement.
              </p>
              <p>
                Contributed to field documentation through drone operations and data collection, 
                supporting marine and coastal conservation initiatives across Philippine communities.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {alwanGallery.map((item) => (
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
              {["Citizen Science", "Field Documentation", "Drone Operations", "Conservation", "Community Engagement"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-ocean-light/10 text-ocean-light border border-ocean-light/15"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}