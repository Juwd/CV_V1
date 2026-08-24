import { motion } from "motion/react";
import { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { BarChart3, Code2, ExternalLink, FileCode2, Terminal } from "lucide-react";

const geospatialImage = new URL("../../../assets/Python/GeospatialProcessing.png", import.meta.url).href;
const cpGraph = new URL("../../../assets/Python/NumericalSimulations/CPGraph.webp", import.meta.url).href;
const cpVsTsrGraph = new URL("../../../assets/Python/NumericalSimulations/CPvsTSR.webp", import.meta.url).href;
const bemSolverFile = new URL("../../../assets/Python/NumericalSimulations/BEMsolver.py", import.meta.url).href;
const codeCountFile = new URL("../../../assets/Python/NumericalSimulations/codeCountRepo.py", import.meta.url).href;

const bemSolverSnippet = `def bladeElements():
  airfoil_data = pd.read_csv("testBlade_NREL.csv")
  airfoil_comparison_data = pd.read_csv("airfoildata_NRELS814.csv")
  blade_parameters = pd.DataFrame({
    "Radius": airfoil_data.Radius.values,
    "twist_deg": airfoil_data.twist_deg.values,
    "chord": airfoil_data.chord.values,
  }).dropna()
  return blade_parameters, airfoil_comparison_data`;

const codeCountSnippet = `def count_lines_of_code():
  result = subprocess.run(
    ["git", "ls-files"], capture_output=True, text=True
  )
  files = result.stdout.splitlines()
  total_lines = 0
  for file in files:
    with open(file, "r", errors="ignore") as source:
      total_lines += sum(1 for _ in source)
  print(f"Total lines of code: {total_lines}")`;

const numericalGallery = [
  { src: cpVsTsrGraph, alt: "Power coefficient and thrust coefficient versus tip-speed ratio", caption: "Numerical simulation results showing power coefficient (cp) and thrust coefficient (ct) across tip-speed ratios." },
  { src: cpGraph, alt: "Power coefficient comparison for different flow speeds", caption: "Power coefficient results across flow speeds, plotted against the tip-speed ratio parameter." },
];

const projects = [
  {
    title: "Geospatial Data Processing Pipelines",
  description: "Automated processing of 2,278 shapefiles using Python pipelines with GeoPandas for the MPA Support Network, creating workflows for transforming, cleaning, and publishing geospatial datasets.",
  image: geospatialImage,
    tags: ["Python", "GeoPandas", "Automation", "Shapefiles", "GIS"],
  },
  {
    title: "Numerical Simulations — MATLAB & Python",
    description: "Developed numerical simulation scripts for computational fluid dynamics and engineering calculations, with results visualized through power and thrust coefficient graphs.",
    image: cpVsTsrGraph,
    tags: ["Python", "MATLAB", "Numerical Methods", "Engineering"],
  },
];

export function PythonProjects() {
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
        title="Python Projects"
        subtitle="Geospatial processing, numerical simulation, and engineering automation"
        icon={<Terminal className="w-6 h-6" />}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl bg-ocean-mid/30 border border-ocean-light/10">
              <div className="h-52 overflow-hidden bg-ocean-deep/30">
                <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem" }}>{p.title}</h2>
                <p className="mt-3 text-ocean-foam/60" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((tag) => <span key={tag} className="rounded-full border border-ocean-light/15 bg-ocean-light/10 px-2.5 py-1 text-ocean-light" style={{ fontSize: "0.75rem" }}>{tag}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.section initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-ocean-teal" />
            <h2 className="text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem" }}>Numerical simulation results</h2>
          </div>
          <p className="mt-3 text-ocean-foam/60" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
            These plots communicate how the simulated turbine performs as the tip-speed ratio changes. The results track power coefficient (cp) and thrust coefficient (ct), making the numerical output easier to interpret alongside the Python solver.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {numericalGallery.map((figure) => (
              <figure key={figure.alt} className="overflow-hidden rounded-xl border border-ocean-light/10 bg-white">
                <ImageWithFallback src={figure.src} alt={figure.alt} className="h-72 w-full object-contain" />
                <figcaption className="bg-ocean-deep/80 p-3 text-ocean-foam/75" style={{ fontSize: "0.76rem", lineHeight: 1.5 }}>{figure.caption}</figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Code2 className="h-5 w-5 text-ocean-teal" />
            <h2 className="text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem" }}>Python programs</h2>
          </div>
          <p className="mt-3 text-ocean-foam/60" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
            The code is shown as focused excerpts so the purpose of each program is easy to scan. The original Python files are available through the links below each panel.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {[
              { title: "BEMsolver.py", description: "Blade Element Momentum solver setup for blade geometry, airfoil data, and coefficient calculations.", source: bemSolverSnippet, file: bemSolverFile },
              { title: "codeCountRepo.py", description: "Small repository utility that counts lines across Git-tracked files.", source: codeCountSnippet, file: codeCountFile },
            ].map((program) => (
              <article key={program.title} className="overflow-hidden rounded-xl border border-ocean-light/10 bg-ocean-deep/45">
                <div className="p-4">
                  <div className="flex items-center gap-2 text-ocean-foam"><FileCode2 className="h-4 w-4 text-ocean-teal" /><h3>{program.title}</h3></div>
                  <p className="mt-2 text-ocean-foam/50" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{program.description}</p>
                </div>
                <pre className="max-h-72 overflow-auto border-y border-ocean-light/10 bg-black/25 p-4 text-ocean-foam/75" style={{ fontSize: "0.72rem", lineHeight: 1.6 }}><code>{program.source}</code></pre>
                <a href={program.file} download className="m-4 inline-flex items-center gap-2 text-ocean-teal hover:text-ocean-foam" style={{ fontSize: "0.8rem" }}><ExternalLink className="h-4 w-4" /> Open source file</a>
              </article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}