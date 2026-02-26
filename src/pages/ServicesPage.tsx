import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    Camera, Zap, Flame, Lock, Shield, Search, Dog, DoorOpen,
    Wifi, Siren, Car, UserCheck, Globe, ScanEye,
    ArrowRight, CheckCircle2, Phone
} from "lucide-react";

/* ── Primary service cards (full detail) ── */
const primaryServices = [
    {
        title: "CCTV Camera Systems",
        icon: <Camera className="w-8 h-8" />,
        desc: "CCTV cameras provide outstanding security to all. New technology can detect movements and send instant alerts. Combined with remote monitoring, they deliver an unmatched level of protection for your home or business.",
        features: ["HD & 4K resolution", "Night vision", "Motion detection alerts", "Remote smartphone access", "Cloud & local storage"],
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Electric Fence",
        icon: <Zap className="w-8 h-8" />,
        desc: "The best perimeter protection for your premise. Entry is restricted to designated areas only. Razor wires can be added to reduce the chances of unauthorised access even further.",
        features: ["High-voltage deterrent", "Tamper-proof sensors", "Razor wire integration", "SMS/App alerts", "Solar-powered options"],
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Fire Alarm Systems",
        icon: <Flame className="w-8 h-8" />,
        desc: "Active fire detection systems that detect fire or the effects of fire, providing early warning, automatic evacuation alerts, and suppression system activation to protect lives and property.",
        features: ["Smoke & heat detection", "Automatic suppression", "Evacuation alerts", "Emergency lighting", "Compliance certified"],
        img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Access Control Systems",
        icon: <Lock className="w-8 h-8" />,
        desc: "Selective restriction of access to a place or resource through biometric readers, key cards, PIN codes, and smart locks — managing who enters your property and when.",
        features: ["Biometric scanners", "RFID key cards", "Visitor management", "Time & attendance", "Integration with CCTV"],
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
    }
];

/* ── All other service cards (compact) ── */
const allServices = [
    {
        title: "Security Guards",
        icon: <Shield className="w-6 h-6" />,
        desc: "Certified on-site guarding, mobile patrols, and event security. All personnel are trained to the highest standards."
    },
    {
        title: "Private Investigation",
        icon: <Search className="w-6 h-6" />,
        desc: "Highly skilled private investigators providing tangible evidence through surveillance, background checks, and forensics."
    },
    {
        title: "Dog Security Service",
        icon: <Dog className="w-6 h-6" />,
        desc: "Professionally trained security dogs for property patrol, detection, and rapid-response protection."
    },
    {
        title: "Automatic Gates",
        icon: <DoorOpen className="w-6 h-6" />,
        desc: "Remote-controlled gate automation with smart device integration for enhanced home & office access control."
    },
    {
        title: "Smart Door Locks",
        icon: <ScanEye className="w-6 h-6" />,
        desc: "Electromechanical locks operated via authorised devices — wireless protocols, biometrics, and remote commands."
    },
    {
        title: "Intruder Alarm System",
        icon: <Siren className="w-6 h-6" />,
        desc: "Passive infrared motion detectors, ultrasound vibration sensors, and magnetic field detection for unauthorised entry."
    },
    {
        title: "Cyber Security",
        icon: <Globe className="w-6 h-6" />,
        desc: "Tailored firewall systems, penetration testing, and continuous monitoring to protect against cyber attacks."
    },
    {
        title: "Close Protection",
        icon: <UserCheck className="w-6 h-6" />,
        desc: "Dedicated personal security for executives, politicians, celebrities, and high-net-worth individuals under constant threat."
    },
    {
        title: "Alarm Response",
        icon: <Wifi className="w-6 h-6" />,
        desc: "24/7 alarm monitoring and rapid armed response teams dispatched immediately when triggered."
    },
    {
        title: "Asset & Vehicle Tracking",
        icon: <Car className="w-6 h-6" />,
        desc: "GPS vehicle and asset tracking across Kenya with real-time location, geofencing, and instant alerts."
    },
    {
        title: "Security Audits",
        icon: <CheckCircle2 className="w-6 h-6" />,
        desc: "Full briefing covering every aspect of your security capabilities, identifying potential gaps in your defences."
    },
    {
        title: "Security Consulting",
        icon: <Shield className="w-6 h-6" />,
        desc: "Established market leaders in security consultancy and training — our impartiality and independence is universally recognised."
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* ── Page Hero ── */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-slate overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-primary rounded-full blur-3xl"
                />
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[1px] bg-brand-secondary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Our Services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                            Comprehensive security{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                solutions
                            </span>
                        </h1>
                        <p className="text-xl text-white/60 font-body leading-relaxed max-w-2xl">
                            From electronic surveillance and perimeter protection to armed guards, cyber security,
                            and private investigations — we cover every angle of your safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Primary Services (detailed cards) ── */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="space-y-20">
                        {primaryServices.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
                            >
                                {/* Image */}
                                <div className={`relative rounded-3xl overflow-hidden group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <div className="w-14 h-14 bg-brand-primary/90 backdrop-blur rounded-2xl flex items-center justify-center text-white">
                                            {s.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                                        {s.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 font-body leading-relaxed">
                                        {s.desc}
                                    </p>
                                    <ul className="space-y-3">
                                        {s.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-brand-dark font-body">
                                                <div className="w-6 h-6 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="tel:+254794164662"
                                        className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all cursor-pointer group"
                                    >
                                        Get a Quote
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Full Services Grid ── */}
            <section className="section-padding bg-brand-bg tech-grid">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-10 h-[1px] bg-brand-primary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">All Services</span>
                            <div className="w-10 h-[1px] bg-brand-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark mb-4">
                            Everything we do
                        </h2>
                        <p className="text-gray-600 font-body text-lg">
                            A complete overview of our security services for homes, businesses, and individuals across Kenya.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {allServices.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-primary/20 hover:shadow-lg transition-all cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                    {s.icon}
                                </div>
                                <h4 className="text-lg font-bold text-brand-dark mb-2">{s.title}</h4>
                                <p className="text-sm text-gray-500 font-body leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process Section ── */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-10 h-[1px] bg-brand-primary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">How It Works</span>
                            <div className="w-10 h-[1px] bg-brand-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark">
                            Our simple process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Free Consultation", desc: "Contact us to discuss your security needs and concerns." },
                            { step: "02", title: "Site Survey", desc: "Our experts visit your property for a thorough security assessment." },
                            { step: "03", title: "Custom Proposal", desc: "We design a tailored security solution and present transparent pricing." },
                            { step: "04", title: "Installation & Support", desc: "Professional installation followed by ongoing maintenance and 24/7 support." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center relative"
                            >
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-brand-primary/20" />
                                )}
                                <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl mx-auto mb-6 relative z-10">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="py-20 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
                <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                            Ready to secure your property?
                        </h2>
                        <p className="text-white/60 font-body text-lg max-w-xl">
                            Get a free security audit and personalised recommendation from our experienced professionals.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <a href="tel:+254794164662" className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold hover:bg-brand-secondary transition-all cursor-pointer glow-blue flex items-center gap-2">
                            <Phone className="w-5 h-5" /> Call Now
                        </a>
                        <Link to="/contact" className="glass text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all cursor-pointer text-center">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
