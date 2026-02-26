import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, Target, Heart, Award, Phone, Star, Quote } from "lucide-react";

const milestones = [
    { year: "2016", title: "Founded", desc: "Privamax Security was established to fill the gap in quality, reliable security services in Kenya." },
    { year: "2020", title: "Incorporated", desc: "Officially registered as a Limited Company in Kenya on 21st May 2020." },
    { year: "2022", title: "Tech Expansion", desc: "Expanded into cyber security, smart lock systems, and advanced surveillance technology." },
    { year: "2024", title: "500+ Installations", desc: "Crossed 500 security system installations across Nairobi and surrounding counties." }
];

const values = [
    { icon: <Target className="w-7 h-7" />, title: "Productivity", desc: "We focus on efficiency and results, ensuring our security operations deliver maximum protection." },
    { icon: <Heart className="w-7 h-7" />, title: "Customer Care", desc: "Our clients come first. We tailor every solution to your unique needs." },
    { icon: <Award className="w-7 h-7" />, title: "Competitiveness", desc: "We stay at the forefront by continuously adopting the latest technologies." },
    { icon: <ShieldCheck className="w-7 h-7" />, title: "Continuous Improvement", desc: "Our teams undergo regular training and our processes are constantly refined." }
];

const team = [
    { name: "Managing Director", role: "Leadership & Strategy", img: "/assets/generated/team_md.png", bio: "Provides strategic vision and overall leadership for Privamax Security across Kenya." },
    { name: "Operations Manager", role: "Operations & Logistics", img: "/assets/generated/guards.png", bio: "Oversees day-to-day deployment, technology installations, and rapid response operations." },
    { name: "General Manager", role: "Business Development", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=800&auto=format&fit=crop", bio: "Drives business growth through client relationships and strategic partnerships." },
    { name: "Office Admin", role: "Administration", img: "/assets/generated/team_admin.png", bio: "Manages all administrative functions, client communications, and scheduling." }
];

const testimonials = [
    { name: "Wangamati Edwin", role: "Cyber Security", text: "Thanks for the quick and professional service! They have been protecting my firm against cyber attacks using their tailor made firewalls." },
    { name: "Mary Wangari", role: "Private Investigations", text: "Liked the way you guys treat your customers, the prices are pretty great too!" },
    { name: "Paul Jameson", role: "Security Consultancy", text: "We ended up with the best security system in Karen Bogani area thanks to these guys." },
    { name: "Amy Atieno", role: "Home Security", text: "The job was done perfectly. I would recommend PRIVAMAX SECURITY anytime you need a trusted professional." }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-slate overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-3xl" />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[1px] bg-brand-secondary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">About Us</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                            Kenya's trusted{" "}
                            <span className="text-brand-secondary">security partner</span>
                        </h1>
                        <p className="text-xl text-white/60 font-body leading-relaxed max-w-2xl">
                            Founded in 2016 and incorporated in 2020, Privamax Security delivers quality, responsive, and technology-driven security services across Kenya.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-brand-primary" />
                                <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Our Story</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">Making your life safer since 2016</h2>
                            <div className="space-y-5 text-gray-600 font-body leading-relaxed text-lg">
                                <p>Privamax Security was founded in 2016 with a clear mission: to provide Kenyans with reliable, professional, and affordable security services. What began as a small team has grown into a comprehensive security firm serving hundreds of clients.</p>
                                <p>Incorporated on 21st May 2020 as a Limited Company, we have expanded our service portfolio to include advanced CCTV surveillance, cyber security, armed guards, dog patrols, and close protection for high-net-worth individuals.</p>
                                <p>Today, we pride ourselves as an established service provider and market leader — our impartiality and independence is universally recognised and guaranteed.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop" alt="Security monitoring" className="w-full h-[500px] object-cover rounded-3xl" referrerPolicy="no-referrer" />
                            <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white rounded-2xl p-6 shadow-xl glow-blue">
                                <div className="text-4xl font-display font-bold">8+</div>
                                <div className="text-sm font-body text-white/80">Years of Excellence</div>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse" /><span className="text-sm font-semibold text-brand-dark">24/7 Active</span></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Stats */}
            <section className="section-padding bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <div className="flex items-center gap-4 mb-6"><div className="w-10 h-[1px] bg-brand-secondary" /><span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Our Mission</span></div>
                            <h2 className="text-4xl md:text-5xl text-white leading-tight font-display font-bold">We provide customized security solutions to protect your family, property, and business</h2>
                        </div>
                        <p className="text-xl text-white/60 font-body leading-relaxed">We deliver quality and timely services by focusing on productivity, customer care, competitiveness, and continuous process improvement in a rapidly changing business environment.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[{ value: "500+", label: "Systems Installed" }, { value: "200+", label: "Businesses Secured" }, { value: "98%", label: "Client Satisfaction" }, { value: "24/7", label: "Response Team" }].map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
                                <div className="text-4xl md:text-5xl font-display font-bold text-brand-secondary mb-2">{stat.value}</div>
                                <div className="text-white/50 font-body text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-brand-bg tech-grid">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6"><div className="w-10 h-[1px] bg-brand-primary" /><span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Our Values</span><div className="w-10 h-[1px] bg-brand-primary" /></div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark">What drives us</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-brand-primary/20 transition-all">
                                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">{v.icon}</div>
                                <h4 className="text-xl font-bold text-brand-dark mb-3">{v.title}</h4>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6"><div className="w-10 h-[1px] bg-brand-primary" /><span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Our Journey</span><div className="w-10 h-[1px] bg-brand-primary" /></div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark">Milestones</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {milestones.map((m, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                                {i < milestones.length - 1 && <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-[1px] bg-brand-primary/20" />}
                                <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center font-display font-bold text-sm mb-4 relative z-10">{m.year.slice(-2)}</div>
                                <div className="text-brand-primary font-display font-bold text-sm mb-2">{m.year}</div>
                                <h4 className="text-xl font-bold text-brand-dark mb-2">{m.title}</h4>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-brand-bg">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6"><div className="w-10 h-[1px] bg-brand-primary" /><span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Our Team</span><div className="w-10 h-[1px] bg-brand-primary" /></div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark mb-4">Expert professionals</h2>
                        <p className="text-gray-600 font-body text-lg">Our experienced leadership team brings together decades of expertise in security, technology, and business management.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                                <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/5]">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white/90 font-body text-sm">{member.bio}</p>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h4>
                                <p className="text-gray-500 font-body text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6"><div className="w-10 h-[1px] bg-brand-primary" /><span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Testimonials</span><div className="w-10 h-[1px] bg-brand-primary" /></div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark">What our clients say</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-brand-bg rounded-2xl p-7">
                                <Quote className="w-8 h-8 text-brand-primary/20 mb-4" />
                                <p className="text-gray-600 font-body leading-relaxed mb-5 text-sm">"{t.text}"</p>
                                <div className="flex items-center gap-1 mb-3">{[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}</div>
                                <h5 className="font-bold text-brand-dark text-sm">{t.name}</h5>
                                <p className="text-xs text-gray-500 font-body">{t.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Partner with Kenya's trusted security experts</h2>
                    <p className="text-xl text-white/60 font-body mb-10">Contact us today for a free, no-obligation security consultation.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="tel:+254794164662" className="bg-brand-secondary text-brand-dark px-10 py-5 rounded-full text-lg font-bold hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"><Phone className="w-5 h-5" /> Call Now</a>
                        <Link to="/contact" className="glass text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all cursor-pointer">Contact Page</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
