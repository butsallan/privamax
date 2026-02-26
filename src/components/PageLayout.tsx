import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen selection:bg-brand-primary selection:text-white">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
