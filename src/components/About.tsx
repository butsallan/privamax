import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Award, Globe, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Personalized Strategies",
    desc: "We craft financial solutions based on your unique goals and industry needs.",
    num: "01"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Transparent Processes",
    desc: "Clear, honest, and genuinely data-driven insights for better decision-making.",
    num: "02"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Track Record",
    desc: "Extensive experience in helping businesses achieve sustainable growth.",
    num: "03"
  }
];

export default function About() {
  return (
    <section id="about-us" className="section-padding bg-brand-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              At Finovo, we help businesses navigate complex finances with confidence.
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              With years of experience and a truly client-focused approach, we empower businesses to unlock new opportunities and achieve financial stability.
            </p>
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-dark transition-all group">
              About company
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-display font-bold">
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

        {/* Global Trust Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
              alt="Global Map"
              className="w-full h-auto opacity-20"
              referrerPolicy="no-referrer"
            />
            {/* Floating Avatars */}
            {[
              { top: '20%', left: '15%' },
              { top: '60%', left: '40%' },
              { top: '30%', right: '20%' },
              { bottom: '20%', right: '10%' }
            ].map((pos, i) => (
              <motion.img
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                src={`https://picsum.photos/seed/${i + 50}/100/100`}
                className="absolute w-12 h-12 rounded-full border-2 border-white shadow-lg"
                style={pos}
                alt="Client"
                referrerPolicy="no-referrer"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Global Trust</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              Our valued clients around the world
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              Discover the global reach of our financial expertise. We proudly serve businesses across multiple regions, helping them achieve financial success with tailored solutions.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-display font-bold text-brand-dark">98%</div>
                <div className="text-sm text-gray-500 font-body mt-1">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-dark">25+</div>
                <div className="text-sm text-gray-500 font-body mt-1">Countries Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
