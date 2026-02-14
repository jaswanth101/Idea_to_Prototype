import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/4KPQoGino4WLLygR13jygbZ944019.png';

const GalleryCard = ({ title, category, description, tags, color, image }) => {
    return (
        <div className={`flex-shrink-0 w-[400px] h-[300px] rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group border border-[#181229]/5 shadow-sm hover:shadow-xl transition-all duration-500`} style={{ backgroundColor: color }}>
            {image && (
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <img src={image} className="w-full h-full object-cover rounded-r-[2rem]" alt="" />
                </div>
            )}
            <div className="relative z-10">
                <span className="text-[10px] font-bold text-[#181229]/30 uppercase tracking-[0.2em] mb-4 block">
                    {category}
                </span>
                <h3 className="text-2xl font-bold text-[#181229] mb-4 leading-tight">
                    {title}
                </h3>
                <p className="text-sm text-[#181229]/60 font-inter font-light max-w-[200px]">
                    {description}
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/50 backdrop-blur-md rounded-full text-[10px] font-bold text-[#181229]/60 uppercase border border-[#181229]/5">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
    return (
        <div className="flex overflow-hidden relative py-4">
            <motion.div
                animate={{
                    x: direction === "left" ? [-2000, 0] : [0, -2000]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
                className="flex gap-8 whitespace-nowrap"
            >
                {[...items, ...items, ...items].map((item, index) => (
                    <GalleryCard key={index} {...item} />
                ))}
            </motion.div>
        </div>
    );
};

const Gallery = () => {
    const row1 = [
        { title: "Design Leadership", category: "DESIGN", description: "World-class design leaders for hypergrowth startups.", tags: ["CDO", "VP DESIGN", "FOUNDER"], color: "#FCE7F3", image: img1 },
        { title: "Top 1% Engineers", category: "ENGINEERING", description: "Founding engineers who can build from 0 to 1.", tags: ["CTO", "STAFF", "FOUNDING"], color: "#EFF6FF" },
        { title: "Product Visionaries", category: "PRODUCT", description: "Product leaders who defines the future of SaaS.", tags: ["CPO", "VP PRODUCT", "PM"], color: "#F0FDF4" },
        { title: "Marketing Engines", category: "GROWTH", description: "Growth hackers and CMOs who scale revenue.", tags: ["CMO", "GROWTH", "CONTENT"], color: "#FFFBEB" },
    ];

    const row2 = [
        { title: "Mobile Masters", category: "ENGINEERING", description: "iOS and Android wizards building the next big thing.", tags: ["IOS", "SWIFT", "ANDROID"], color: "#F5F3FF" },
        { title: "AI/ML Experts", category: "TECHNOLOGY", description: "Building the next generation of intelligent products.", tags: ["LLM", "PYTORCH", "AGENTIC"], color: "#ECFEFF" },
        { title: "Sales Powerhouses", category: "SALES", description: "AEs and VPs who close the biggest enterprise deals.", tags: ["AE", "VP SALES", "SDR"], color: "#FEF2F2" },
        { title: "Customer Success", category: "SUPPORT", description: "Keeping your churn low and customers happy.", tags: ["CSM", "VP CS", "OPERATIONS"], color: "#F0F9FF" },
    ];

    return (
        <section className="py-32 bg-[#fffbf4] border-t border-[#181229]/5">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[11px] font-black text-[#181229]/30 uppercase tracking-[0.3em] mb-4 block"
                >
                    SUCCESS STORIES
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-recife-display font-semibold text-[#181229] mb-8"
                >
                    A gallery of possibilities
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-lg md:text-xl text-[#181229]/50 max-w-2xl mx-auto font-inter font-light"
                >
                    Discover the types of world-class talent and roles that move through the Liftoff network every single day.
                </motion.p>
            </div>

            <div className="relative">
                {/* Gradient Fades for the edges */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fffbf4] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#fffbf4] to-transparent z-20 pointer-events-none"></div>

                <div className="space-y-4">
                    <MarqueeRow items={row1} direction="left" speed={60} />
                    <MarqueeRow items={row2} direction="right" speed={70} />
                    <MarqueeRow items={row1} direction="left" speed={55} />
                </div>
            </div>

            <div className="mt-24 text-center">
                <button className="px-10 py-5 bg-[#181229] text-white rounded-full font-inter font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#181229]/20">
                    Join the network
                </button>
            </div>
        </section>
    );
};

export default Gallery;
