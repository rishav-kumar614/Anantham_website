import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

// Standalone Circular Gold Icons (ChatGPT Images)
import lifeCentricIcon from '../../assets/images/key_pillars/life_centric_icon.png';
import legacyCentricIcon from '../../assets/images/key_pillars/legacy_centric_icon.png';
import futureCentricIcon from '../../assets/images/key_pillars/future_centric_icon.png';

export default function KeyPillars() {
    const pillars = [
        {
            id: "01",
            title: "LIFE CENTRIC",
            subtitle: "Designed around human living & well-being",
            icon: lifeCentricIcon,
            badge: "Community & Well-being",
            points: [
                "Designed for Every Age",
                "Green Parks & Community Spaces",
                "Safe, Gated & Walkable Living"
            ]
        },
        {
            id: "02",
            title: "LEGACY CENTRIC",
            subtitle: "Rooted in 30+ years of construction mastery",
            icon: legacyCentricIcon,
            badge: "Construction Integrity",
            points: [
                "Decades of Execution",
                "Construction-First Philosophy",
                "Built by Builders"
            ]
        },
        {
            id: "03",
            title: "FUTURE CENTRIC",
            subtitle: "Engineered for generational appreciation",
            icon: futureCentricIcon,
            badge: "Enduring Value",
            points: [
                "Underground Services",
                "Paver-Built Roads",
                "Planned for Long-Term Value"
            ]
        }
    ];

    return (
        <section id="key-pillars" className="relative bg-[#F6F4F0] py-20 md:py-32 overflow-hidden border-t border-[#8A6E4B]/15">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
                backgroundSize: '20px 20px'
            }} />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                        <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-4">
                            Our Foundation
                        </span>
                        <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mb-6" />

                        <h2 className="font-serif text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6">
                            Key <span className="text-[#8A6E4B]">Pillars</span>
                        </h2>

                        <p className="text-[#5E5E5E] text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
                            Three commitments — life, legacy, and future — anchor every Anantham decision.
                        </p>
                    </div>
                </ScrollReveal>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="bg-white border border-[#8A6E4B]/20 p-8 md:p-10 flex flex-col justify-between hover:border-[#8A6E4B] hover:shadow-xl transition-all duration-500 group relative text-center items-center"
                        >
                            <div className="absolute top-6 right-6">
                                <span className="font-serif text-2xl text-[#8A6E4B]/20 group-hover:text-[#8A6E4B]/40 transition-colors">
                                    {pillar.id}
                                </span>
                            </div>

                            <div className="w-full flex flex-col items-center">
                                {/* Standalone Gold Circular Icon (No box/container) */}
                                <div className="w-36 h-36 md:w-44 md:h-44 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={pillar.icon}
                                        alt={pillar.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <span className="inline-block px-3 py-1 bg-[#F6F4F0] text-[#8A6E4B] text-[10px] uppercase tracking-widest font-bold mb-3 border border-[#8A6E4B]/15">
                                    {pillar.badge}
                                </span>

                                <h3 className="font-serif text-2xl md:text-3xl text-[#1C1C1C] font-normal mb-2 group-hover:text-[#8A6E4B] transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="text-[#5E5E5E] text-xs font-light leading-relaxed mb-6">
                                    {pillar.subtitle}
                                </p>
                            </div>

                            <div className="w-full space-y-2 pt-6 border-t border-[#F6F4F0] text-left">
                                {pillar.points.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#1C1C1C]/80 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8A6E4B] flex-shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
