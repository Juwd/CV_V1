import { motion } from "motion/react";
import { type ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16 px-4"
    >
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-2xl bg-ocean-light/15 border border-ocean-light/20 flex items-center justify-center text-ocean-light">
            {icon}
          </div>
        </div>
      )}
      <h1
        className="text-ocean-foam mb-3"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-ocean-foam/60 max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center gap-2">
        <div className="w-12 h-0.5 bg-ocean-light/40 rounded-full" />
        <div className="w-3 h-0.5 bg-ocean-teal/60 rounded-full" />
        <div className="w-3 h-0.5 bg-ocean-light/20 rounded-full" />
      </div>
    </motion.div>
  );
}
