import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "../components/PageHeader";
import { Compass, MapPin, Calendar, ChevronLeft, ChevronRight, X, ZoomIn, Camera } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import imgBoat from "../../assets/422b90aabe7741de36d82d3210d2436f4dd623ea.png";
import imgAerial from "../../assets/78e34be47906ecc1715118cbb25dab3d65571789.png";
import imgCoastal from "../../assets/6ceb4947719a325f466729bbd0a423e3bae75dc2.png";

const mpaGallery = [
  { src: imgAerial, caption: "Aerial drone shot — crystal-clear waters and reef structure of an MPA site in Pulong Bato Batangas" },
  { src: imgBoat, caption: "Local fishermen's bangka navigating near the MPA boundary of Punta Ilag during site evaluation" },
  { src: imgCoastal, caption: "Coastal rock formation and beach adjacent to a Punta Ilag Marine Protected Area " },
];

const otherFieldWorks = [
  {
    title: "Physical Oceanography Survey",
    location: "Philippines",
    date: "Consultancy",
    description: "Gained hands-on expertise with field sampling instruments through hired consultancy for a Physical Oceanography Survey. Collected oceanographic data using professional-grade sampling equipment.",
    image: "https://images.unsplash.com/photo-1602144586078-7d95c8d7808c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBtYXJpbmUlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzczMzExNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Oceanography", "Field Sampling", "Data Collection"],
  },
  {
    title: "Br. Alfred Shields FSC Marine Station — Reef Monitoring",
    location: "Philippines",
    date: "Field Assistance",
    description: "Acquired adept reef monitoring skills through field assistance work. Conducted underwater surveys and assessments of coral reef health and biodiversity.",
    image: "https://images.unsplash.com/photo-1602144586078-7d95c8d7808c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBtYXJpbmUlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzczMzExNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Reef Monitoring", "Marine Biology", "Underwater Survey"],
  },
  {
    title: "Marine Mammal Surveys — Drone Operations",
    location: "Philippines",
    date: "Balyena.org",
    description: "Skilled drone operator — obtained through field documentation in Marine Mammal Surveys for whales (Balyena.org), citizen science Alwan Method and Para El Mar on-site visits.",
    image: "https://images.unsplash.com/photo-1544070555-a19fbf2277ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGFsZSUyMHdhdGNoaW5nJTIwb2NlYW4lMjBib2F0fGVufDF8fHx8MTc3MzMxMTYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Drone Operations", "Marine Mammals", "Citizen Science"],
  },
];

export function FieldWorks() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextPhoto = () => setActivePhoto((prev) => (prev + 1) % mpaGallery.length);
  const prevPhoto = () => setActivePhoto((prev) => (prev - 1 + mpaGallery.length) % mpaGallery.length);

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Field Works"
        subtitle="Hands-on geospatial data collection and on-site MPA assessments"
        icon={<Compass className="w-6 h-6" />}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* ===== FEATURED: MPA Onsite Validation ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-ocean-teal/15 border border-ocean-teal/20 flex items-center justify-center">
              <Camera className="w-4 h-4 text-ocean-teal" />
            </div>
            <div>
              <span
                className="text-ocean-teal"
                style={{ fontSize: "0.7rem", letterSpacing: "0.12em" }}
              >
                FEATURED FIELD WORK
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10">
            {/* Photo Gallery */}
            <div className="relative">
              {/* Main Image */}
              <div
                className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden cursor-pointer group"
                onClick={() => setLightboxOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <ImageWithFallback
                      src={mpaGallery[activePhoto].src}
                      alt={mpaGallery[activePhoto].caption}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 via-transparent to-ocean-deep/20" />

                {/* Zoom hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-ocean-light/60 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-ocean-foam/80" style={{ fontSize: "0.85rem" }}>
                    {mpaGallery[activePhoto].caption}
                  </p>
                </div>

                {/* Nav arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ocean-deep/60 backdrop-blur-sm border border-ocean-light/15 flex items-center justify-center text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-deep/80 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ocean-deep/60 backdrop-blur-sm border border-ocean-light/15 flex items-center justify-center text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-deep/80 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Photo counter */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-ocean-deep/60 backdrop-blur-sm border border-ocean-light/15 text-ocean-foam/70"
                  style={{ fontSize: "0.75rem" }}
                >
                  {activePhoto + 1} / {mpaGallery.length}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 p-3 bg-ocean-deep/40">
                {mpaGallery.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`relative h-16 sm:h-20 flex-1 rounded-lg overflow-hidden transition-all ${
                      i === activePhoto
                        ? "ring-2 ring-ocean-teal ring-offset-1 ring-offset-ocean-deep opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 sm:p-8">
              <h3
                className="text-ocean-foam mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem" }}
              >
                MPA Onsite Validation — Paral El Mar
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-5 text-ocean-foam/45" style={{ fontSize: "0.85rem" }}>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Luzon, Philippines
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  May 2025 – Sep 2025
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-ocean-teal/15 text-ocean-teal border border-ocean-teal/20" style={{ fontSize: "0.7rem" }}>
                  MPA Science Network
                </span>
              </div>

              <div className="space-y-4 text-ocean-foam/55" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                <p>
                  Evaluated MPA Management through onsite visits and produced field reports indicating 
                  Key Management Practices, Benefit/Impacts, Issues and Threats on the protected areas.
                </p>
                <p>
                  Collaborated with MPA managers and practitioners to further guide the collective effort 
                  of local communities to protect biodiversity, strengthen climate resilience, and restore 
                  socio-environmental systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["MPA Assessment", "Onsite Validation", "Field Reports", "Drone Documentation", "Stakeholder Engagement", "Conservation"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-ocean-light/10 text-ocean-light border border-ocean-light/15"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== OTHER FIELD WORKS ===== */}
        <div className="mb-8">
          <h2
            className="text-ocean-foam/70 mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}
          >
            Other Field Experiences
          </h2>
        </div>

        <div className="space-y-6">
          {otherFieldWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10 hover:border-ocean-light/20 transition-all"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-72 h-48 md:h-auto shrink-0 relative overflow-hidden">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-deep/50 hidden md:block" />
                </div>
                <div className="p-6 flex-1">
                  <h3
                    className="text-ocean-foam mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem" }}
                  >
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-ocean-foam/40" style={{ fontSize: "0.85rem" }}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {work.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {work.date}
                    </span>
                  </div>
                  <p className="text-ocean-foam/55 mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-ocean-light/10 text-ocean-light border border-ocean-light/15"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="absolute inset-0 bg-ocean-deep/95 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-ocean-mid/60 border border-ocean-light/20 flex items-center justify-center text-ocean-foam/70 hover:text-ocean-foam transition-all z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Main image */}
              <div className="relative flex-1 min-h-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <ImageWithFallback
                      src={mpaGallery[activePhoto].src}
                      alt={mpaGallery[activePhoto].caption}
                      className="w-full max-h-[70vh] object-contain rounded-xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ocean-deep/70 backdrop-blur-sm border border-ocean-light/15 flex items-center justify-center text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-deep/90 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ocean-deep/70 backdrop-blur-sm border border-ocean-light/15 flex items-center justify-center text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-deep/90 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption bar */}
              <div className="mt-4 text-center">
                <p className="text-ocean-foam/70 mb-3" style={{ fontSize: "0.9rem" }}>
                  {mpaGallery[activePhoto].caption}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {mpaGallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activePhoto
                          ? "bg-ocean-teal w-6"
                          : "bg-ocean-foam/25 hover:bg-ocean-foam/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
