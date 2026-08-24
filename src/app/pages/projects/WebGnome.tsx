import { PageHeader } from "../../components/PageHeader";
import { motion } from "motion/react";
import { useEffect } from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Waves } from "lucide-react";

const simulationImage = new URL("../../../assets/WebGnome/07302024_1537_CaviteCity.png", import.meta.url).href;
const simulationVideo = new URL("../../../assets/WebGnome/20243007T1007_Copernicus_ZoomedInManilaBay.mp4", import.meta.url).href;

const simulationGallery = [
  {
    type: "image",
    src: simulationImage,
    alt: "WebGNOME Manila Bay oil spill simulation near Cavite City",
    caption: "WebGNOME simulation view near Cavite City on July 30, 2024 at 15:37.",
  },
  {
    type: "video",
    src: simulationVideo,
    alt: "Copernicus zoomed-in Manila Bay oil spill simulation",
    caption: "Zoomed-in Copernicus view of the simulated Manila Bay oil spill trajectory.",
  },
];

export function WebGnomeProjects() {
  useEffect(() => {
    const preventDefault = (event: Event) => {
      if ((event.target as HTMLElement)?.tagName === "IMG") event.preventDefault();
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
        title="WebGNOME"
        subtitle="Oil spill trajectory modeling for the 2024 Manila Bay incident"
        icon={<Waves className="w-6 h-6" />}
      />
      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10">
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback src={simulationImage} alt="WebGNOME Manila Bay oil spill simulation near Cavite City" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Waves className="w-4 h-4" /> Oil spill modeling</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">WebGNOME simulation</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">2024 Manila Bay incident</span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>
                Modelled the 2024 Manila Bay oil spill using WebGNOME with data provided by the
                Philippine Space Agency and Copernicus.
              </p>
              <p>
                Developed a bulletin board to assist the Philippine Coast Guard in predicting the
                timing and location of the spill, supporting response planning with an accessible
                view of the simulation results.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Incident</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>2024 Manila Bay oil spill</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Data sources</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Philippine Space Agency + Copernicus</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Use case</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Coast Guard response support</p></div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {simulationGallery.map((item) => (
                <div key={item.alt} className="group relative overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-deep/30">
                  {item.type === "video" ? (
                    <video autoPlay muted loop playsInline className="h-64 w-full object-cover" onContextMenu={(event) => event.preventDefault()}>
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <ImageWithFallback src={item.src} alt={item.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/55 to-transparent p-3"><p className="text-ocean-foam/80" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>{item.caption}</p></div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["WebGNOME", "Oil Spill Modeling", "Copernicus", "Philippine Space Agency", "Manila Bay", "Coastal Response"].map((tag) => <span key={tag} className="px-3 py-1 rounded-full bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/15" style={{ fontSize: "0.8rem" }}>{tag}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}