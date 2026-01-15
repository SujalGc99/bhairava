"use client";

import { motion } from "framer-motion";
import { bhairavaShirt } from "@/data/products";

export default function LegacySection() {
    return (
        <section id="story" className="min-h-[80vh] flex items-center justify-center relative py-20 px-6 bg-void-black overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bhairava-maroon/40 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-temple-gold/20 rounded-full blur-[128px]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-temple-gold text-sm font-bold tracking-[0.3em] uppercase mb-6 block">The Mythology</span>

                    <h2 className="text-5xl md:text-8xl font-display font-bold text-bone-white mb-12 tracking-tighter">
                        BHAIRAVA
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                In the ancient streets of Kathmandu, <span className="text-bone-white font-medium">Bhairava</span> is not just a deity—he is the fierce manifestation of time itself. He is the destroyer of ego, the guardian of the sacred, and the raw energy that pulses through the city.
                            </p>
                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                This collection honors that energy. It translates the terrifying beauty of the <span className="text-bhairava-maroon font-medium">Akash Bhairav</span> into a modern streetwear silhouette.
                            </p>
                        </div>
                        <div className="border-l border-temple-gold/30 pl-8 flex flex-col justify-center space-y-8">
                            <div>
                                <h4 className="text-bone-white font-bold tracking-widest mb-2 font-display text-xl">THE TRIDENT (TRISHUL)</h4>
                                <p className="text-sm text-gray-500">Symbolizing the three aspects of time: creation, preservation, and destruction.</p>
                            </div>
                            <div>
                                <h4 className="text-bone-white font-bold tracking-widest mb-2 font-display text-xl">THE THIRD EYE</h4>
                                <p className="text-sm text-gray-500">Wisdom that transcends the ordinary sight, burning away ignorance.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
