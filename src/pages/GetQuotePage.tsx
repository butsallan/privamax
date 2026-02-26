import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";


import {
    Shield, CheckCircle2, ArrowRight, ArrowLeft,
    Home, Building2, MapPin, Phone, Mail, User,
    Camera, Zap, Lock, Flame, UserCheck, Car, Globe, Search, ChevronDown
} from "lucide-react";

const services = [
    { id: "cctv", icon: <Camera className="w-6 h-6" />, label: "CCTV Installation", desc: "IP cameras, analog, PTZ & NVR systems" },
    { id: "electric-fence", icon: <Zap className="w-6 h-6" />, label: "Electric Fence", desc: "Perimeter energisers & alarm integration" },
    { id: "access-control", icon: <Lock className="w-6 h-6" />, label: "Access Control", desc: "Biometric, card, & intercom systems" },
    { id: "fire-alarm", icon: <Flame className="w-6 h-6" />, label: "Fire Alarm System", desc: "Detection, suppression & evacuation" },
    { id: "guards", icon: <UserCheck className="w-6 h-6" />, label: "Security Guards", desc: "Armed & unarmed professional officers" },
    { id: "gates", icon: <Car className="w-6 h-6" />, label: "Automatic Gates", desc: "Sliding, swing & boom barrier gates" },
    { id: "cyber", icon: <Globe className="w-6 h-6" />, label: "Cyber Security", desc: "Network protection & threat monitoring" },
    { id: "investigation", icon: <Search className="w-6 h-6" />, label: "Private Investigation", desc: "Background checks & surveillance" },
];

const propertyTypes = [
    { id: "residential", icon: <Home className="w-5 h-5" />, label: "Residential" },
    { id: "commercial", icon: <Building2 className="w-5 h-5" />, label: "Commercial / Office" },
    { id: "industrial", icon: <Building2 className="w-5 h-5" />, label: "Industrial / Warehouse" },
    { id: "estate", icon: <Home className="w-5 h-5" />, label: "Estate / Compound" },
    { id: "embassy", icon: <Shield className="w-5 h-5" />, label: "Embassy / Institution" },
];

const budgets = [
    "Under KSh 50,000",
    "KSh 50,000 – 150,000",
    "KSh 150,000 – 500,000",
    "KSh 500,000 – 1,000,000",
    "Over KSh 1,000,000",
    "I need guidance on budget",
];

const timelines = [
    "As soon as possible",
    "Within 2 weeks",
    "Within a month",
    "1–3 months",
    "Just exploring options",
];

type FormData = {
    services: string[];
    propertyType: string;
    budget: string;
    timeline: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    notes: string;
};

const STEPS = ["Services", "Property", "Budget & Timeline", "Your Details"];

export default function GetQuotePage() {
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState<FormData>({
        services: [],
        propertyType: "",
        budget: "",
        timeline: "",
        name: "",
        phone: "",
        email: "",
        location: "",
        notes: "",
    });

    const toggleService = (id: string) => {
        setForm((f) => ({
            ...f,
            services: f.services.includes(id)
                ? f.services.filter((s) => s !== id)
                : [...f.services, id],
        }));
    };

    const canNext = () => {
        if (step === 0) return form.services.length > 0;
        if (step === 1) return form.propertyType !== "";
        if (step === 2) return form.budget !== "" && form.timeline !== "";
        if (step === 3) return form.name !== "" && form.phone !== "";
        return false;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-slate overflow-hidden">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-secondary rounded-full blur-3xl"
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
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
                                Free Quote
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                            Get a free{" "}
                            <span className="text-brand-secondary">security quote</span>
                        </h1>
                        <p className="text-xl text-white/60 font-body leading-relaxed max-w-2xl">
                            Tell us about your property and security needs. Our experts will prepare a detailed, no-obligation quote within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="section-padding bg-white relative -mt-8">
                <div className="container-custom max-w-4xl mx-auto">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-brand-bg rounded-3xl p-16 text-center shadow-xl"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
                            >
                                <CheckCircle2 className="w-12 h-12 text-brand-primary" />
                            </motion.div>
                            <h2 className="text-4xl font-display font-bold text-brand-dark mb-4">
                                Quote Request Received!
                            </h2>
                            <p className="text-xl text-gray-500 font-body leading-relaxed max-w-lg mx-auto mb-8">
                                Thank you, <strong>{form.name}</strong>. Our security consultants will review your requirements and contact you at{" "}
                                <strong>{form.phone}</strong> within 24 hours with a detailed quote.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+254794164662"
                                    className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold hover:bg-brand-dark transition-all cursor-pointer inline-flex items-center gap-2 justify-center"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Us Now
                                </a>
                                <button
                                    onClick={() => { setSubmitted(false); setStep(0); setForm({ services: [], propertyType: "", budget: "", timeline: "", name: "", phone: "", email: "", location: "", notes: "" }); }}
                                    className="border border-gray-200 text-brand-dark px-10 py-4 rounded-full font-bold hover:bg-brand-bg transition-all cursor-pointer"
                                >
                                    Submit Another
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <>
                            {/* Step Indicator */}
                            <div className="mb-12">
                                <div className="flex items-center justify-between relative">
                                    <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-100 z-0" />
                                    <div
                                        className="absolute top-5 left-0 h-0.5 bg-brand-primary z-0 transition-all duration-500"
                                        style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
                                    />
                                    {STEPS.map((s, i) => (
                                        <div key={i} className="flex flex-col items-center z-10 gap-3">
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${i < step
                                                    ? "bg-brand-primary border-brand-primary text-white"
                                                    : i === step
                                                        ? "bg-white border-brand-primary text-brand-primary shadow-lg shadow-brand-primary/20"
                                                        : "bg-white border-gray-200 text-gray-400"
                                                    }`}
                                            >
                                                {i < step ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                                            </div>
                                            <span
                                                className={`text-xs font-semibold hidden sm:block ${i === step ? "text-brand-primary" : "text-gray-400"
                                                    }`}
                                            >
                                                {s}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait">
                                    {/* STEP 0: Services */}
                                    {step === 0 && (
                                        <motion.div
                                            key="step0"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="mb-10">
                                                <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">
                                                    What services do you need?
                                                </h2>
                                                <p className="text-gray-500 font-body">Select all that apply to your security needs.</p>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                                {services.map((s) => (
                                                    <button
                                                        key={s.id}
                                                        type="button"
                                                        onClick={() => toggleService(s.id)}
                                                        className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer text-left group ${form.services.includes(s.id)
                                                            ? "border-brand-primary bg-brand-primary/5"
                                                            : "border-gray-100 hover:border-brand-primary/30 bg-white"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${form.services.includes(s.id)
                                                                ? "bg-brand-primary text-white"
                                                                : "bg-brand-bg text-brand-primary"
                                                                }`}
                                                        >
                                                            {s.icon}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-brand-dark">{s.label}</div>
                                                            <div className="text-sm text-gray-500 font-body mt-0.5">{s.desc}</div>
                                                        </div>
                                                        {form.services.includes(s.id) && (
                                                            <CheckCircle2 className="w-5 h-5 text-brand-primary ml-auto shrink-0 mt-0.5" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 1: Property Type */}
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="mb-10">
                                                <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">
                                                    What type of property?
                                                </h2>
                                                <p className="text-gray-500 font-body">This helps us tailor the right solution for you.</p>
                                            </div>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                                                {propertyTypes.map((p) => (
                                                    <button
                                                        key={p.id}
                                                        type="button"
                                                        onClick={() => setForm((f) => ({ ...f, propertyType: p.id }))}
                                                        className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all cursor-pointer ${form.propertyType === p.id
                                                            ? "border-brand-primary bg-brand-primary/5"
                                                            : "border-gray-100 hover:border-brand-primary/30 bg-white"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${form.propertyType === p.id
                                                                ? "bg-brand-primary text-white"
                                                                : "bg-brand-bg text-brand-primary"
                                                                }`}
                                                        >
                                                            {p.icon}
                                                        </div>
                                                        <span className="font-bold text-brand-dark">{p.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 2: Budget & Timeline */}
                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="mb-10">
                                                <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">
                                                    Budget & Timeline
                                                </h2>
                                                <p className="text-gray-500 font-body">This helps us recommend the right package for you.</p>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="font-bold text-brand-dark mb-4 text-lg">Estimated Budget</h3>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {budgets.map((b) => (
                                                        <button
                                                            key={b}
                                                            type="button"
                                                            onClick={() => setForm((f) => ({ ...f, budget: b }))}
                                                            className={`p-4 rounded-xl border-2 text-left font-medium transition-all cursor-pointer ${form.budget === b
                                                                ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                                                                : "border-gray-100 hover:border-brand-primary/30 text-brand-dark bg-white"
                                                                }`}
                                                        >
                                                            {b}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mb-10">
                                                <h3 className="font-bold text-brand-dark mb-4 text-lg">When do you need it?</h3>
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {timelines.map((t) => (
                                                        <button
                                                            key={t}
                                                            type="button"
                                                            onClick={() => setForm((f) => ({ ...f, timeline: t }))}
                                                            className={`p-4 rounded-xl border-2 text-left font-medium transition-all cursor-pointer ${form.timeline === t
                                                                ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                                                                : "border-gray-100 hover:border-brand-primary/30 text-brand-dark bg-white"
                                                                }`}
                                                        >
                                                            {t}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 3: Contact Details */}
                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="mb-10">
                                                <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">
                                                    Your contact details
                                                </h2>
                                                <p className="text-gray-500 font-body">We'll send your personalised quote to these details.</p>
                                            </div>

                                            <div className="space-y-5 mb-10">
                                                <div className="grid sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-brand-dark mb-2">
                                                            Full Name *
                                                        </label>
                                                        <div className="relative">
                                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                required
                                                                placeholder="John Kamau"
                                                                value={form.name}
                                                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                                                className="w-full bg-brand-bg border border-gray-200 rounded-xl pl-11 pr-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-brand-dark mb-2">
                                                            Phone Number *
                                                        </label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                            <input
                                                                type="tel"
                                                                required
                                                                placeholder="+254 7XX XXX XXX"
                                                                value={form.phone}
                                                                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                                                                className="w-full bg-brand-bg border border-gray-200 rounded-xl pl-11 pr-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                                                        Email Address
                                                    </label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                        <input
                                                            type="email"
                                                            placeholder="john@company.co.ke"
                                                            value={form.email}
                                                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                                            className="w-full bg-brand-bg border border-gray-200 rounded-xl pl-11 pr-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                                                        Property Location / Area
                                                    </label>
                                                    <div className="relative">
                                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. Karen, Westlands, Mombasa Road..."
                                                            value={form.location}
                                                            onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                                                            className="w-full bg-brand-bg border border-gray-200 rounded-xl pl-11 pr-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                                                        Additional Notes
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        placeholder="Any specific requirements, concerns, or details about your property..."
                                                        value={form.notes}
                                                        onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                                                        className="w-full bg-brand-bg border border-gray-200 rounded-xl px-5 py-4 text-brand-dark font-body focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <button
                                        type="button"
                                        onClick={() => setStep((s) => s - 1)}
                                        disabled={step === 0}
                                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 font-semibold text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Back
                                    </button>

                                    <div className="text-sm text-gray-400 font-body">
                                        Step {step + 1} of {STEPS.length}
                                    </div>

                                    {step < STEPS.length - 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => setStep((s) => s + 1)}
                                            disabled={!canNext()}
                                            className="flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            Continue <ArrowRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={!canNext()}
                                            className="flex items-center gap-2 bg-brand-secondary text-brand-dark px-10 py-3 rounded-full font-bold hover:brightness-110 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-brand-secondary/30"
                                        >
                                            <Shield className="w-4 h-4" />
                                            Get My Free Quote
                                        </button>
                                    )}
                                </div>
                            </form>

                            {/* Trust Bar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 bg-brand-bg rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 text-center"
                            >
                                {[
                                    { label: "Free & No Obligation", icon: "✓" },
                                    { label: "Response Within 24hrs", icon: "⏱" },
                                    { label: "10+ Years Experience", icon: "🏆" },
                                    { label: "Licensed & Insured", icon: "🛡" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="text-sm font-semibold text-gray-600">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
