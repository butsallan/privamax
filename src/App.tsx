import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Team Section Placeholder based on template style */}
        <section id="our-team" className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-brand-dark" />
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Meet Our Team</span>
                </div>
                <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
                  Trusted experts dedicated to your financial growth
                </h2>
              </div>
              <div className="flex justify-lg-end">
                <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-dark transition-all group">
                  View all team
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    →
                  </motion.span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Mitchell", role: "Senior Tax Consultant", img: "https://picsum.photos/seed/sarah/600/800" },
                { name: "Daniel Wright", role: "Head of Strategy", img: "https://picsum.photos/seed/daniel/600/800" },
                { name: "Emily Thompson", role: "Chief Financial Officer", img: "https://picsum.photos/seed/emily/600/800" }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h4>
                  <p className="text-gray-500 font-body">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        {/* CTA Section */}
        <section className="section-padding bg-brand-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#2c3e50 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-[1px] bg-brand-dark" />
                <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Get started today</span>
                <div className="w-10 h-[1px] bg-brand-dark" />
              </div>
              <h2 className="text-5xl md:text-6xl text-brand-dark leading-tight">
                Take control of your financial future today
              </h2>
              <p className="text-xl text-gray-600 font-body leading-relaxed max-w-2xl mx-auto">
                Partner with experts who understand your goals and help you achieve lasting success. Let's build a strategy tailored to your needs.
              </p>
              <button className="bg-brand-dark text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-brand-primary transition-all shadow-2xl shadow-brand-dark/20">
                Contact us now
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
