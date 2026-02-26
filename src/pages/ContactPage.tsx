import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Shield, Facebook, Instagram, Twitter, ArrowUpRight, CheckCircle2 } from "lucide-react";

const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+254 794 164 662", href: "tel:+254794164662" },
    { icon: <Phone className="w-6 h-6" />, label: "Landline", value: "+254 202 070 031", href: "tel:+254202070031" },
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "info@privamaxsecurity.co.ke", href: "mailto:info@privamaxsecurity.co.ke" },
    { icon: <Mail className="w-6 h-6" />, label: "Support Email", value: "help@privamaxsecurity.co.ke", href: "mailto:help@privamaxsecurity.co.ke" },
    { icon: <MapPin className="w-6 h-6" />, label: "Address", value: "Ndemi Road, Kilimani, MNG Offices, Nairobi", href: "https://maps.google.com/?q=Ndemi+Road+Kilimani+Nairobi+Kenya" },
    { icon: <Clock className="w-6 h-6" />, label: "Hours", value: "24/7 — Always available", href: undefined }
];

const socials = [
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://twitter.com/PrivamaxS" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100094909293959" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/privamaxsecurityke" },
    {
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.58a8.2 8.2 0 0 0 4.79 1.53V6.66a4.85 4.85 0 0 1-1.02.03z" />
            </svg>
        ),
        label: "TikTok",
        href: "https://www.tiktok.com/@privamaxsecurityke"
    }
];

const faqs = [
    { q: "Do you offer free security assessments?", a: "Yes. We provide a free, no-obligation site survey to assess your property and recommend the best security solution for your needs." },
    { q: "What areas do you cover?", a: "We serve Nairobi, Mombasa, Kisumu, and surrounding areas across Kenya. Contact us to confirm availability in your specific location." },
    { q: "How fast is your response time?", a: "Our armed response teams are available 24/7 and typically arrive within minutes of an alarm being triggered." },
    { q: "Do you provide both residential and commercial security?", a: "Absolutely. We serve private homes, corporate offices, malls, estates, embassies, and high-net-worth individuals." },
    { q: "Can I monitor my CCTV remotely?", a: "Yes. All our CCTV installations come with smartphone app access for remote viewing, playback, and instant motion alerts." }
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-slate overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-3xl" />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[1px] bg-brand-secondary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Contact Us</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                            Let's secure{" "}
                            <span className="text-brand-secondary">your property</span>
                        </h1>
                        <p className="text-xl text-white/60 font-body leading-relaxed max-w-2xl">
                            Get in touch for a free security consultation, site survey, or emergency response. We're available 24/7.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-16 px-6 md:px-12 -mt-12 relative z-20">
                <div className="container-custom">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target={item.href?.startsWith("http") ? "_blank" : undefined}
                                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:border-brand-primary/20 hover:shadow-xl transition-all cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <div className="text-xs text-gray-400 font-body uppercase tracking-wider mb-1">{item.label}</div>
                                <div className="text-lg font-bold text-brand-dark">{item.value}</div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section-padding bg-white pt-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-[1px] bg-brand-primary" />
                                <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Send a Message</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl text-brand-dark leading-tight mb-8">Request a free security audit</h2>

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-brand-bg rounded-2xl p-12 text-center">
                                    <CheckCircle2 className="w-16 h-16 text-brand-accent mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold text-brand-dark mb-3">Message Sent!</h3>
                                    <p className="text-gray-500 font-body">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                                    className="space-y-5"
                                >
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-dark mb-2">Full Name *</label>
                                            <input id="contact-name" type="text" required placeholder="John Kamau" className="w-full bg-brand-bg border border-gray-200 rounded-xl px-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-phone" className="block text-sm font-semibold text-brand-dark mb-2">Phone Number *</label>
                                            <input id="contact-phone" type="tel" required placeholder="+254 7XX XXX XXX" className="w-full bg-brand-bg border border-gray-200 rounded-xl px-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                                        <input id="contact-email" type="email" placeholder="john@company.co.ke" className="w-full bg-brand-bg border border-gray-200 rounded-xl px-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-service" className="block text-sm font-semibold text-brand-dark mb-2">Service Needed</label>
                                        <select id="contact-service" className="w-full bg-brand-bg border border-gray-200 rounded-xl px-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all cursor-pointer">
                                            <option value="">Select a service</option>
                                            <option>CCTV Camera Installation</option>
                                            <option>Electric Fence</option>
                                            <option>Fire Alarm System</option>
                                            <option>Access Control</option>
                                            <option>Security Guards</option>
                                            <option>Automatic Gates</option>
                                            <option>Cyber Security</option>
                                            <option>Private Investigation</option>
                                            <option>Close Protection</option>
                                            <option>Security Audit</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-dark mb-2">Message *</label>
                                        <textarea id="contact-message" required rows={5} placeholder="Tell us about your security needs..." className="w-full bg-brand-bg border border-gray-200 rounded-xl px-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none" />
                                    </div>
                                    <button type="submit" className="w-full sm:w-auto bg-brand-secondary text-brand-dark px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all cursor-pointer group">
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map + Additional Info */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                            <div className="rounded-2xl overflow-hidden h-[350px] border border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8454651831694!2d36.8049544!3d-1.2653014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17208dfe6fdb%3A0xde3bdd43cd215d63!2sPrivamax%20Security!5e0!3m2!1sen!2sug!4v1772111704159!5m2!1sen!2sug"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Privamax Security Location"
                                />
                            </div>

                            <div className="bg-brand-bg rounded-2xl p-8 space-y-6">
                                <h3 className="text-xl font-bold text-brand-dark">Emergency? Call us now</h3>
                                <p className="text-gray-600 font-body">Our 24/7 response team is always ready. For immediate security assistance, reach us directly:</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="tel:+254794164662" className="flex-1 bg-brand-primary text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-brand-dark transition-all cursor-pointer flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4" /> +254 794 164 662
                                    </a>
                                    <a href="tel:+254202070031" className="flex-1 border border-brand-primary text-brand-primary px-6 py-4 rounded-xl font-bold text-center hover:bg-brand-primary hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4" /> +254 202 070 031
                                    </a>
                                </div>
                            </div>

                            <div className="bg-brand-slate rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                                <p className="text-white/60 font-body text-sm mb-6">Stay updated with security tips and company news.</p>
                                <div className="flex gap-3">
                                    {socials.map((s, i) => (
                                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-brand-primary border border-white/10 hover:border-brand-primary text-white px-5 py-3 rounded-xl transition-all cursor-pointer">
                                            {s.icon} <span className="text-sm font-medium">{s.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-brand-bg tech-grid">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-10 h-[1px] bg-brand-primary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">FAQ</span>
                            <div className="w-10 h-[1px] bg-brand-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl text-brand-dark">Frequently asked questions</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-brand-bg/50 transition-colors"
                                >
                                    <span className="font-bold text-brand-dark pr-4">{faq.q}</span>
                                    <span className={`text-brand-primary text-2xl transition-transform shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                                </button>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-gray-600 font-body leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-brand-secondary/20 rounded-2xl flex items-center justify-center">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white">Privamax Security</h3>
                            <p className="text-white/50 font-body">Your Security Is Our Priority</p>
                        </div>
                    </div>
                    <button
                        data-cal-link="privamax-ke/30min"
                        data-cal-namespace="30min"
                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
                        className="bg-brand-secondary text-brand-dark px-10 py-5 rounded-full font-bold hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
                    >
                        Book Appointment Online <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}
