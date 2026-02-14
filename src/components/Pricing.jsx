import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const [billing, setBilling] = useState('monthly');

    const features = [
        "Access to the top 1% of tech talent",
        "Direct connection with qualified candidates",
        "Smart filtering & network matching",
        "Dedicated account strategist",
        "Unlimited role postings",
        "Premium support"
    ];

    return (
        <section className="py-32 bg-[#fffbf4] relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200 blur-[120px] opacity-20 pointer-events-none rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] font-black text-[#181229]/30 uppercase tracking-[0.3em] mb-4 block"
                    >
                        PRICING
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-recife-display font-semibold text-[#181229] mb-8"
                    >
                        Scale your team <br /> with confidence.
                    </motion.h2>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 bg-white p-1 rounded-full border border-[#181229]/5 shadow-sm">
                        <button
                            onClick={() => setBilling('monthly')}
                            className={`px-8 py-3 rounded-full text-sm font-bold font-inter transition-all ${billing === 'monthly' ? 'bg-[#181229] text-white shadow-xl' : 'text-[#181229]/40 hover:text-[#181229]'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling('yearly')}
                            className={`px-8 py-3 rounded-full text-sm font-bold font-inter transition-all ${billing === 'yearly' ? 'bg-[#181229] text-white shadow-xl' : 'text-[#181229]/40 hover:text-[#181229]'}`}
                        >
                            Yearly <span className="ml-1 text-[10px] opacity-60">(-20%)</span>
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* Liftoff for Hiring Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#181229] text-white rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl shadow-[#181229]/40 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14h-2l-4 8h2l2-4h2l2 4h2l-4-8zm1.5-6.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z" /></svg>
                        </div>

                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6 block">PRO PLAN</span>
                            <h3 className="text-4xl font-bold mb-6">Liftoff for Hiring</h3>
                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-6xl font-black">${billing === 'monthly' ? '1,500' : '1,200'}</span>
                                <span className="text-xl opacity-60">/month</span>
                            </div>

                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-90">
                                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="mt-16 w-full py-5 bg-white text-[#181229] rounded-full font-bold text-lg hover:scale-[1.02] transition-transform">
                            Request recruitment access
                        </button>
                    </motion.div>

                    {/* Liftoff for Connecting Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-12 border border-[#181229]/5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 group"
                    >
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#181229]/30 mb-6 block">FREE FOREVER</span>
                            <h3 className="text-4xl font-bold text-[#181229] mb-6">Liftoff for connecting</h3>
                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-6xl font-black text-[#181229]">$0</span>
                                <span className="text-xl text-[#181229]/40">/free</span>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm font-medium text-[#181229]/60">
                                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    Join our curated network
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium text-[#181229]/60">
                                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    Get role recommendations
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium text-[#181229]/60">
                                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    Connect your trusted network
                                </li>
                            </ul>

                            <div className="mt-12 p-6 bg-[#fffbf4] rounded-2xl border border-[#181229]/5">
                                <p className="text-xs text-[#181229]/40 leading-relaxed">
                                    Joining Liftoff is by invitation or vetting only.
                                    We prioritize quality to ensure meaningful connections for everyone.
                                </p>
                            </div>
                        </div>

                        <button className="mt-16 w-full py-5 border-2 border-[#181229]/10 text-[#181229] rounded-full font-bold text-lg hover:bg-[#181229] hover:text-white transition-all">
                            Apply to join
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
