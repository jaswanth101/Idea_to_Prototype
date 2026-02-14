import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className="bg-white/50 border border-primary/5 rounded-2xl p-8 hover:bg-white/80 transition-colors group shadow-sm hover:shadow-md"
        >
            <div className="mb-6 bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-plain font-bold text-primary mb-4">{title}</h3>
            <p className="text-primary/60 font-inter text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

const Features = () => {
    // ... icons remain same ...
    const steps = [
        {
            title: "Discover Talent",
            description: "Browse curated profiles of top-tier designers, engineers, and product managers ready for their next challenge.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            )
        },
        {
            title: "Connect & Vet",
            description: "Directly message candidates or let our platform facilitate introductions. Review detailed portfolios and work history.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            )
        },
        {
            title: "Hire with Confidence",
            description: "Onboard your new team member quickly. We handle the paperwork so you can focus on building great products.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-recife-display font-semibold text-primary mb-6">How Liftoff Works</h2>
                    <p className="text-primary/60 max-w-2xl mx-auto font-inter">
                        A simple, streamlined process to find and hire the best talent for your team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <FeatureCard
                            key={index}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
