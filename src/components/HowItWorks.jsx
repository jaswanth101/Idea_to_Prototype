import React, { useState } from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/6mHgcoLoSa94hyTG0SieyPuH3AY20cf.jpg';
import img2 from '../assets/vqFYB3ura93L7JXauxq7AWV7Ldsb692.png';
import img3 from '../assets/b1LO6qasOjjWxxqxFlGU96ce0k90ee.png';
import img4 from '../assets/SgvSJKaVJGZsNZSSMvI5vrRF4rQ121a.png';
import img5 from '../assets/pilG50AnVmW3056bvoqiWpDBLM0c3a1.png';
import img6 from '../assets/AJHvvOck4IHjBd89In6alsyi2NEb182.png';

const HowItWorks = () => {
    const [toggle, setToggle] = useState('connecting');

    // Mapped assets that are human faces
    const faceImages = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ];

    const getFace = (index) => faceImages[index % faceImages.length];

    return (
        <section className="py-24 md:py-32 bg-[#fffbf4] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-recife-display font-semibold text-[#181229] mb-6"
                    >
                        How Liftoff works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-[#181229]/50 font-inter font-light max-w-2xl mx-auto mb-10 tracking-wide"
                    >
                        Liftoff connects incredible people to opportunities. It's for people hiring,
                        connecting others, or even job-seeking themselves.
                    </motion.p>

                    {/* Pill Toggle Button */}
                    <div className="inline-flex p-1 bg-white border border-[#181229]/5 rounded-full shadow-lg shadow-[#181229]/[0.02]">
                        <button
                            onClick={() => setToggle('connecting')}
                            className={`px-10 py-3 rounded-full text-sm font-semibold font-inter transition-all duration-300 ${toggle === 'connecting'
                                ? 'bg-[#181229] text-white shadow-xl'
                                : 'text-[#181229]/30 hover:text-[#181229]'
                                }`}
                        >
                            For connecting
                        </button>
                        <button
                            onClick={() => setToggle('hiring')}
                            className={`px-10 py-3 rounded-full text-sm font-semibold font-inter transition-all duration-300 ${toggle === 'hiring'
                                ? 'bg-[#181229] text-white shadow-xl'
                                : 'text-[#181229]/30 hover:text-[#181229]'
                                }`}
                        >
                            For hiring
                        </button>
                    </div>
                </div>

                {/* Main Timeline-ZigZag Container - WIDENED */}
                <div className="relative max-w-7xl mx-auto px-4 md:px-8">

                    {/* The Winding Line */}
                    <div className="hidden md:block absolute inset-0 z-0 pointer-events-none opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 1200 1500" fill="none" preserveAspectRatio="none">
                            <path
                                d="M 350 200 C 350 450, 850 450, 850 750 C 850 1050, 350 1050, 350 1350"
                                stroke="#181229"
                                strokeWidth="1"
                                className="animate-draw-line"
                            />
                        </svg>
                    </div>

                    {/* Step 1: Card Left, Text Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center mb-44 md:mb-64 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-2 md:order-1 w-full"
                        >
                            {/* Card Wrapper - NO MAX WIDTH, WIDER PADDING */}
                            <div className="bg-gradient-to-br from-[#FF2B5E] via-[#FF8A3D] to-[#fffbf4] p-8 md:p-16 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(255,43,94,0.3)] flex flex-col gap-8 w-full">
                                {/* Separate Box 1: I'm deep in - W-FULL */}
                                <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-white/40 w-full">
                                    <p className="text-[10px] font-black text-[#181229]/30 uppercase tracking-[0.25em] mb-6">I'm deep in:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {['Design', 'A.I.', 'Enterprise SaaS', '+5'].map(tag => (
                                            <span key={tag} className="px-6 py-3 bg-[#F6F8FF] rounded-full text-[13px] font-semibold text-[#181229] border border-[#181229]/[0.02] shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Separate Box 2: My private network - W-FULL */}
                                <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-white/40 w-full">
                                    <p className="text-[10px] font-black text-[#181229]/30 uppercase tracking-[0.25em] mb-6">My private network</p>
                                    <div className="space-y-4">
                                        <div className="bg-white border border-[#181229]/[0.04] p-5 rounded-2xl flex items-center justify-between shadow-sm">
                                            <div className="flex items-center gap-5">
                                                <div className="w-11 h-11 rounded-xl bg-[#625df5] p-2.5 shadow-inner">
                                                    <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18a6 6 0 110-12 6 6 0 010 12z" /></svg>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[16px] font-semibold text-[#181229] tracking-tight">Best of Loom</span>
                                                    <span className="text-[11px] text-[#181229]/40 font-medium">6 people</span>
                                                </div>
                                            </div>
                                            <div className="flex -space-x-3">
                                                {[0, 1, 2].map(i => (
                                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                                                        <img src={getFace(i)} className="w-full h-full object-cover" alt="" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white border border-[#181229]/[0.04] p-5 rounded-2xl flex items-center justify-between shadow-sm">
                                            <div className="flex items-center gap-5">
                                                <div className="w-11 h-11 rounded-xl bg-[#0061ff] p-2.5 shadow-inner">
                                                    <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M6 1.907L12 5.992L18 1.907L22 4.607L12 11.412L2 4.607L6 1.907Z M2 15.393L12 8.588L22 15.393L18 18.093L12 14.008L6 18.093L2 15.393Z" /></svg>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[16px] font-semibold text-[#181229] tracking-tight">Best of Dropbox</span>
                                                    <span className="text-[11px] text-[#181229]/40 font-medium">4 people</span>
                                                </div>
                                            </div>
                                            <div className="flex -space-x-3">
                                                {[3, 4, 5].map(i => (
                                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                                                        <img src={getFace(i)} className="w-full h-full object-cover" alt="" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-1 md:order-2 flex flex-col justify-center h-full"
                        >
                            <div className="inline-flex w-14 h-14 rounded-full border border-[#181229]/[0.08] items-center justify-center font-bold text-[#181229] mb-10 bg-white shadow-xl text-lg">
                                1
                            </div>
                            <h3 className="text-4xl md:text-[3.75rem] font-recife-display font-semibold text-[#181229] mb-8 leading-[1] tracking-tight">
                                Build your private <br /> network and profile.
                            </h3>
                            <p className="text-xl md:text-2xl text-[#181229]/50 font-inter font-light leading-relaxed max-w-xl">
                                Build your private roster of the best people you know, and signal your interests.
                            </p>
                        </motion.div>
                    </div>

                    {/* Step 2: Text Left, Card Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center mb-44 md:mb-64 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col justify-center h-full"
                        >
                            <div className="inline-flex w-14 h-14 rounded-full border border-[#181229]/0.08 items-center justify-center font-bold text-[#181229] mb-10 bg-white shadow-xl text-lg">
                                2
                            </div>
                            <h3 className="text-4xl md:text-[3.75rem] font-recife-display font-semibold text-[#181229] mb-8 leading-[1] tracking-tight">
                                Receive role searches <br /> from your network.
                            </h3>
                            <p className="text-xl md:text-2xl text-[#181229]/50 font-inter font-light leading-relaxed max-w-xl">
                                Suggest people who might be a fit, or reshare with others.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full"
                        >
                            <div className="bg-gradient-to-br from-[#FF5E2B] via-[#FFEED1] to-[#D1E1FF] p-8 md:p-16 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(255,94,43,0.3)] relative w-full">
                                <div className="space-y-8 w-full">
                                    <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-5 shadow-lg border border-white/40 ml-auto w-[75%] flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#181229] flex items-center justify-center shadow-lg">
                                            <span className="text-[12px] text-white font-black">L</span>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#181229]/30 uppercase tracking-[0.25em]">Liftoff shared with you</span>
                                    </div>
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60 relative z-20 w-full hover:scale-[1.02] transition-transform duration-500">
                                        <div className="flex items-center gap-5 mb-12">
                                            <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden">
                                                <img src={getFace(4)} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <span className="text-base font-semibold text-[#181229] tracking-tight">Jamie Lewis <span className="text-[#181229]/20 font-light ml-2">shared with you</span></span>
                                        </div>
                                        <div className="flex gap-8">
                                            <div className="w-20 h-20 rounded-full border-[6px] border-white shadow-2xl overflow-hidden flex-shrink-0">
                                                <img src={getFace(0)} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <p className="text-[15px] text-[#181229]/40 font-light mb-2"><span className="text-[#181229] font-semibold">Amber</span> is hiring for</p>
                                                <h4 className="text-3xl md:text-4xl font-bold text-[#181229] leading-[1.1] tracking-tight">Head of Marketing <br /> at <span className="text-indigo-600">AI Startup</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl border border-white/50 flex items-center justify-between hover:bg-white transition-all cursor-pointer w-full">
                                        <div className="flex items-center gap-8">
                                            <div className="w-16 h-16 rounded-2xl bg-orange-50/50 flex items-center justify-center text-orange-600 shadow-inner">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            </div>
                                            <div>
                                                <p className="text-xl font-semibold text-[#181229] tracking-tight">I know a potential fit</p>
                                                <p className="text-[12px] text-[#181229]/30 font-medium tracking-[0.1em] uppercase">Suggest someone yourself</p>
                                            </div>
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-[#181229]/[0.02] flex items-center justify-center text-[#181229]/10 group-hover:bg-[#181229] group-hover:text-white transition-all">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 3: Card Left, Text Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-2 md:order-1 w-full"
                        >
                            <div className="bg-gradient-to-br from-[#FFA53D] via-[#FFFFFF] to-[#EBD1FF] p-8 md:p-16 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(255,165,61,0.3)] relative flex flex-col gap-8 w-full">
                                <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] border border-[#181229]/[0.02] flex flex-col items-center text-center relative overflow-hidden group w-full">
                                    <div className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r from-transparent via-indigo-50 to-transparent"></div>
                                    <div className="relative mb-12 mt-4">
                                        <div className="w-36 h-36 rounded-full border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden relative z-10">
                                            <img src={getFace(2)} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full shadow-2xl z-20">
                                            <div className="bg-indigo-600 rounded-full p-2.5 shadow-lg"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></div>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-bold text-[#181229] mb-2 tracking-tight">Renée Bennett</h4>
                                    <p className="text-[12px] font-black text-[#181229]/30 uppercase tracking-[0.3em] mb-14">Chief Marketing Officer</p>

                                    <div className="bg-[#FAF8FF] p-10 rounded-[2.5rem] text-left w-full border border-indigo-100/30 shadow-inner">
                                        <p className="text-[11px] font-black text-indigo-400 uppercase tracking-widest mb-5">Context from you:</p>
                                        <p className="text-[18px] text-[#181229]/60 font-medium italic border-l-[8px] border-indigo-100 pl-8 py-2 leading-relaxed tracking-wide antialiased">"Renée is an exceptional marketing leader..."</p>
                                    </div>
                                </div>
                                <div className="bg-white border border-[#181229]/[0.05] p-4 md:p-5 rounded-full shadow-2xl flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer w-full">
                                    <div className="flex items-center gap-5 pl-2">
                                        <div className="w-12 h-12 rounded-full border-4 border-[#fffbf4] shadow-md overflow-hidden">
                                            <img src={getFace(5)} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <span className="text-[16px] font-semibold text-[#181229] tracking-tight">You shared Renee with 6 people</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-inner">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-1 md:order-2 flex flex-col justify-center h-full"
                        >
                            <div className="inline-flex w-14 h-14 rounded-full border border-[#181229]/0.08 items-center justify-center font-bold text-[#181229] mb-10 bg-white shadow-xl text-lg">
                                3
                            </div>
                            <h3 className="text-4xl md:text-[3.75rem] font-recife-display font-semibold text-[#181229] mb-8 leading-[1] tracking-tight">
                                Share recommended <br /> people with your network.
                            </h3>
                            <p className="text-xl md:text-2xl text-[#181229]/50 font-inter font-light leading-relaxed max-w-xl">
                                Share people discreetly and facilitate connections instantly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes draw {
                    from { stroke-dashoffset: 2000; }
                    to { stroke-dashoffset: 0; }
                }
                .animate-draw-line {
                    stroke-dasharray: 2000;
                    animation: draw 15s linear infinite forwards;
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
