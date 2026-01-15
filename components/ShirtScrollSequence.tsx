"use client";

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { bhairavaShirt } from "@/data/products";
import TextOverlays from "./TextOverlays";

export default function ShirtScrollSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, bhairavaShirt.frameCount]);

    // Preload Images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadCount = 0;
        const totalFrames = bhairavaShirt.frameCount;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `${bhairavaShirt.imageSequencePath}/ezgif-frame-${frameNumber}.jpg`;
            img.onload = () => {
                loadCount++;
                if (loadCount === totalFrames) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Update Canvas on Scroll
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0 || !isLoaded) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Clamp index
        let frameIndex = Math.floor(index) - 1;
        if (frameIndex < 0) frameIndex = 0;
        if (frameIndex >= images.length) frameIndex = images.length - 1;

        const img = images[frameIndex];
        if (!img) return;

        // Responsive Drawing logic (Contain)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Use Math.min for contain to prevent cropping on any screen
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        requestAnimationFrame(() => renderFrame(latest));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) renderFrame(1);

        const handleResize = () => {
            if (isLoaded) renderFrame(currentIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-void-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Loading State */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-temple-gold z-50">
                        <div className="text-xl font-bold tracking-widest animate-pulse">
                            SUMMONING BHAIRAVA...
                        </div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease" }}
                />

                <TextOverlays scrollYProgress={scrollYProgress} />

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-bone-white/50 text-sm tracking-widest animate-bounce pointer-events-none"
                >
                    SCROLL TO AWAKEN
                </motion.div>
            </div>
        </div>
    );
}
