import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ['rgba(245, 239, 230, 0)', 'rgba(245, 239, 230, 0.95)']
    );

    const backdropBlur = useTransform(
        scrollY,
        [0, 50],
        ['blur(0px)', 'blur(12px)']
    );

    const borderColor = useTransform(
        scrollY,
        [0, 50],
        ['rgba(24, 18, 41, 0)', 'rgba(24, 18, 41, 0.05)']
    )

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            style={{ backgroundColor, backdropFilter: backdropBlur, borderBottomColor: borderColor }}
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="text-3xl font-recife-display font-bold text-primary tracking-tight">
                        LIFTOFF
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <a href="#" className="text-base font-inter text-[#1E1B2E]/80 hover:text-[#1E1B2E] transition-colors font-medium">
                        Hire with Liftoff
                    </a>
                    <a href="#" className="text-base font-inter text-[#1E1B2E]/80 hover:text-[#1E1B2E] transition-colors font-medium">
                        About us
                    </a>
                    <a href="#" className="text-base font-inter text-[#1E1B2E]/80 hover:text-[#1E1B2E] transition-colors font-medium">
                        Log in
                    </a>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Log in moved to center as per user request */}
                    <a
                        href="#"
                        className="px-6 py-3 rounded-full bg-[#1E1B2E] text-white text-base font-inter font-medium hover:bg-[#1E1B2E]/90 transition-all transform hover:scale-105"
                    >
                        Request access
                    </a>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <div className="md:hidden text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
