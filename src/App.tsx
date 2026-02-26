import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const testimonials = [
  {
    name: "Wangamati Edwin",
    role: "Cyber Security Client",
    text: "Thanks for the quick and professional service! They have been protecting my firm against cyber attacks using their tailor made firewalls."
  },
  {
    name: "Paul Jameson",
    role: "Karen Bogani Resident",
    text: "We ended up with the best security system in Karen Bogani area thanks to these guys."
  },
  {
    name: "Amy Atieno",
    role: "Home Security Client",
    text: "The job was done perfectly. I would recommend and vouch for PRIVAMAX SECURITY anytime you need a trusted professional to handle your security issues."
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        <Pricing />

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-brand-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Testimonials</span>
                <div className="w-10 h-[1px] bg-brand-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl text-brand-dark">
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-bg rounded-2xl p-8 relative"
                >
                  <Quote className="w-10 h-10 text-brand-primary/20 mb-4" />
                  <p className="text-gray-600 font-body leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark">{t.name}</h5>
                    <p className="text-sm text-gray-500 font-body">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section-padding bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"
          />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-[1px] bg-brand-secondary" />
                <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Get Protected Today</span>
                <div className="w-10 h-[1px] bg-brand-secondary" />
              </div>
              <h2 className="text-5xl md:text-6xl text-white leading-tight font-display font-bold">
                Secure your home & business with Privamax
              </h2>
              <p className="text-xl text-white/60 font-body leading-relaxed max-w-2xl mx-auto">
                Request a free security audit from our experienced professionals. We'll assess your property
                and recommend a tailored solution — at no obligation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="tel:+254794164662"
                  className="bg-brand-primary text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-brand-secondary transition-all shadow-2xl shadow-brand-primary/30 cursor-pointer glow-blue"
                >
                  Call +254 794 164 662
                </a>
                <button
                  data-cal-link="privamax-ke/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
                  className="glass text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white/20 transition-all cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
