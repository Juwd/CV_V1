import { motion } from "motion/react";
import { PageHeader } from "../../components/PageHeader";
import { Palette, Users, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function Alwan() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Alwan Method Workshop"
        subtitle="Community art-based healing workshops for disaster-affected communities"
        icon={<Palette className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10"
        >
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765018028697-2baae4577cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXIlMjBncm91cCUyMG91dGRvb3J8ZW58MXx8fHwxNzczMzExNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Alwan Method Workshop"
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