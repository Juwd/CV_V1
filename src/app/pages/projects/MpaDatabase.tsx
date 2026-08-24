import { PageHeader } from "../../components/PageHeader";
import { Database, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const databaseUrl = "https://db.mpasupportnetwork.org/";
const databaseListUrl = "https://db.mpasupportnetwork.org/datalist";
const databaseAboutUrl = "https://db.mpasupportnetwork.org/about";
const databaseContactUrl = "https://db.mpasupportnetwork.org/contact";
const databaseSnapshot = new URL("../../../assets/mpa-database-live.png", import.meta.url).href;

export function MpaDatabase() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="MPA Database"
        subtitle="Philippine Marine Protected Area data, geospatial pipelines, and conservation access"
        icon={<Database className="w-6 h-6" />}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-hidden rounded-2xl border border-ocean-light/10 bg-ocean-mid/30">
          <ImageWithFallback
            src={databaseSnapshot}
            alt="Snapshot of the live Philippine MPA Database map"
            className="max-h-[760px] w-full object-contain bg-[#1f2937]"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ocean-light/10 p-4">
            <p className="text-ocean-foam/50" style={{ fontSize: "0.8rem" }}>
              Snapshot of the live database map
            </p>
            <a
              href={databaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-ocean-teal/20 bg-ocean-teal/10 px-4 py-2 text-ocean-teal transition-all hover:bg-ocean-teal/20"
              style={{ fontSize: "0.82rem" }}
            >
              <ExternalLink className="h-4 w-4" /> Open live database
            </a>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-ocean-mid/30 border border-ocean-light/10 p-6">
          <h2 className="text-ocean-foam" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem" }}>
            Explore the live database
          </h2>
          <p className="mt-2 text-ocean-foam/60" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
            The platform provides a map view, a searchable MPA List, project information, and a contact
            channel connected with the MPA Support Network at the Marine Science Institute, University of the Philippines Diliman.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              ["Open database map", databaseUrl],
              ["Browse MPA List", databaseListUrl],
              ["About the network", databaseAboutUrl],
              ["Contact the network", databaseContactUrl],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-ocean-teal/20 bg-ocean-teal/10 px-4 py-2 text-ocean-teal transition-all hover:bg-ocean-teal/20"
                style={{ fontSize: "0.82rem" }}
              >
                <ExternalLink className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}