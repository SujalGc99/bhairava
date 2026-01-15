"use client";

import { motion } from "framer-motion";

export default function CraftSection() {
    return (
        <section id="details" className="min-h-[80vh] flex items-center bg-zinc-900/50 py-24 px-6 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

                {/* Visual/Texture Placeholder (Since no texture images provided, using CSS art/gradient) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-square bg-white/5 rounded-2xl overflow-hidden relative border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-void-black to-transparent"></div>

                    <div className="absolute bottom-8 left-8">
                        <div className="text-8xl font-bold text-white/5 font-display">280</div>
                        <div className="text-xl font-bold text-temple-gold tracking-widest">GSM FRENCH TERRY</div>
                    </div>
                </motion.div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-temple-gold text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Craftsmanship</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-bone-white mb-8">
                            ENGINEERED FOR <br /> <span className="text-gray-500">LONGEVITY.</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="text-2xl font-bold text-white/20">01</span>
                                <div>
                                    <h4 className="text-lg font-bold text-bone-white mb-2 tracking-wide">HEAVYWEIGHT STRUCTURE</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                                        Curated 280 GSM cotton blend that holds its shape while providing breathability for the Kathmandu climate.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="text-2xl font-bold text-white/20">02</span>
                                <div>
                                    <h4 className="text-lg font-bold text-bone-white mb-2 tracking-wide">PUFF PRINT TECHNIQUE</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                                        High-density puff print adds a tactile dimension to the Bhairava artwork, mimicking the texture of ancient stone carvings.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="text-2xl font-bold text-white/20">03</span>
                                <div>
                                    <h4 className="text-lg font-bold text-bone-white mb-2 tracking-wide">PRECISION FIT</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                                        A boxy, dropped-shoulder silhouette designed for modern movement and engineered to drape perfectly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
