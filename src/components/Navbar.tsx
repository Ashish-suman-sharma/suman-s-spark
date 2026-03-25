import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (!el) return { id: item, top: 0 };
        return { id: item, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce((closest, section) => {
        return Math.abs(section.top) < Math.abs(closest.top) ? section : closest;
      });
      setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          className="text-lg font-semibold text-gradient cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo("Home")}
        >
          SS
        </motion.span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-foreground" />
          <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-foreground" />
          <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-foreground" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-border/50"
        >
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`text-sm font-medium ${activeSection === item ? "text-primary" : "text-muted-foreground"}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
