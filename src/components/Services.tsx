import { motion } from "motion/react";
import { Camera, Zap, Flame, Lock, Shield, Search, Dog, DoorOpen, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "CCTV Cameras",
    icon: <Camera className="w-7 h-7" />,
    desc: "HD surveillance systems with motion detection and instant alerts for total property monitoring."
  },
  {
    title: "Electric Fence",
    icon: <Zap className="w-7 h-7" />,
    desc: "Premium perimeter protection ensuring entry only at designated areas. Razor wires included."
  },
  {
    title: "Fire Alarm Systems",
    icon: <Flame className="w-7 h-7" />,
    desc: "Active fire detection systems providing early warning, evacuation alerts, and automatic suppression."
  },
  {
    title: "Access Control",
    icon: <Lock className="w-7 h-7" />,
    desc: "Biometric access, smart locks, and automated gate systems for controlled entry and exit."
  },
  {
    title: "Security Guards",
    icon: <Shield className="w-7 h-7" />,
    desc: "Certified, well-trained security officers for on-site guarding, mobile patrols, and event security."
  },
  {
    title: "Private Investigation",
    icon: <Search className="w-7 h-7" />,
    desc: "Skilled investigators providing tangible evidence through surveillance, background checks, and forensics."
  },
  {
    title: "Dog Security Service",
    icon: <Dog className="w-7 h-7" />,
    desc: "Professionally trained security dogs for property patrol, detection, and rapid-response protection."
  },
  {
    title: "Automatic Gates",
    icon: <DoorOpen className="w-7 h-7" />,
    desc: "Remote-controlled gate systems with smart device integration for enhanced home and office access."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Our Services</span>
            <div className="w-10 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-6">
            Comprehensive security solutions for Kenya
          </h2>
          <p className="text-lg text-gray-600 font-body leading-relaxed">
            We offer fast, professional, and exceptional security services — from electronic systems
            and physical guarding to cyber security and private investigations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:bg-brand-dark hover:border-brand-dark transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full group-hover:bg-brand-primary/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-white transition-colors">
                  {s.title}
                </h4>
                <p className="text-gray-500 font-body text-sm leading-relaxed group-hover:text-white/70 transition-colors mb-6">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-primary text-sm font-semibold group-hover:text-brand-secondary transition-colors">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-bg rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">
              Also Available
            </h3>
            <p className="text-gray-600 font-body">
              Cyber Security • Close Protection • Security Audits • Alarm Response • Asset Tracking • Security Consulting
            </p>
          </div>
          <a
            href="tel:+254794164662"
            className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all whitespace-nowrap cursor-pointer glow-blue"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
