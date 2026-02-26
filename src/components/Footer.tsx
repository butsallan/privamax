import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                Finovo
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight max-w-md">
              Expert advice, industry trends, and practical tips to help you stay ahead
            </h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-10 space-y-8">
            <p className="text-lg text-white/70 font-body">
              Subscribe to our newsletter for expert financial tips, industry news, and updates straight to your inbox.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="jane@framer.com"
                className="w-full bg-white/10 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:border-brand-primary transition-colors text-white placeholder:text-white/30"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-primary text-white px-8 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 pt-20 border-t border-white/10">
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Company</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How We Work</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">More Info</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Clients</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Resources</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Contacts</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li>123 Finance Street, New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@example.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-white/40 text-xs font-body">
          <p>© Finovo. All rights reserved.</p>
          <p>Designed by <a href="#" className="hover:text-white transition-colors underline underline-offset-4">fourtwelve</a>.</p>
        </div>
      </div>
    </footer>
  );
}
