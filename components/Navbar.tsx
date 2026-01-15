"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-void-black/70 border-b border-white/5"
        >
            <div className="flex items-center gap-4">
                <Link href="/" className="group flex items-center gap-2">
                    {/* Abstract Trishul Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-temple-gold transition-transform group-hover:scale-110">
                        <path d="M12 2L12 22" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5 8C5 8 7 12 12 12C17 12 19 8 19 8" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="5" r="1" fill="currentColor" />
                    </svg>
                    <span className="text-xl font-bold tracking-widest text-bone-white font-display">
                        BHAIRAVA
                    </span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <Link href="#story" className="text-sm tracking-widest text-gray-400 hover:text-temple-gold transition-colors">
                    LEGACY
                </Link>
                <Link href="#details" className="text-sm tracking-widest text-gray-400 hover:text-temple-gold transition-colors">
                    CRAFT
                </Link>
                <button className="bg-temple-gold text-void-black px-6 py-2 text-sm font-bold tracking-widest hover:bg-white transition-colors">
                    ORDER NOW
                </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
                <button className="text-bone-white">
                    <ShoppingBag size={20} />
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-bone-white">
                    <Menu size={24} />
                </button>
            </div>
        </motion.nav>
    );
}
