import { motion } from "motion/react";
import { PageHeader } from "../../components/PageHeader";
import { Fish, Users, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function Balyena() {
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
              src="https://images.unsplash.com/photo-1544070555-a19fbf2277ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGFsZSUyMHdhdGNoaW5nJTIwb2NlYW4lMjBib2F0fGVufDF8fHx8MTc3MzMxMTYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Balyena whale watching"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Users className="w-4 h-4" /> GIS Volunteer / Research Assistant
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <MapPin className="w-4 h-4" /> Bohol Sea, Philippines
              </span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50">
                <Calendar className="w-4 h-4" /> 2023 - Present
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