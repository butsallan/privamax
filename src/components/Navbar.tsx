import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showSolid = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolid
        ? "py-3 bg-brand-slate/95 backdrop-blur-md shadow-lg shadow-brand-dark/20"
        : "py-5 bg-transparent"
        }`}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/logo.jpg"
            alt="Privamax Security Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors cursor-pointer ${location.pathname === item.href
                ? "text-brand-secondary"
                : "text-white/80 hover:text-brand-secondary"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+254794164662"
            className="bg-brand-secondary text-brand-dark px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:brightness-110 transition-all group cursor-pointer glow-gold"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-slate shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-white/10"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-lg font-medium cursor-pointer ${location.pathname === item.href ? "text-brand-secondary" : "text-white hover:text-brand-secondary"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+254794164662"
            className="bg-brand-secondary text-brand-dark px-6 py-3 rounded-xl font-semibold w-full text-center cursor-pointer"
          >
            Call +254 794 164 662
          </a>
        </motion.div>
      )}
    </nav>
  );
}
