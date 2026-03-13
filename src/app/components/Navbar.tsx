import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Anchor,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Certifications", path: "/certifications" },
  { label: "Field Works", path: "/field-works" },
  {
    label: "Projects",
    path: "/projects",
    children: [
      { label: "Ansys Fluid Simulation", path: "/projects/ansys" },
      { label: "Bot", path: "/projects/bot" },
      { label: "CAD Files", path: "/projects/cad" },
      { label: "Gabay Startup", path: "/projects/gabay" },
      { label: "Maps", path: "/projects/maps" },
      { label: "MPA Database", path: "/projects/mpa-database" },
      { label: "Poster", path: "/projects/poster" },
      { label: "Python", path: "/projects/python" },
      { label: "WebGnome", path: "/projects/webgnome" },
    ],
  },
  {
    label: "Volunteer Works",
    path: "/volunteer",
    children: [
      { label: "Alwan Method Workshop", path: "/volunteer/alwan" },
      { label: "Balyena", path: "/volunteer/balyena" },
      { label: "Psychosocial Services", path: "/volunteer/psychosocial" },
    ],
  },
  { label: "Workshops", path: "/workshops" },
  { label: "Contact Me", path: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-ocean-deep/80 border-b border-ocean-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Anchor className="w-6 h-6 text-ocean-light group-hover:text-ocean-foam transition-colors" />
            <span
              className="text-ocean-foam tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Marino
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.children ? item.children[0].path : item.path}
                  className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${
                    isActive(item.path) && item.path !== "/"
                      ? "bg-ocean-light/20 text-ocean-foam"
                      : item.path === "/" && location.pathname === "/"
                      ? "bg-ocean-light/20 text-ocean-foam"
                      : "text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-light/10"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 py-2 bg-ocean-mid/95 backdrop-blur-xl border border-ocean-light/15 rounded-xl shadow-2xl min-w-[220px]"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 transition-all ${
                          isActive(child.path)
                            ? "bg-ocean-light/20 text-ocean-foam"
                            : "text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-light/10"
                        }`}
                        style={{ fontSize: "0.85rem" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-ocean-foam p-2 hover:bg-ocean-light/10 rounded-lg"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-ocean-deep/95 backdrop-blur-xl border-b border-ocean-light/10"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-light/10"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {item.label}
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            mobileExpanded === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 rounded-lg text-ocean-foam/60 hover:text-ocean-foam hover:bg-ocean-light/10"
                                style={{ fontSize: "0.85rem" }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-lg ${
                        isActive(item.path)
                          ? "bg-ocean-light/20 text-ocean-foam"
                          : "text-ocean-foam/70 hover:text-ocean-foam hover:bg-ocean-light/10"
                      }`}
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}