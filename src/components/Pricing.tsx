import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Home Security",
    price: "Contact",
    priceSuffix: "for quote",
    desc: "Protect your home with reliable surveillance and perimeter security",
    features: ["CCTV Camera Installation", "Electric Fence Setup", "Intruder Alarm System", "Smart Door Locks", "Free Site Survey"],
    dark: false
  },
  {
    name: "Business Security",
    price: "Contact",
    priceSuffix: "for quote",
    desc: "Comprehensive security packages for offices, malls, and corporate properties",
    features: ["Full CCTV Surveillance", "Access Control Systems", "Fire Alarm Integration", "Security Guard Deployment", "Automatic Gate Systems", "24/7 Alarm Monitoring"],
    dark: true
  },
  {
    name: "VIP Protection",
    price: "Contact",
    priceSuffix: "for quote",
    desc: "Close protection and private security for executives and high-net-worth individuals",
    features: ["Close Protection Officers", "Private Investigation", "Cyber Security Solutions", "Dog Security Patrol", "Asset & Vehicle Tracking", "Security Audit & Consulting", "Dedicated Account Manager"],
    dark: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-brand-bg tech-grid">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Packages</span>
            <div className="w-10 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl text-brand-dark mb-6">
            Tailored security for every need
          </h2>
          <p className="text-lg text-gray-600 font-body leading-relaxed">
            From residential homes to corporate offices to personal VIP protection — we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-3xl flex flex-col justify-between transition-all hover:scale-[1.02] ${plan.dark ? "bg-brand-dark text-white shadow-2xl glow-blue" : "bg-white text-brand-dark border border-gray-100 shadow-sm"
                }`}
            >
              <div>
                <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                <p className={`text-sm mb-8 font-body ${plan.dark ? "text-white/70" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-2 mb-10 pb-8 border-b border-gray-200/20">
                  <span className="text-3xl font-display font-bold">{plan.price}</span>
                  <span className={`text-sm mb-1 font-body ${plan.dark ? "text-white/60" : "text-gray-400"}`}>{plan.priceSuffix}</span>
                </div>
                <ul className="space-y-4 mb-12">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-body">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.dark ? "bg-brand-secondary" : "bg-brand-primary/10 text-brand-primary"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/quote"
                className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${plan.dark ? "bg-brand-primary text-white hover:bg-brand-secondary" : "bg-brand-bg text-brand-dark hover:bg-brand-primary hover:text-white"
                  }`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

