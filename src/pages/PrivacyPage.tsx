import { motion } from "motion/react";
import { Lock } from "lucide-react";

const sections = [
    {
        title: "1. Who We Are",
        content: `Privamax Security Limited ("Privamax", "we", "us", or "our") is a security services company registered in Kenya, with our principal offices at Ndemi Road, Kilimani, MNG Offices, Nairobi. We are committed to protecting your personal data and respecting your privacy in accordance with the Kenya Data Protection Act, 2019.`
    },
    {
        title: "2. Information We Collect",
        content: `We collect personal information that you provide to us directly, including:\n\n• Name, phone number, and email address when you contact us or request a quote\n• Property address and security requirements when engaging our services\n• Payment and billing information\n• CCTV footage and biometric data where applicable as part of the security systems we install and manage\n• Technical data such as IP address and browser type when you visit our website`
    },
    {
        title: "3. How We Use Your Information",
        content: `We use the information we collect to:\n\n• Provide, manage, and improve our security services\n• Process quotes and service agreements\n• Communicate with you about your services, invoices, and updates\n• Respond to enquiries and support requests\n• Comply with legal and regulatory obligations\n• Improve our website and marketing (where you have consented)`
    },
    {
        title: "4. Legal Basis for Processing",
        content: `We process your personal data on the following legal grounds:\n\n• Performance of a contract: to deliver the security services you have engaged us for\n• Legitimate interests: to manage our business operations, prevent crime, and protect clients\n• Legal obligation: to comply with Kenyan law and regulatory requirements\n• Consent: where you have opted in to receive marketing communications`
    },
    {
        title: "5. Sharing Your Information",
        content: `We do not sell or rent your personal data to third parties. We may share your information with:\n\n• Trusted subcontractors and partners involved in delivering our services (subject to confidentiality agreements)\n• Regulatory authorities or law enforcement where required by law\n• Our technology and software service providers operating under strict data processing agreements

We ensure all third parties maintain appropriate safeguards for your data.`
    },
    {
        title: "6. Data Retention",
        content: `We retain your personal data only for as long as necessary to fulfil the purposes it was collected for, including legal, accounting, and reporting requirements. Typically:\n\n• Client records are retained for 7 years after termination of service\n• CCTV footage managed on your behalf is retained as per the agreed service schedule\n• Enquiry data is retained for 12 months`
    },
    {
        title: "7. Your Rights",
        content: `Under the Kenya Data Protection Act, 2019, you have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data where it is no longer necessary\n• Object to processing of your data\n• Withdraw consent at any time where processing is based on consent\n\nTo exercise any of these rights, please contact us at info@privamaxsecurity.co.ke.`
    },
    {
        title: "8. Security of Your Data",
        content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted data storage, restricted access controls, and regular security audits.`
    },
    {
        title: "9. Cookies & Website Data",
        content: `Our website may use cookies to improve your experience and analyse traffic. You can control cookie settings through your browser. We do not use cookies to collect sensitive personal information.`
    },
    {
        title: "10. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date. We encourage you to review this policy periodically.`
    },
    {
        title: "11. Contact Us",
        content: `If you have questions about this Privacy Policy or how we handle your personal data, please contact our Data Protection team:\n\nPrivamax Security Limited\nNdemi Road, Kilimani, MNG Offices, Nairobi, Kenya\nEmail: info@privamaxsecurity.co.ke\nPhone: +254 794 164 662`
    }
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-slate overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-secondary rounded-full blur-3xl" />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[1px] bg-brand-secondary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Legal</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
                            Privacy <span className="text-brand-secondary">Policy</span>
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
                                <Lock className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h2 className="font-bold text-brand-dark mb-2">Your privacy matters to us</h2>
                                <p className="text-gray-500 font-body text-sm leading-relaxed">
                                    This policy explains how Privamax Security collects, uses, and protects your personal information in compliance with the Kenya Data Protection Act, 2019.
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
