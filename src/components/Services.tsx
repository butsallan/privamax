import { motion } from "motion/react";
import { PieChart, BarChart3, Landmark, Calculator, ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Financial Planning and Strategy",
    icon: <PieChart className="w-8 h-8" />,
    desc: "Comprehensive roadmaps for long-term wealth and business stability."
  },
  {
    title: "Tax Optimization and Compliance",
    icon: <Calculator className="w-8 h-8" />,
    desc: "Strategic tax planning to minimize liabilities and ensure full compliance."
  },
  {
    title: "Risk Management and Investment",
    icon: <ShieldCheck className="w-8 h-8" />,
    desc: "Protecting your assets while identifying high-growth opportunities."
  },
  {
    title: "Strategic Mergers Advisory",
    icon: <Landmark className="w-8 h-8" />,
    desc: "Expert guidance through acquisitions and business transitions."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-bg -z-0 rounded-l-[100px] hidden lg:block" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-brand-dark" />
                <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Tailored Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
                Our expertise, <br /> your success
              </h2>
              <p className="text-lg text-gray-600 font-body leading-relaxed max-w-md">
                We offer a comprehensive range of financial services designed to help your business grow, stay compliant, and thrive in any market.
              </p>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop"
                alt="Accounting"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
            </div>

            <button className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-dark transition-all group">
              Explore all services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-2">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border-b border-gray-200 flex items-center justify-between hover:bg-white hover:shadow-xl hover:rounded-2xl hover:border-transparent transition-all cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <div className="text-brand-primary group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-dark mb-2">{s.title}</h4>
                    <p className="text-gray-500 font-body text-sm max-w-sm">{s.desc}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
