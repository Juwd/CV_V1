import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  delay?: number;
}

export function ProjectCard({ title, description, image, tags = [], delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl overflow-hidden bg-ocean-mid/50 border border-ocean-light/10 hover:border-ocean-light/25 transition-all hover:shadow-lg hover:shadow-ocean-light/5"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3
          className="text-ocean-foam mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p className="text-ocean-foam/60 mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-ocean-light/10 text-ocean-light border border-ocean-light/15"
                style={{ fontSize: "0.75rem" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
