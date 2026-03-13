import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  MapPin,
  Wind,
  Code,
  Globe,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Waves,
  ChevronDown,
  Play,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgProfile from "../../assets/5340b31f355b944aa50c4bae35822c3890f91e21.png";

const skills = [
  { icon: <Globe className="w-6 h-6" />, title: "Geospatial Development", desc: "QGIS, ArcGIS, Leaflet.js, Mapbox, GeoServer, RESTful APIs, GeoPandas, spatial data pipelines" },
  { icon: <Wind className="w-6 h-6" />, title: "Mechanical Engineering", desc: "ANSYS CFD, SolidWorks, MATLAB, 3D CAD Design, Finite Element Analysis, Marine Current Turbines" },
  { icon: <Code className="w-6 h-6" />, title: "Full-Stack Web Development", desc: "MERN/MESN Stack, Git, Docker, PostgreSQL, MongoDB, REST APIs, Linode Cloud Deployment" },
  { icon: <MapPin className="w-6 h-6" />, title: "Environmental Science", desc: "Marine Protected Areas, KBA Assessment, Oil Spill Modelling, Reef Monitoring, Drone Operations" },
];

const highlights = [
  { label: "Projects", value: "9+", link: "/projects/ansys" },
  { label: "Certifications", value: "10", link: "/certifications" },
  { label: "Volunteer Orgs", value: "3", link: "/volunteer/alwan" },
  { label: "Awards", value: "3", link: "/workshops" },
];

/* Floating bubble component for ambient ocean feel */
function Bubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 8 + 10;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: `-${size}px`,
              background: `radial-gradient(circle, rgba(59,130,196,0.4) 0%, rgba(59,130,196,0.05) 100%)`,
              animation: `bubbleRise ${duration}s ease-in infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes bubbleRise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const portraitY = useTransform(scrollY, [0, 800], [0, -80]);
  const textY = useTransform(scrollY, [0, 800], [0, 60]);

  const [videoLoaded, setVideoLoaded] = useState(false);

  /* Typewriter effect for subtitle */
  const roles = [
    "Geospatial Web Developer",
    "Mechanical Engineer",
    "GIS Specialist",
    "Marine Conservation Advocate",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 35 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="relative">
      {/* ===== CINEMATIC HERO ===== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          {/* 
            Replace this video src with your actual ocean/intro video from the Google Drive folder.
            The video should be a dark ocean or underwater scene for best results.
          */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-30" : "opacity-0"
            }`}
            poster="https://images.unsplash.com/photo-1589363794163-c428490365c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjB1bmRlcndhdGVyJTIwZGFyayUyMGJsdWV8ZW58MXx8fHwxNzczMzE3Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          >
            {/* Add your video source here - e.g. <source src="/your-ocean-video.mp4" type="video/mp4" /> */}
          </video>

          {/* Fallback background image (shows while video loads or if no video) */}
          {!videoLoaded && (
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1589363794163-c428490365c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjB1bmRlcndhdGVyJTIwZGFyayUyMGJsdWV8ZW58MXx8fHwxNzczMzE3Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Deep ocean background"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
          )}
        </motion.div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-deep/85 to-ocean-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-ocean-deep/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ocean-deep to-transparent" />

        {/* Ambient bubbles */}
        <Bubbles />

        {/* Hero content — split layout */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text content */}
              <motion.div
                style={{ y: textY }}
                className="order-2 lg:order-1 text-center lg:text-left"
              >
                {/* Greeting tag */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-teal/10 border border-ocean-teal/25 mb-8"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-ocean-teal"
                    style={{ animation: "pulse 2s ease-in-out infinite" }}
                  />
                  <span className="text-ocean-teal" style={{ fontSize: "0.8rem", letterSpacing: "0.08em" }}>
                    AVAILABLE FOR OPPORTUNITIES
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-ocean-foam mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Jude Wincel
                  <br />
                  <span className="text-ocean-light">Marino</span>
                </motion.h1>

                {/* Typewriter role */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mb-6 h-8 flex items-center lg:justify-start justify-center"
                >
                  <span
                    className="text-ocean-foam/50 font-mono"
                    style={{ fontSize: "1rem", letterSpacing: "0.04em" }}
                  >
                    {"// "}
                    <span className="text-ocean-teal">
                      {roles[roleIndex].substring(0, charIndex)}
                    </span>
                    <span
                      className="text-ocean-light inline-block w-[2px] h-5 ml-0.5 align-middle"
                      style={{ animation: "blink 1s step-end infinite", backgroundColor: "currentColor" }}
                    />
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="max-w-lg mx-auto lg:mx-0 mb-10 text-ocean-foam/55"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Skilled in project and database management with a solid foundation in Geospatial Analysis, 
                  Full-stack Development, and Environmental Modelling. Passionate about biodiversity 
                  and climate resilience — mapping the world, one layer at a time.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
                >
                  <Link
                    to="/projects/maps"
                    className="group flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-ocean-light text-white hover:bg-ocean-light/90 transition-all shadow-lg shadow-ocean-light/20 hover:shadow-ocean-light/30 hover:scale-[1.02]"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <Play className="w-4 h-4" />
                    Explore My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/5 text-ocean-foam border border-ocean-light/20 hover:bg-white/10 hover:border-ocean-light/30 transition-all backdrop-blur-sm"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </Link>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <span className="text-ocean-foam/30 mr-1" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                    CONNECT
                  </span>
                  <div className="w-8 h-px bg-ocean-light/20" />
                  <a
                    href="https://www.linkedin.com/in/jude-wincel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-ocean-light/10 text-ocean-foam/50 hover:text-ocean-light hover:bg-ocean-light/10 hover:border-ocean-light/25 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/judewincel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-ocean-light/10 text-ocean-foam/50 hover:text-ocean-light hover:bg-ocean-light/10 hover:border-ocean-light/25 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:judewincel@gmail.com"
                    className="p-2.5 rounded-xl bg-white/5 border border-ocean-light/10 text-ocean-foam/50 hover:text-ocean-light hover:bg-ocean-light/10 hover:border-ocean-light/25 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: Large Portrait */}
              <motion.div
                style={{ y: portraitY }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Decorative ring */}
                  <div
                    className="absolute -inset-4 rounded-full border border-ocean-light/10"
                    style={{ animation: "spin 30s linear infinite" }}
                  />
                  <div
                    className="absolute -inset-8 rounded-full border border-dashed border-ocean-teal/10"
                    style={{ animation: "spin 45s linear infinite reverse" }}
                  />

                  {/* Glow effect */}
                  <div className="absolute -inset-6 bg-ocean-light/5 rounded-full blur-3xl" />
                  <div className="absolute -inset-12 bg-ocean-teal/3 rounded-full blur-[60px]" />

                  {/* Portrait container */}
                  <div
                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden"
                    style={{
                      boxShadow: "0 0 80px rgba(59,130,196,0.15), 0 0 160px rgba(34,184,160,0.05), inset 0 0 60px rgba(10,22,40,0.4)",
                    }}
                  >
                    {/* Border gradient overlay */}
                    <div
                      className="absolute inset-0 rounded-full z-10 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(59,130,196,0.3) 0%, transparent 40%, transparent 60%, rgba(34,184,160,0.2) 100%)",
                      }}
                    />
                    <div className="absolute inset-[3px] rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={imgProfile}
                        alt="Jude Wincel Marino"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating accent badges */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-4 top-1/4 px-3 py-2 rounded-xl bg-ocean-mid/80 backdrop-blur-xl border border-ocean-light/15 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-ocean-teal/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-ocean-teal" />
                      </div>
                      <div>
                        <div className="text-ocean-foam" style={{ fontSize: "0.7rem" }}>GIS</div>
                        <div className="text-ocean-foam/40" style={{ fontSize: "0.6rem" }}>Specialist</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-2 bottom-1/4 px-3 py-2 rounded-xl bg-ocean-mid/80 backdrop-blur-xl border border-ocean-light/15 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-ocean-light/20 flex items-center justify-center">
                        <Wind className="w-4 h-4 text-ocean-light" />
                      </div>
                      <div>
                        <div className="text-ocean-foam" style={{ fontSize: "0.7rem" }}>Mech</div>
                        <div className="text-ocean-foam/40" style={{ fontSize: "0.6rem" }}>Engineer</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-ocean-foam/30" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-ocean-light/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS RIBBON ===== */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Subtle divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-ocean-light/30 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block text-center p-6 rounded-2xl bg-ocean-mid/30 border border-ocean-light/8 hover:border-ocean-light/20 transition-all group hover:bg-ocean-mid/50"
                >
                  <div
                    className="text-ocean-light mb-1 group-hover:text-ocean-teal transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem" }}
                  >
                    {item.value}
                  </div>
                  <div className="text-ocean-foam/40" style={{ fontSize: "0.8rem", letterSpacing: "0.06em" }}>
                    {item.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE SECTION ===== */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-ocean-teal/5 rounded-full blur-[80px]" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-ocean-teal/60 mb-3 block" style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}>
              WHAT I DO
            </span>
            <h2
              className="text-ocean-foam mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem" }}
            >
              Areas of Expertise
            </h2>
            <div className="w-12 h-px bg-ocean-light/30 mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-ocean-mid/20 border border-ocean-light/8 hover:border-ocean-light/20 transition-all group hover:bg-ocean-mid/35 relative overflow-hidden"
              >
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-ocean-light/3 rounded-bl-[60px] group-hover:bg-ocean-teal/5 transition-colors" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-ocean-light/8 border border-ocean-light/10 flex items-center justify-center mb-5 text-ocean-light group-hover:text-ocean-teal group-hover:bg-ocean-teal/10 group-hover:border-ocean-teal/20 transition-all">
                    {skill.icon}
                  </div>
                  <h3
                    className="text-ocean-foam mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
                  >
                    {skill.title}
                  </h3>
                  <p className="text-ocean-foam/45" style={{ fontSize: "0.83rem", lineHeight: 1.65 }}>
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-ocean-teal/60 mb-3 block" style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}>
              PORTFOLIO
            </span>
            <h2
              className="text-ocean-foam mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem" }}
            >
              Featured Work
            </h2>
            <div className="w-12 h-px bg-ocean-light/30 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "MPA Support Network",
                desc: "Full-stack geospatial database & web platform for Marine Protected Areas across the Philippines",
                image: "https://images.unsplash.com/photo-1576158113421-5484e37d43f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXAlMjBkaWdpdGFsJTIwbGF5ZXJzfGVufDF8fHx8MTc3MzMxMTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                link: "/projects/mpa-database",
                tag: "GIS",
              },
              {
                title: "Marine Current Turbine",
                desc: "Thesis — 3D designed winglet turbine blades with ANSYS CFD simulation (2.44M cells)",
                image: "https://images.unsplash.com/photo-1620662892011-f5c2d523fae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFwJTIwZ2Vvc3BhdGlhbCUyMHRlY2hub2xvZ3klMjBkYXJrfGVufDF8fHx8MTc3MzMxNzM3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                link: "/projects/ansys",
                tag: "Engineering",
              },
              {
                title: "Manila Bay Oil Spill Model",
                desc: "WebGNOME simulation for the Philippine Coast Guard using Copernicus satellite data",
                image: "https://images.unsplash.com/photo-1544070555-a19fbf2277ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGFsZSUyMHdhdGNoaW5nJTIwb2NlYW4lMjBib2F0fGVufDF8fHx8MTc3MzMxMTYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                link: "/projects/webgnome",
                tag: "Environmental",
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  to={project.link}
                  className="group block rounded-2xl overflow-hidden bg-ocean-mid/25 border border-ocean-light/8 hover:border-ocean-light/20 transition-all hover:shadow-xl hover:shadow-ocean-light/5"
                >
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent" />
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 rounded-full bg-ocean-teal/20 text-ocean-teal border border-ocean-teal/20 backdrop-blur-sm"
                        style={{ fontSize: "0.7rem", letterSpacing: "0.06em" }}
                      >
                        {project.tag}
                      </span>
                    </div>
                    {/* Arrow on hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-ocean-light/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-ocean-foam" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-ocean-foam mb-2 group-hover:text-ocean-light transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-ocean-foam/45" style={{ fontSize: "0.83rem", lineHeight: 1.6 }}>
                      {project.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects/ansys"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 text-ocean-foam border border-ocean-light/15 hover:bg-white/10 hover:border-ocean-light/25 transition-all backdrop-blur-sm"
              style={{ fontSize: "0.85rem" }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-14 px-4 border-t border-ocean-light/8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-ocean-teal/30 to-transparent" />

        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Waves className="w-5 h-5 text-ocean-teal" />
            <span
              className="text-ocean-foam/80"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
            >
              Jude Wincel Marino
            </span>
          </div>
          <p className="text-ocean-foam/35 mb-6" style={{ fontSize: "0.8rem" }}>
            Geospatial Web Developer & Mechanical Engineer
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <a
              href="https://www.linkedin.com/in/jude-wincel/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-ocean-foam/35 hover:text-ocean-light transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/judewincel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-ocean-foam/35 hover:text-ocean-light transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:judewincel@gmail.com"
              className="p-2 rounded-lg text-ocean-foam/35 hover:text-ocean-light transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-ocean-foam/20" style={{ fontSize: "0.7rem" }}>
            &copy; 2026 Jude Wincel Marino. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Global keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}