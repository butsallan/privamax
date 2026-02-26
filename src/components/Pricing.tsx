import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "99",
    desc: "For startups and small businesses looking for essential financial support",
    features: ["Financial Reports & Insights", "Expense Tracking", "Email Support"],
    dark: false
  },
  {
    name: "Business",
    price: "249",
    desc: "For growing businesses needing deeper financial insights and support",
    features: ["Advanced Financial Analytics", "Bi-Weekly Consultations", "Tax Planning Assistance", "Priority Email & Chat Support"],
    dark: true
  },
  {
    name: "Premium",
    price: "499",
    desc: "For scaling businesses that need a full-service financial management",
    features: ["Full-Service Financial Consulting", "Weekly Strategy Sessions", "Dedicated Account Manager", "Tax & Compliance Support", "Priority Support"],
    dark: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-brand-bg">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
           <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Pricing</span>
              <div className="w-10 h-[1px] bg-brand-dark" />
            </div>
          <h2 className="text-4xl md:text-5xl text-brand-dark mb-6">
            Flexible options for your business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-3xl flex flex-col justify-between transition-all hover:scale-[1.02] ${
                plan.dark ? "bg-brand-dark text-white shadow-2xl" : "bg-white text-brand-dark border border-gray-100 shadow-sm"
              }`}
            >
              <div>
                <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                <p className={`text-sm mb-8 font-body ${plan.dark ? "text-white/70" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1 mb-10 pb-8 border-b border-gray-200/20">
                  <span className="text-5xl font-display font-bold">${plan.price}</span>
                  <span className={`text-sm mb-2 font-body ${plan.dark ? "text-white/60" : "text-gray-400"}`}>/month</span>
                </div>
                <ul className="space-y-4 mb-12">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-body">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.dark ? "bg-brand-primary" : "bg-brand-primary/10 text-brand-primary"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${
                plan.dark ? "bg-brand-primary text-white hover:bg-white hover:text-brand-dark" : "bg-brand-bg text-brand-dark hover:bg-brand-primary hover:text-white"
              }`}>
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
