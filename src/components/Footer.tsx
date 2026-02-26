import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, ArrowUpRight, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white pt-24 pb-12 px-6">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-10">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/logo.jpg"
                alt="Privamax Security Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight max-w-md">
              Making your life safer, one solution at a time
            </h3>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "https://twitter.com/PrivamaxS" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100094909293959" },
                { Icon: Instagram, href: "https://instagram.com/privamaxsecurityke" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-10 space-y-6">
            <h4 className="text-xl font-display font-bold">Request a Free Security Audit</h4>
            <p className="text-lg text-white/70 font-body">
              Get in touch for a free site survey and customized security recommendation for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254794164662"
                className="flex-1 bg-brand-secondary text-brand-dark px-8 py-4 rounded-full font-bold text-center hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://privamaxsecurity.co.ke/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Book Appointment
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 pt-20 border-t border-white/10">
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Company</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors cursor-pointer">Our Team</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors cursor-pointer">How We Work</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Services</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors cursor-pointer">CCTV Installation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors cursor-pointer">Security Guards</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors cursor-pointer">Cyber Security</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Resources</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors cursor-pointer">Packages</Link></li>
              <li><a href="https://privamaxsecurity.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Contact</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-secondary" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-brand-secondary" />
                <a href="tel:+254794164662" className="hover:text-white transition-colors cursor-pointer">+254 794 164 662</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-brand-secondary" />
                <a href="tel:+254202070031" className="hover:text-white transition-colors cursor-pointer">+254 202 070 031</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-white/40 text-xs font-body">
          <p>© {new Date().getFullYear()} Privamax Security Ltd. All rights reserved.</p>
          <p>Security Company In Kenya</p>
        </div>
      </div>
    </footer>
  );
}
