import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets to ensure Vite resolves them correctly
import amberImg from '../assets/6mHgcoLoSa94hyTG0SieyPuH3AY20cf.jpg';
import danielImg from '../assets/9rBPNihOsgVHw0WdXHDPu0RB5ke3bc.png';
import user1Img from '../assets/iilxQ1uEACQgiGkUAoGIx7odM09409.png';
import user2Img from '../assets/EUzIkxOHzLxFX3wGcUKWkKipqQ1b02.png';
import user3Img from '../assets/th9jy9evFg7Vtngpu8QJTCgXqHc72c1.png';
import user4Img from '../assets/pilG50AnVmW3056bvoqiWpDBLM0c3a1.png';
import user5Img from '../assets/b1LO6qasOjjWxxqxFlGU96ce0k90ee.png';

const SparkleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M 13.53 6.763 C 13.533 7.17 13.278 7.533 12.895 7.669 L 9.062 9.063 L 7.669 12.896 C 7.528 13.275 7.167 13.527 6.762 13.527 C 6.358 13.527 5.997 13.275 5.856 12.896 L 4.463 9.063 L 0.629 7.669 C 0.251 7.528 0 7.167 0 6.763 C 0 6.36 0.251 5.998 0.629 5.857 L 4.463 4.463 L 5.856 0.63 C 5.997 0.251 6.358 0 6.762 0 C 7.167 0 7.528 0.251 7.669 0.63 L 9.063 4.463 L 12.895 5.857 C 13.278 5.993 13.533 6.357 13.53 6.763 Z"
            fill="currentColor"
            transform="translate(0.5 1)"
        />
    </svg>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32 pb-0 bg-[#F5EFE6]">
            {/* Background Gradient & Blur */}
            <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
                {/* Violet Gradient - Bottom Left */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 10% 90%, rgba(139, 92, 246, 0.4), transparent 50%)',
                        filter: 'blur(120px)'
                    }}
                />

                {/* Orange Gradient - Right Center */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 90% 40%, rgba(251, 146, 60, 0.4), transparent 50%)',
                        filter: 'blur(120px)'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 z-20"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-recife-display font-semibold text-[#181229] leading-[1.05] tracking-tight mb-4">
                        Find incredible people, <br />
                        through people you trust.
                    </h1>

                    <p className="text-lg md:text-xl text-[#181229]/70 font-inter font-light max-w-2xl mx-auto leading-relaxed tracking-wide antialiased">
                        A hiring and networking platform where exceptional people connect — and start working together.
                    </p>
                </motion.div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-6 mb-12 z-40 relative"
                >
                    <button className="px-9 py-4 bg-[#1E1B2E] text-white rounded-2xl font-inter font-medium text-lg hover:bg-[#1E1B2E]/90 transition-all transform hover:scale-105 shadow-xl shadow-[#1E1B2E]/20">
                        Request access
                    </button>
                </motion.div>

                {/* Floating Cards Container */}
                <div className="relative w-full max-w-5xl h-[450px] -mt-20 md:-mt-28 perspective-[2000px] pointer-events-none">
                    {/* Cards Wrapper to re-enable pointer events for items inside */}
                    <div className="w-full h-full relative pointer-events-auto">

                        {/* Left Card: Amber */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, rotate: -2 }}
                            animate={{ opacity: 1, x: 0, rotate: -2 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="absolute left-[0%] md:left-[5%] top-10 bg-white rounded-2xl p-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] flex items-center gap-4 max-w-[280px] md:max-w-sm z-30 hover:z-50 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/50"
                        >
                            <img src={amberImg} alt="Amber" className="w-12 h-12 rounded-full object-cover" />
                            <div className="text-left">
                                <h3 className="text-[#181229] font-bold font-inter text-base md:text-lg leading-tight">Amber</h3>
                                <p className="text-[#181229]/60 font-inter text-xs md:text-sm mb-0.5">CEO at AI Startup</p>
                                <p className="text-[#181229] font-inter text-xs md:text-sm">Hiring a <span className="font-bold">Head of Marketing</span></p>
                            </div>
                        </motion.div>

                        {/* Right Card: Daniel */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, rotate: 2 }}
                            animate={{ opacity: 1, x: 0, rotate: 2 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="absolute right-[0%] md:right-[5%] top-24 bg-white rounded-2xl p-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] flex items-center gap-4 max-w-[280px] md:max-w-sm z-30 hover:z-50 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/50"
                        >
                            <img src={danielImg} alt="Daniel" className="w-12 h-12 rounded-full object-cover" />
                            <div className="text-left">
                                <h3 className="text-[#181229] font-bold font-inter text-base md:text-lg leading-tight">Daniel</h3>
                                <p className="text-[#181229]/60 font-inter text-xs md:text-sm mb-0.5">Marketing leader</p>
                                <p className="text-[#181229] font-inter text-xs md:text-sm">Interested in <span className="font-bold">Early stage AI</span></p>
                            </div>
                        </motion.div>

                        {/* Middle Mini Card: Shared */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="absolute left-[38%] top-[30%] bg-[#ffecd1] rounded-full px-4 py-2 flex items-center gap-2 shadow-sm z-20 hover:scale-110 transition-transform cursor-pointer"
                        >
                            <div className="bg-white/80 p-1 rounded-full">
                                <svg className="w-2.5 h-2.5 text-[#1E1B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-[9px] text-[#1E1B2E]/60 font-bold uppercase tracking-widest">Shared</span>
                                <span className="text-[11px] font-inter font-semibold text-[#1E1B2E]">Amber's search</span>
                            </div>
                        </motion.div>

                        {/* Middle Mini Card: Recommended */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="absolute left-[48%] top-[55%] bg-[#ffe4d6] rounded-full px-4 py-2 flex items-center gap-2 shadow-sm z-20 hover:scale-110 transition-transform cursor-pointer"
                        >
                            <div className="bg-white/80 p-1 rounded-full">
                                <SparkleIcon className="w-2.5 h-2.5 text-[#1E1B2E]" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-[9px] text-[#1E1B2E]/60 font-bold uppercase tracking-widest">Recommended</span>
                                <span className="text-[11px] font-inter font-semibold text-[#1E1B2E]">Daniel</span>
                            </div>
                        </motion.div>

                        {/* Floating Avatars */}
                        {/* Top/Shared Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="absolute left-[33%] top-10 w-9 h-9 rounded-full border-2 border-white shadow-lg z-10"
                        >
                            <img src={user1Img} className="rounded-full w-full h-full object-cover" alt="User" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                                <SparkleIcon className="w-2 h-2 text-[#1E1B2E]" />
                            </div>
                        </motion.div>

                        {/* Left/Amber Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="absolute left-[35%] top-[40%] w-10 h-10 rounded-full border-2 border-white shadow-lg z-10"
                        >
                            <img src={user2Img} className="rounded-full w-full h-full object-cover" alt="User" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                                <SparkleIcon className="w-2 h-2 text-[#1E1B2E]" />
                            </div>
                        </motion.div>

                        {/* Right/Daniel Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="absolute right-[33%] top-[40%] w-10 h-10 rounded-full border-2 border-white shadow-lg z-10"
                        >
                            <img src={user3Img} className="rounded-full w-full h-full object-cover" alt="User" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                                <SparkleIcon className="w-2 h-2 text-[#1E1B2E]" />
                            </div>
                        </motion.div>

                        {/* Bottom Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="absolute left-[25%] bottom-[40%] w-8 h-8 rounded-full border-2 border-white shadow-lg z-10"
                        >
                            <img src={user4Img} className="rounded-full w-full h-full object-cover" alt="User" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                                <SparkleIcon className="w-2 h-2 text-[#1E1B2E]" />
                            </div>
                        </motion.div>

                        {/* Bottom Right Avatar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="absolute right-[25%] bottom-[30%] w-9 h-9 rounded-full border-2 border-white shadow-lg z-10"
                        >
                            <img src={user5Img} className="rounded-full w-full h-full object-cover" alt="User" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                                <SparkleIcon className="w-2 h-2 text-[#1E1B2E]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
