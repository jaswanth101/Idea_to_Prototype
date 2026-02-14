import React from 'react';
import { motion } from 'framer-motion';

const FeaturesHuman = () => {
    const features = [
        {
            title: "Better fits",
            description: "Authentic recommendations to find the right people and opportunities.",
            glowColor: "from-red-300 to-pink-400",
            icon: (
                <svg className="w-8 h-8 text-[#181229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            )
        },
        {
            title: "Less noise",
            description: "No public broadcasts or noisy feeds. Quality over quantity, always.",
            glowColor: "from-purple-300 to-indigo-400",
            icon: (
                <svg className="w-8 h-8 text-[#181229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            )
        },
        {
            title: "More warmth",
            description: "Warm intros that lead to relationships vs. transactions.",
            glowColor: "from-orange-300 to-yellow-400",
            icon: (
                <svg className="w-8 h-8 text-[#181229]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-32 bg-[#fffbf4] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Container */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-recife-display font-semibold text-[#181229] mb-8 leading-[1.1]"
                    >
                        Hiring and networking that feels human.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-[#181229]/60 font-inter font-light leading-relaxed"
                    >
                        Liftoff amplifies human insight and facilitates connections, to help incredible people find each other.
                    </motion.p>
                </div>

                {/* 3-Item Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-16 lg:gap-24 relative">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group relative"
                        >
                            {/* Icon Container with Large Glow Background */}
                            <div className="relative w-40 h-40 flex items-center justify-center mb-10">
                                {/* LARGE PROMINENT GLOW (sit behind) */}
                                <div className={`absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr ${feature.glowColor} blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10`}></div>

                                {/* White Circle Container (sit on top) */}
                                <div className="z-10 w-full h-full rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-white/50 flex items-center justify-center relative">
                                    {/* Subtler inner ring for depth */}
                                    <div className="absolute inset-2 rounded-full border border-[#181229]/[0.02]"></div>

                                    {/* Icon */}
                                    <div className="relative scale-110 group-hover:scale-125 transition-transform duration-500">
                                        {feature.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-semibold text-[#181229] mb-4 font-inter">
                                {feature.title}
                            </h3>
                            <p className="text-base text-[#181229]/60 font-inter leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesHuman;
