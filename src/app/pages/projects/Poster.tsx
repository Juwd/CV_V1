import { motion } from "motion/react";
import { PageHeader } from "../../components/PageHeader";
import { Image } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const posters = [
  {
    title: "Updating the Philippine MPA Database through Modern Data Frameworks and API Integration",
    event: "Philippine Association of Marine Science (PAMS)",
    description: "Enhanced the MPA database's functionality by integrating modern data frameworks, optimizing geospatial data management, and developing an API for seamless data sharing and interoperability among researchers, policymakers, and conservation practitioners.",
  },
];

export function PosterProjects() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Posters"
        subtitle="Research posters and visual presentations for conferences and events"
        icon={<Image className="w-6 h-6" />}
      />
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {posters.map((poster, i) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10 hover:border-ocean-light/20 transition-all"
            >
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-ocean-surface/40 to-ocean-mid/60 border border-ocean-light/10 mb-4 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563770660834-82b48f27ec9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHdvcmtzaG9wJTIwaGFuZHMlMjBvbnxlbnwxfHx8fDE3NzMzMTE2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={poster.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
              </div>
              <h3
                className="text-ocean-foam mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {poster.title}
              </h3>
              <p className="text-ocean-teal mb-2" style={{ fontSize: "0.8rem" }}>
                {poster.event}
              </p>
              <p className="text-ocean-foam/50" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                {poster.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}