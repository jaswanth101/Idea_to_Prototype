import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative bg-[#fffbf4] overflow-hidden">
            {/* Full Gradient Background Container */}
            <div className="w-full relative pt-32 pb-12 px-6">
                {/* Gradient Background */}
                <div className="absolute inset-x-0 bottom-0 h-full w-full pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e0e7ff] via-[#ffd6a5] to-[#ff9e7d] opacity-90 blur-3xl transform translate-y-20 scale-125"></div>
                    {/* Stronger overlay for the vibrant look */}
                    <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-tr from-[#9faeff] via-[#ffc98c] to-[#ff8c69] opacity-80 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
                    {/* Logo Top Left - Actually looking at the screenshot, LIFTOFF is top left of the screen? No, likely top left of the footer section. */}
                    <div className="w-full flex justify-start mb-4">
                        <span className="text-2xl font-recife-display font-bold text-[#181229] tracking-tight uppercase">
                            LIFTOFF
                        </span>
                    </div>

                    {/* Main Heading "without the noise." */}
                    <div className="text-center mb-12 w-full">
                        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-recife-display font-semibold text-[#181229] leading-[0.9]">
                            without the noise.
                        </h2>
                    </div>

                    {/* Request Access Button */}
                    <div className="mb-24">
                        <button className="px-10 py-5 bg-[#181229] text-white rounded-2xl font-inter font-medium text-lg hover:bg-[#181229]/90 transition-all transform hover:scale-105 shadow-2xl shadow-[#181229]/20">
                            Request access
                        </button>
                    </div>


                    {/* Bottom Section: 2 Cols */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">

                        {/* Left Col: Contact Info */}
                        <div className="flex flex-col items-start gap-8">
                            <span className="text-2xl font-recife-display font-bold text-[#181229] tracking-tight uppercase">
                                LIFTOFF
                            </span>

                            <div className="font-inter">
                                <p className="text-[#181229] font-medium mb-1">Get in touch</p>
                                <a href="mailto:support@liftoff.xyz" className="text-[#181229] hover:opacity-70 transition-opacity">
                                    support@liftoff.xyz
                                </a>
                            </div>
                        </div>

                        {/* Right Col: Substack Card */}
                        <div className="w-full max-w-xl lg:ml-auto">
                            <a href="#" className="block group">
                                <div className="bg-[#fcfaf9]/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 hover:bg-white/80 transition-all duration-300 shadow-sm relative overflow-hidden">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex -space-x-3">
                                            {/* Abstract avatars representation matching screenshot */}
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white"></div>
                                            <div className="w-10 h-10 rounded-full bg-[#e0e7ff] border-2 border-white z-10"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#c5e2ca] border border-white z-20 -mt-1 -ml-1"></div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-inter font-semibold text-[#181229] mb-2 pr-8">
                                        Subscribe to our Substack, Warm Intro
                                    </h3>
                                    <p className="text-[#181229]/60 text-sm font-inter leading-relaxed pr-8">
                                        Hear from leaders we admire on building phenomenal teams and how to find an incredible fit
                                    </p>

                                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#181229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Footer Bottom: Copyright & Links */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#181229]/5">
                        <p className="text-[#181229]/60 text-sm font-inter mb-4 md:mb-0">
                            Liftoff Platform Inc 2026 © All Rights Reserved
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-[#181229]/60 hover:text-[#181229] text-sm font-inter transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-[#181229]/60 hover:text-[#181229] text-sm font-inter transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
