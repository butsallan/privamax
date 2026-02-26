import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">F</span>
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter ${isScrolled ? "text-brand-dark" : "text-white"}`}>
            Finovo
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["About Us", "Pricing", "Portfolio", "Services"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-brand-dark hover:text-brand-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-brand-primary transition-all group">
            Let's talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? "text-brand-dark" : "text-white"} /> : <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {["About Us", "Pricing", "Portfolio", "Services"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium text-brand-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold w-full">
            Let's talk
          </button>
        </motion.div>
      )}
    </nav>
  );
}
