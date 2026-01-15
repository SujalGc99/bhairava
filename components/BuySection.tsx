"use client";

import { motion } from "framer-motion";
import { bhairavaShirt } from "@/data/products";
import { useState } from "react";
import { Check, Star } from "lucide-react";

export default function BuySection() {
    const [selectedSize, setSelectedSize] = useState("M");

    return (
        <section id="buy" className="min-h-screen bg-void-black flex items-center justify-center py-20 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-temple-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bhairava-maroon rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-temple-gold font-bold tracking-widest text-sm mb-2 block">LIMITED EDITION DROP</span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-bone-white mb-4">
                            {bhairavaShirt.name}
                        </h2>
                        <p className="text-xl text-gray-400 font-light tracking-wide">
                            {bhairavaShirt.subtitle}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-2xl font-bold font-display text-temple-gold">
                        {bhairavaShirt.price}
                        <span className="text-sm text-gray-500 font-normal ml-2">(Tax Incl.)</span>
                    </div>

                    <div className="space-y-4">
                        {bhairavaShirt.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="bg-temple-gold/20 p-1 rounded-full text-temple-gold">
                                    <Check size={16} />
                                </span>
                                <span className="text-gray-300 tracking-wide">{highlight}</span>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-invert text-gray-400">
                        <p>{bhairavaShirt.description}</p>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <h4 className="text-sm font-bold tracking-widest text-bone-white mb-4">CULTURAL SIGNIFICANCE</h4>
                        <p className="text-sm text-gray-500 italic">
                            "{bhairavaShirt.culturalNote}"
                        </p>
                    </div>
                </motion.div>

                {/* Selection & Checkout */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10"
                >
                    <h3 className="text-2xl font-display font-bold text-bone-white mb-8">SECURE YOUR PIECE</h3>

                    {/* Size Selector */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-4">
                            <label className="text-sm font-bold tracking-widest text-gray-400">SELECT SIZE</label>
                            <button className="text-xs text-temple-gold underline hover:text-white">Size Guide</button>
                        </div>
                        <div className="grid grid-cols-5 gap-3">
                            {bhairavaShirt.buySection.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`
                                h-12 flex items-center justify-center border font-bold transition-all
                                ${selectedSize === size
                                            ? "bg-temple-gold border-temple-gold text-void-black"
                                            : "border-white/20 text-gray-400 hover:border-white hover:text-white"}
                            `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-6 mb-8 text-sm text-gray-400">
                        <div>
                            <span className="block text-xs font-bold text-gray-500 mb-1">FABRIC</span>
                            {bhairavaShirt.buySection.fabric}
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-gray-500 mb-1">FIT</span>
                            {bhairavaShirt.buySection.fit}
                        </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-bhairava-maroon hover:bg-red-900 text-bone-white font-bold tracking-widest py-4 text-lg transition-colors flex items-center justify-center gap-3">
                        ADD TO CART
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        {bhairavaShirt.buySection.delivery} • {bhairavaShirt.buySection.returnPolicy}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
