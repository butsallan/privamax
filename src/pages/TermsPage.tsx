import { motion } from "motion/react";
import { Shield } from "lucide-react";

const sections = [
    {
        title: "1. Introduction",
        content: `These Terms and Conditions ("Terms") govern your use of the services provided by Privamax Security Limited ("Privamax", "we", "us", or "our"), a company registered in Kenya. By engaging our services, accessing our website, or signing a service agreement, you confirm that you have read, understood, and agreed to be bound by these Terms.`
    },
    {
        title: "2. Services",
        content: `Privamax Security Limited provides physical and electronic security services including, but not limited to: CCTV installation and monitoring, electric fence installation, access control systems, fire alarm systems, security guard services, automatic gate systems, cyber security consulting, private investigation, and close protection services.

All services are subject to a separate service agreement or purchase order. These Terms apply in conjunction with any such agreements.`
    },
    {
        title: "3. Client Obligations",
        content: `Clients must: (a) provide accurate and complete information when requesting services or quotes; (b) ensure safe and reasonable access to the premises for our technicians and personnel; (c) comply with all applicable laws and regulations relating to security systems and personnel in Kenya; (d) notify Privamax promptly of any faults, incidents, or changes that affect the provision of services.`
    },
    {
        title: "4. Payment Terms",
        content: `Unless otherwise agreed in writing, payment for services is due as follows: a deposit of 50% is required before commencement of any installation work, with the remaining balance due upon completion. Security guard services are billed monthly in advance. Privamax reserves the right to suspend services if payment is not received within 14 days of the due date.`
    },
    {
        title: "5. Liability",
        content: `While Privamax takes all reasonable precautions to deliver reliable security services, we do not guarantee the prevention of theft, burglary, fire, or any other security incident. Our liability in any event shall be limited to the value of the service fees paid in the preceding three (3) months. We are not liable for indirect, consequential, or incidental losses.`
    },
    {
        title: "6. Intellectual Property",
        content: `All content on the Privamax website, including text, images, graphics, and branding, is the intellectual property of Privamax Security Limited and may not be reproduced, distributed, or used without prior written consent.`
    },
    {
        title: "7. Confidentiality",
        content: `Both parties agree to keep confidential any proprietary or sensitive information disclosed in the course of their business relationship, including but not limited to security system layouts, personnel schedules, and client data.`
    },
    {
        title: "8. Termination",
        content: `Either party may terminate a service agreement with 30 days' written notice. Privamax reserves the right to terminate services immediately in the event of non-payment, breach of these Terms, or where continued service poses a safety risk to our personnel.`
    },
    {
        title: "9. Governing Law",
        content: `These Terms are governed by the laws of the Republic of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of the Kenyan courts.`
    },
    {
        title: "10. Changes to These Terms",
        content: `Privamax reserves the right to update these Terms at any time. Changes will be posted on our website and notified to active clients via email. Continued use of our services after changes constitutes acceptance of the revised Terms.`
    },
    {
        title: "11. Contact",
        content: `For any queries regarding these Terms, please contact us at:\n\nPrivamax Security Limited\nNdemi Road, Kilimani, MNG Offices, Nairobi, Kenya\nEmail: info@privamaxsecurity.co.ke\nPhone: +254 794 164 662`
    }
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-slate overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} className="absolute -top-40 left-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-3xl" />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[1px] bg-brand-secondary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Legal</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
                            Terms & <span className="text-brand-secondary">Conditions</span>
                        </h1>
                        <p className="text-lg text-white/60 font-body">
                            Last updated: February 2026 &nbsp;·&nbsp; Privamax Security Limited
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        {/* Intro card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-brand-bg border border-brand-primary/10 rounded-2xl p-8 flex gap-5 mb-14"
                        >
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h2 className="font-bold text-brand-dark mb-2">Please read these terms carefully</h2>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">
                                    By engaging Privamax Security's services you agree to the following terms. If you have any questions, our team is available 24/7 to assist you.
                                </p>
                            </div>
                        </motion.div>

                        <div className="space-y-10">
                            {sections.map((sec, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="border-b border-gray-100 pb-10 last:border-0"
                                >
                                    <h3 className="text-xl font-bold text-brand-dark mb-4">{sec.title}</h3>
                                    <p className="text-gray-600 font-body leading-relaxed whitespace-pre-line">{sec.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
