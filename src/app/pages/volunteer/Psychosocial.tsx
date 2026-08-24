import { motion } from "motion/react";
import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { Heart, Users, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const groupPhoto = new URL("../../../assets/PsychoSocial Services/GroupPhoto.jpg", import.meta.url).href;
const psychosocialPhoto1 = new URL("../../../assets/PsychoSocial Services/Photo_1.jpg", import.meta.url).href;
const psychosocialPhoto2 = new URL("../../../assets/PsychoSocial Services/Photo_2.jpg", import.meta.url).href;
const psychosocialPhoto3 = new URL("../../../assets/PsychoSocial Services/Photo_3.jpg", import.meta.url).href;

const psychosocialGallery = [
  {
    src: psychosocialPhoto1,
    alt: "Providing psychosocial support to a child",
    caption: "Providing psychosocial support to children",
  },
  {
    src: psychosocialPhoto2,
    alt: "Supporting a child during a psychosocial activity",
    caption: "Empathizing with the child to comfort them and let them feel heard",
  },
  {
    src: psychosocialPhoto3,
    alt: "Psychosocial volunteer speaking with a child",
    caption: "Connecting with children in a school setting",
  },
];

export function Psychosocial() {
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
        title="Psychosocial Services"
        subtitle="On-call mental health and psychosocial support for children and families"
        icon={<Heart className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10"
        >
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback
              src={groupPhoto}
              alt="Psychosocial volunteer group at a school"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Users className="w-4 h-4" /> Trained Psychosocial Volunteer
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <MapPin className="w-4 h-4" /> Bantay Bata 163
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Calendar className="w-4 h-4" /> 2023 – Current
              </span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>
                Served as an on-call volunteer supporting children and their parents as they coped 
                with stress and managed their mental health during and after natural disasters.
              </p>
              <p>
                Visited schools to provide guidance and applied training from Project Mind (Mental 
                Health Intervention for Children in Need/Affected by Disasters).
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {psychosocialGallery.map((item) => (
                <div key={item.alt} className="group relative overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-deep/30">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/85 via-ocean-deep/45 to-transparent p-3">
                    <p className="text-ocean-foam/80" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Project Mind", "Children and Families", "Disaster Response", "Mental Health Support", "School Guidance"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/15"
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