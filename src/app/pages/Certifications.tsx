import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "../components/PageHeader";
import { Award, ExternalLink, Calendar, X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import imgKbaTraining from "/assets/certifications/586784cb33755218775e6e5495f96a80d95bc3a0.png";
import imgKbaExam from "/assets/certifications/15334cfa948c06cd48d109347c0fcdf024962e29.png";
import imgPamsParticipation from "/assets/certifications/eb6af9d548bde1389e5ca2dbc41f34edc73d3483.png";
import imgPamsPoster from "/assets/certifications/3761d42df2b50c221b5e08e65197e9b32cc521fe.png";
import imgCopernicus from "/assets/certifications/ac2cb5306c42971479e1d67929e58ace56070a83.png";
import imgMarineKba from "/assets/certifications/6ce8073816e7d36bc23475f452041c4e20936ace.png";
import imgAccentureRecognition from "/assets/certifications/4b1c520c1bb8bc72479dcc4c3f2aad10707fb1f2.png";
import imgAccentureParticipation from "/assets/certifications/1818d14d7269e420347e9353e950df4b8391a776.png";
import imgVentureLab from "/assets/certifications/5489b67409feba58d261b8264e52ba996c05530a.png";
import imgSchneider from "/assets/certifications/4a0f2f357f2ba27ab684d79813cd4955da2d2f7b.png";

const certifications = [
  {
    id: "kba-training",
    title: "KBA Advanced Practitioner-level Training",
    issuer: "Key Biodiversity Areas Partnership",
    date: "Feb 13, 2025",
    category: "Marine Science",
    description: "Completed KBA Advanced Practitioner-level training — Identifying and delineating Key Biodiversity Areas.",
    image: imgKbaTraining,
  },
  {
    id: "kba-exam",
    title: "KBA Advanced Practitioner-level Exam — with Distinction",
    issuer: "Key Biodiversity Areas Partnership",
    date: "Feb 13, 2025",
    category: "Marine Science",
    description: "Passed the KBA Advanced Practitioner-level exam with Distinction — Identifying and delineating Key Biodiversity Areas.",
    image: imgKbaExam,
  },
  {
    id: "pams-participation",
    title: "18th National Symposium on Marine Science",
    issuer: "Philippine Association of Marine Science (PAMS)",
    date: "Jul 10–12, 2025",
    category: "Marine Science",
    description: "Active participation in the 18th National Symposium on Marine Science — \"Oceans at a Crossroad: Integrating Science, Policy, and Action for Sustainable Philippine Seas\" at University of the Philippines Cebu, Lahug, Cebu City.",
    image: imgPamsParticipation,
  },
  {
    id: "pams-poster",
    title: "Poster Presentor — PAMS 18th National Symposium",
    issuer: "Philippine Association of Marine Science (PAMS)",
    date: "Jul 10–12, 2025",
    category: "Marine Science",
    description: "Certificate of Recognition as Poster Presentor for the paper: \"Updating the Philippine Marine Protected Area (MPA) Database through modern Data Frameworks and API Integration.\"",
    image: imgPamsPoster,
  },
  {
    id: "copernicus",
    title: "#MarineData4Asia 2024",
    issuer: "Copernicus Marine Service / Mercator Ocean International",
    date: "Jan 25–26, 2024",
    category: "Remote Sensing",
    description: "Attended the MarineData4Asia 2024 workshop organised by Copernicus, the Copernicus Marine Service, and Mercator Ocean International.",
    image: imgCopernicus,
  },
  {
    id: "marine-kba",
    title: "Online Marine KBA Updating Workshop",
    issuer: "Marine Environment and Resources Foundation, Inc. (MERF)",
    date: "Jun 21, 2024",
    category: "Marine Science",
    description: "Participated in the Online Marine Key Biodiversity Area Updating Workshop for West Philippine Sea & North Philippine Sea. Co-organised by MSN, MERF, Rare, Oceana, WWF, Wildlife Conservation Society, and UNDP.",
    image: imgMarineKba,
  },
  {
    id: "accenture-recognition",
    title: "SLC New-Generation Innovator — Certificate of Recognition",
    issuer: "Accenture Philippines",
    date: "May 20, 2022",
    category: "Innovation",
    description: "Nominated as SLC New-Generation Innovator at Accenture's Student Leadership Conference 2022. Signed by Jennifer C. Tuazon, SLC 2022 MD Sponsor.",
    image: imgAccentureRecognition,
  },
  {
    id: "accenture-participation",
    title: "Accenture Student Leadership Conference — Certificate of Participation",
    issuer: "Accenture Philippines",
    date: "May 6–20, 2022",
    category: "Innovation",
    description: "Attended and successfully completed Accenture's Student Leadership Conference from May 6 to 20, 2022.",
    image: imgAccentureParticipation,
  },
  {
    id: "venture-lab",
    title: "Venture Lab Series — 3rd Place (Team BrainCheck)",
    issuer: "Upkey & IE Business School",
    date: "Jul 2021",
    category: "Innovation",
    description: "Participated and completed the one week Venture Lab Series in partnership with IE Business School. Team BrainCheck won third place in the venture lab series out of 4,000+ interns and 200+ teams.",
    image: imgVentureLab,
  },
  {
    id: "schneider",
    title: "Schneider Global Student Experience",
    issuer: "Schneider Electric",
    date: "Jun – Aug 2022",
    category: "Energy",
    description: "Completed the Schneider Global Student Experience program. Developed skills in the energy and automation industry through Schneider Electric's curated employee learning library.",
    image: imgSchneider,
  },
];

const categoryColors: Record<string, string> = {
  GIS: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Remote Sensing": "bg-purple-500/15 text-purple-300 border-purple-500/20",
  Programming: "bg-green-500/15 text-green-300 border-green-500/20",
  Energy: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "Web Dev": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "Marine Science": "bg-teal-500/15 text-teal-300 border-teal-500/20",
  Engineering: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  Communication: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  Innovation: "bg-violet-500/15 text-violet-300 border-violet-500/20",
};

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Certifications"
        subtitle="Professional credentials, awards, and continuous learning achievements"
        icon={<Award className="w-6 h-6" />}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Certificate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10 hover:border-ocean-light/25 transition-all hover:shadow-lg hover:shadow-ocean-light/5"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <ImageWithFallback
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain bg-white/95 p-1 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-ocean-light/80 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full border ${categoryColors[cert.category] || "bg-ocean-light/15 text-ocean-light border-ocean-light/20"}`}
                    style={{ fontSize: "0.65rem" }}
                  >
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 text-ocean-foam/40" style={{ fontSize: "0.7rem" }}>
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>
                <h3
                  className="text-ocean-foam mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", lineHeight: 1.3 }}
                >
                  {cert.title}
                </h3>
                <p className="text-ocean-foam/40" style={{ fontSize: "0.75rem" }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ocean-deep/90 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-ocean-mid/50 border border-ocean-light/15 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-ocean-deep/80 border border-ocean-light/20 flex items-center justify-center text-ocean-foam/70 hover:text-ocean-foam hover:border-ocean-light/40 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="flex-1 min-h-0 p-4 flex items-center justify-center overflow-auto">
                <ImageWithFallback
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl bg-white/95 shadow-2xl"
                />
              </div>

              {/* Info Bar */}
              <div className="shrink-0 p-5 border-t border-ocean-light/10 bg-ocean-deep/40">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full border ${categoryColors[selectedCert.category] || "bg-ocean-light/15 text-ocean-light border-ocean-light/20"}`}
                    style={{ fontSize: "0.7rem" }}
                  >
                    {selectedCert.category}
                  </span>
                  <span className="flex items-center gap-1 text-ocean-foam/40" style={{ fontSize: "0.75rem" }}>
                    <Calendar className="w-3 h-3" />
                    {selectedCert.date}
                  </span>
                </div>
                <h3
                  className="text-ocean-foam mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                >
                  {selectedCert.title}
                </h3>
                <p className="text-ocean-foam/50 mb-1" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {selectedCert.description}
                </p>
                <p className="flex items-center gap-1 text-ocean-foam/40" style={{ fontSize: "0.8rem" }}>
                  <ExternalLink className="w-3 h-3" />
                  {selectedCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
