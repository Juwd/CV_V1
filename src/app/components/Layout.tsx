import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { WaveBackground } from "./WaveBackground";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <WaveBackground />
      <Navbar />
      <main className="relative pt-16">
        <Outlet />
      </main>
    </div>
  );
}