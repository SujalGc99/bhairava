"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { bhairavaShirt } from "@/data/products";

export default function TextOverlays({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Parallax Text Sections
    // Map scroll progress (0-1) to opacity/y of different text blocks

    const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.05, 0.35], [50, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.4, 0.7], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.9, 1], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center items-center h-full w-full">
            {/* SECTION 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="text-center absolute top-1/2 -translate-y-1/2 px-6"
            >
                <h2 className="text-4xl md:text-7xl font-bold font-display text-temple-gold mb-4 tracking-tighter shadow-black drop-shadow-lg">
                    {bhairavaShirt.sections[0].title}
                </h2>
                <p className="text-lg md:text-2xl text-bone-white font-light tracking-widest max-w-xl mx-auto bg-black/50 p-4 backdrop-blur-sm rounded-lg">
                    {bhairavaShirt.sections[0].subtitle}
                </p>
            </motion.div>

            {/* SECTION 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="text-center absolute top-1/2 -translate-y-1/2 px-6"
            >
                <h2 className="text-4xl md:text-7xl font-bold font-display text-bhairava-maroon mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    {bhairavaShirt.sections[1].title}
                </h2>
                <p className="text-lg md:text-2xl text-bone-white font-light tracking-widest max-w-xl mx-auto bg-black/50 p-4 backdrop-blur-sm rounded-lg">
                    {bhairavaShirt.sections[1].subtitle}
                </p>
            </motion.div>

            {/* SECTION 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="text-center absolute top-1/2 -translate-y-1/2 px-6"
            >
                <h2 className="text-4xl md:text-7xl font-bold font-display text-white mb-4 tracking-tighter">
                    {bhairavaShirt.sections[2].title}
                </h2>
                <p className="text-lg md:text-2xl text-temple-gold font-light tracking-widest max-w-xl mx-auto bg-black/50 p-4 backdrop-blur-sm rounded-lg">
                    {bhairavaShirt.sections[2].subtitle}
                </p>
            </motion.div>
        </div>
    );
}
