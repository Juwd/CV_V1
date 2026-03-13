import { motion } from "motion/react";
import { PageHeader } from "../components/PageHeader";
import { GraduationCap, Calendar, MapPin, Users } from "lucide-react";

const workshops = [
  {
    title: "MPA Workshops — Stakeholder Coordination",
    role: "Coordinator / Facilitator",
    organizer: "Marine Protected Area Support Network (MSN)",
    location: "Philippines",
    date: "2024 – Present",
    description: "Led and coordinated international and national stakeholders during MPA Workshops, expanding the reach of the MPA database and leading to more collaborative opportunities in the goal of saving 30% of the ocean by 2030 and improving management of MPAs.",
  },
  {
    title: "Advocacy Events — UP Volunteers for Children",
    role: "Event Coordinator",
    organizer: "UP Volunteers for Children",
    location: "University of the Philippines",
    date: "2019 – 2022",
    description: "Organized advocacy events and workshops under the MSN and UP Volunteers for Children. Oversaw a team of 10 in recruitment and engagement of 200+ volunteers for advocacy-oriented causes.",
  },
  {
    title: "Venture Lab Series — IE Business School Spain",
    role: "Participant / 3rd Place",
    organizer: "IE Business School",
    location: "Global (Remote)",
    date: "2022",
    description: "Received a podium finish out of 4,000+ interns and 200+ teams in a global pitching competition. Demonstrated mastery in business, innovation, and the ability to develop and pitch innovative ideas through cross-cultural collaboration.",
  },
  {
    title: "Schneider Global Student Experience",
    role: "Participant / Presenter",
    organizer: "Schneider Electric",
    location: "Global",
    date: "—",
    description: "Created a professional video presentation illustrating the use of Schneider Electric products as sustainable alternatives to optimize energy efficiency in logistics.",
  },
  {
    title: "AI & Deep Learning Courses",
    role: "Learner",
    organizer: "Deeplearning.ai / Hugging Face",
    location: "Online",
    date: "—",
    description: "Completed courses in AI Programming (PyTorch) at Deeplearning.ai and explored models on Hugging Face. Building beginner-level competency in machine learning and neural networks.",
  },
];

export function Workshops() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Workshops"
        subtitle="Technical training, seminars, and professional development"
        icon={<GraduationCap className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ocean-light/15 hidden md:block" />

          <div className="space-y-6">
            {workshops.map((ws, i) => (
              <motion.div
                key={ws.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-ocean-light/20 border-2 border-ocean-light/40 hidden md:block" />

                <div className="p-6 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10 hover:border-ocean-light/20 transition-all">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3
                      className="text-ocean-foam"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {ws.title}
                    </h3>
                    <span
                      className="px-2 py-0.5 rounded-full bg-ocean-teal/15 text-ocean-teal border border-ocean-teal/20"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {ws.role}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-ocean-foam/40" style={{ fontSize: "0.8rem" }}>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {ws.organizer}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {ws.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {ws.date}
                    </span>
                  </div>
                  <p className="text-ocean-foam/50" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {ws.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}