import { motion } from "motion/react";
import { ShieldCheck, Eye, Clock, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Certified Professionals",
    desc: "All our officers meet minimum standards of training and are continually developed.",
    num: "01"
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Latest Technology",
    desc: "We deploy modern surveillance, access control, and cyber security systems.",
    num: "02"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Rapid Response",
    desc: "Our response teams are well-equipped and available around the clock at your request.",
    num: "03"
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-bg tech-grid">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              Kenya's trusted security partner since 2016
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              Privamax Security was founded in 2016 and incorporated in Kenya on 21st May 2020 as a Limited Company.
              We provide customized security solutions to help protect your family, property, and business —
              delivering quality and timely services by focusing on productivity, customer care, and continuous improvement.
            </p>
            <a
              href="#services"
              className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-dark transition-all group w-fit cursor-pointer"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-primary/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0">
                    {f.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-1">{f.title}</h4>
                    <p className="text-gray-500 font-body text-sm">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust / Reach Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
              alt="Security professional monitoring CCTV in control room"
              className="w-full h-[450px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl p-6 flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse" />
                <span className="text-white font-semibold text-sm">Live monitoring — 24/7 response team active</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              Delivering the best security solutions to our clients
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              Our security officers, technicians, and response teams are well equipped with the latest modern
              technology and are available 24/7 at your request. We serve homes, corporate businesses, and
              high-net-worth individuals across Kenya.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-display font-bold text-brand-primary">98%</div>
                <div className="text-sm text-gray-500 font-body mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-primary">
                  <span className="flex items-center gap-1">
                    <Users className="w-8 h-8" />
                    500+
                  </span>
                </div>
                <div className="text-sm text-gray-500 font-body mt-1">Installations Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
