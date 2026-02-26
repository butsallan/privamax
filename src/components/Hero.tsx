import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[850px] h-screen flex items-center overflow-hidden">
      {/* Cinematic Background — Nairobi skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=2070&auto=format&fit=crop"
          alt="Nairobi Skyline at Night"
          className="w-full h-full object-cover brightness-[0.35]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/90 via-brand-dark/60 to-brand-dark/30" />
        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-30" />
      </div>

      <div className="container-custom relative z-10 px-6 pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-brand-secondary/10 border border-brand-secondary/30 rounded-full px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-brand-secondary" />
              <span className="text-brand-secondary text-sm font-semibold">
                Trusted Since 2016
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tight"
          >
            Your Security <br />
            Is Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-yellow-300">
              Priority
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 mb-12 max-w-xl font-body leading-relaxed"
          >
            We provide fast, professional, and exceptional security services —
            from CCTV surveillance and access control to armed guards and
            cyber security across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto bg-brand-secondary text-brand-dark px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-transform shadow-lg shadow-brand-secondary/30 group cursor-pointer glow-gold"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+254794164662"
              className="w-full sm:w-auto glass text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              +254 794 164 662
            </a>
          </motion.div>


          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 flex flex-wrap gap-12"
          >
            {[
              { value: "500+", label: "Systems Installed" },
              { value: "200+", label: "Businesses Secured" },
              { value: "24/7", label: "Response Team" }
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative glow element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-1/4 -right-24 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl"
      />
    </section>
  );
}
