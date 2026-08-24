import { motion } from "motion/react";
import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Bot as BotIcon, ExternalLink, GraduationCap, Trophy, Wrench } from "lucide-react";

const botImage = new URL("../../../assets/Bot/twitterBot.png", import.meta.url).href;
const pro2017Image = new URL("../../../assets/Bot/PRO2017.jpg", import.meta.url).href;
const wro2014Image = new URL("../../../assets/Bot/WRO2014.jpg", import.meta.url).href;
const wro2015Image = new URL("../../../assets/Bot/WRO2015.jpg", import.meta.url).href;
const twitterBotUrl = "https://x.com/BOTo_ng_Bayan";
const wro2015ArticleUrl = "https://www.geekypinas.com/2015/11/team-philippines-shines-at-world-robotics-olympiad-2015.html";

const roboticsGallery = [
  { src: pro2017Image, alt: "Philippine Robotics Olympiad 2017 team", caption: "Philippine Robotics Olympiad 2017: second place among 20 teams." },
  { src: wro2014Image, alt: "World Robot Olympiad 2014 team in Sochi Russia", caption: "World Robot Olympiad 2014 in Sochi, Russia." },
  { src: wro2015Image, alt: "World Robot Olympiad 2015 Philippine team", caption: "World Robot Olympiad 2015 in Doha, Qatar." },
];

export function BotProjects() {
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
        title="AI and Robotics"
        subtitle="Artificial intelligence projects and competitive robotics experience"
        icon={<BotIcon className="w-6 h-6" />}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10">
          <div className="h-64 md:h-80 overflow-hidden relative">
            <ImageWithFallback src={wro2015Image} alt="World Robot Olympiad 2015 Philippine team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-6" style={{ fontSize: "0.85rem" }}>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Trophy className="w-4 h-4" /> Robotics Competitor</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><Wrench className="w-4 h-4" /> AI and Self-built Robots</span>
              <span className="flex items-center gap-1.5 text-ocean-foam/50"><GraduationCap className="w-4 h-4" /> PSHS-BRC Robotics Team</span>
            </div>

            <div className="space-y-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>
                Served as Team Captain of the PSHS-BRC Robotics Team from September 2014 to December 2017.
                The team competed annually in national and international robotics competitions, including
                the Philippine Robotics Olympiad (PRO) and the World Robot Olympiad (WRO).
              </p>
              <p>
                In the Philippine Robotics Olympiad 2017, the team won second place after competing against
                20 other teams. International competition experience included the World Robot Olympiad 2014
                in Sochi, Russia, and the World Robot Olympiad 2015 in Doha, Qatar.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Role</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Team Captain</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>Team period</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>Sep 2014 - Dec 2017</p></div>
              <div className="rounded-xl border border-ocean-light/10 bg-ocean-deep/25 p-4"><p className="text-ocean-foam/45" style={{ fontSize: "0.72rem" }}>PRO 2017 result</p><p className="mt-1 text-ocean-foam" style={{ fontSize: "1.05rem" }}>2nd place of 20 teams</p></div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {roboticsGallery.map((item) => (
                <div key={item.alt} className="group relative overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-deep/30">
                  <ImageWithFallback src={item.src} alt={item.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/55 to-transparent p-3"><p className="text-ocean-foam/80" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>{item.caption}</p></div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Artificial Intelligence", "Robotics", "Team Leadership", "Philippine Robotics Olympiad", "World Robot Olympiad", "International Competition"].map((tag) => <span key={tag} className="px-3 py-1 rounded-full bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/15" style={{ fontSize: "0.8rem" }}>{tag}</span>)}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a href={wro2015ArticleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/20 hover:bg-ocean-teal/20 transition-all" style={{ fontSize: "0.85rem" }}>
                <ExternalLink className="w-4 h-4" /> Read the WRO 2015 article
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 rounded-2xl overflow-hidden bg-ocean-mid/30 border border-ocean-light/10"
        >
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="min-h-64 overflow-hidden">
              <ImageWithFallback src={botImage} alt="Uy! boboto ka ba? Twitter bot profile" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-ocean-teal" style={{ fontSize: "0.8rem" }}>
                <BotIcon className="w-4 h-4" /> AI PROJECT
              </div>
              <h2 className="mt-2 text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem" }}>
                Uy! boboto ka ba?
              </h2>
              <p className="mt-4 text-ocean-foam/60" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                An AI-powered civic engagement bot project created to help promote voting and make
                election-related engagement more accessible through social media.
              </p>
              <a href={twitterBotUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-ocean-teal/10 text-ocean-teal border border-ocean-teal/20 hover:bg-ocean-teal/20 transition-all" style={{ fontSize: "0.85rem" }}>
                <ExternalLink className="w-4 h-4" /> View the Twitter bot
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}