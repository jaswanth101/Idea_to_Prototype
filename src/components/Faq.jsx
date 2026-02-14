import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is Liftoff?",
        answer: "Liftoff is a hiring and networking platform that helps you find an incredible fit, through people you trust.\n\nThe future of hiring is social, so we've built a product that makes it easy for you to share role opportunities and people with your network – and for your network to make the right connections happen.\n\nThis means better fits, less noise, and more warmth."
    },
    {
        question: "Who uses Liftoff?",
        answer: "Liftoff is used by forward-thinking companies and candidates who value quality connections over quantity. Whether you're a startup looking for your next key hire or a professional seeking your dream role, Liftoff provides the tools to leverage your trusted network."
    },
    {
        question: "I know someone who's hiring. How can I help them?",
        answer: "You can invite them to Liftoff! By sharing their open roles with your network on Liftoff, you help them tap into a pool of vetted, high-quality talent recommended by people they trust."
    }
];

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#181229]/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-start w-full py-8 text-left group"
            >
                <h3 className="text-xl font-inter font-medium text-[#181229] pr-8">{question}</h3>
                <span className="flex-shrink-0 ml-4 p-1 rounded-full bg-[#181229]/5 group-hover:bg-[#181229]/10 transition-colors">
                    <svg
                        className={`w-5 h-5 text-[#181229] transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pr-12">
                            {answer.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-[#181229]/70 font-inter leading-relaxed mb-4 last:mb-0">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    return (
        <section className="bg-[#fffbf4] py-24 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
                <div className="md:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-recife-display font-semibold text-[#181229] leading-tight tracking-tight">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="md:w-2/3">
                    {/* Top border for the first item */}
                    <div className="border-t border-[#181229]/10">
                        {faqs.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
