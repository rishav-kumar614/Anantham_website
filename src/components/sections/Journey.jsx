import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import AnanthamLogo from '../brand/AnanthamLogo';
import partner1 from '../../assets/images/partners/partner1.webp';
import partner2 from '../../assets/images/partners/partner2.webp';

export default function Journey() {
    const entities = [
        {
            num: "01",
            company: "SYS Developers",
            subtitle: "Own Real-Estate Developments",
            description: "Premium plotted & residential projects built and owned by the group.",
            logo: partner2,
            website: "https://sysdevelopers.com/",
            accent: "#C9A961"
        },
        {
            num: "02",
            company: "N.B. Constructions",
            subtitle: "Civil Execution Arm",
            description: "400+ projects delivered for leading brands across India over three decades.",
            logo: partner1,
            website: "https://nbconstructions.com/",
            accent: "#D4AF37"
        },
        {
            num: "03",
            company: "Anantham",
            subtitle: "A Legacy Taking Shape",
            description: "Bringing 30+ years of construction mastery to create gated planned communities.",
            logo: "anantham",
            accent: "#E5C158"
        }
    ];

    return (
        <section id="story" className="relative bg-[#0A0A0A] py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,97,0.06),transparent_60%)]" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold block mb-4">
                            Our Pillars &amp; Foundations
                        </span>
                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                            Three Entities. <span className="text-[#C9A961] italic font-serif">One Standard.</span>
                        </h2>
                        <div className="w-16 h-[1px] bg-[#C9A961]/40 mx-auto mt-6" />
                    </div>
                </ScrollReveal>

                {/* 3-Column Editorial Grid — Completely Box-Free & Modern */}
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-stretch">
                    {entities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-[#C9A961]/40 hover:from-[#C9A961]/[0.05] transition-all duration-700"
                        >
                            {/* Top row: Number & Logo */}
                            <div>
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 group-hover:border-[#C9A961]/30 transition-colors">
                                    <span className="font-serif text-5xl text-[#C9A961]/30 group-hover:text-[#C9A961] font-light transition-colors duration-500">
                                        {item.num}
                                    </span>
                                    <div className="h-12 w-32 flex items-center justify-end">
                                        {item.logo === "anantham" ? (
                                            <AnanthamLogo className="h-10 w-auto" variant="gold" />
                                        ) : (
                                            <div className="bg-white/90 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white transition-colors duration-300">
                                                <img
                                                    src={item.logo}
                                                    alt={item.company}
                                                    className="h-7 w-auto object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Title & Subtitle */}
                                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light group-hover:text-[#C9A961] transition-colors duration-300 mb-2">
                                    {item.company}
                                </h3>
                                <p className="text-[#C9A961] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                                    {item.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-8">
                                    {item.description}
                                </p>
                            </div>

                            {/* Action Link */}
                            {item.website && (
                                <div className="pt-4">
                                    <a
                                        href={item.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A961] hover:text-white transition-colors font-semibold group/link"
                                    >
                                        <span>Visit Website</span>
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
