import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import AnanthamLogo from '../brand/AnanthamLogo';
import partner1 from '../../assets/images/partners/partner1.webp';
import partner2 from '../../assets/images/partners/partner2.webp';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

// Representative background images for each entity
import sysBg from '../../assets/images/projects/builder_floor_1.png';
import nbBg from '../../assets/images/projects/gulf_adiba_it_building.png';
import ananthamBg from '../../assets/images/projects/clubhouse_main_render.png';

export default function Journey() {
    const [activeIdx, setActiveIdx] = useState(2); // default to Anantham

    const entities = [
        {
            id: "sys",
            num: "01",
            company: "SYS Developers",
            tagline: "Own Real-Estate Developments",
            stat: "Plotted & Residential",
            description: "Premium plotted & residential projects built and owned directly by the group.",
            logo: partner2,
            website: "https://sysdevelopers.com/",
            bg: sysBg
        },
        {
            id: "nb",
            num: "02",
            company: "N.B. Constructions",
            tagline: "Civil Execution Arm",
            stat: "400+ Delivered Projects",
            description: "Over 3 decades of civil execution mastery delivering iconic landmarks across India.",
            logo: partner1,
            website: "https://nbconstructions.com/",
            bg: nbBg
        },
        {
            id: "anantham",
            num: "03",
            company: "Anantham",
            tagline: "A Legacy Taking Shape",
            stat: "20 Acres Gated Township",
            description: "Bringing 30+ years of construction mastery to create flagship planned communities.",
            logo: "anantham",
            bg: ananthamBg
        }
    ];

    return (
        <section id="story" className="relative bg-[#070708] py-24 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C9A961]/[0.03] blur-[150px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 md:mb-20">
                        <div className="inline-flex items-center gap-2 text-[#C9A961] mb-3">
                            <Layers size={14} />
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                                Our Journey &amp; Legacy
                            </span>
                        </div>

                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                            Three Entities. <span className="text-[#C9A961] italic font-serif">One Standard.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Interactive 3-Panel Visual Feature Showcase */}
                <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                    {entities.map((item, idx) => {
                        const isActive = activeIdx === idx;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.2 }}
                                onMouseEnter={() => setActiveIdx(idx)}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 min-h-[460px] flex flex-col justify-between p-8 sm:p-10 cursor-pointer ${
                                    isActive
                                        ? 'border-[#C9A961] shadow-[0_0_35px_rgba(201,169,97,0.15)] ring-1 ring-[#C9A961]/50 scale-[1.02]'
                                        : 'border-white/10 hover:border-[#C9A961]/40'
                                }`}
                            >
                                {/* Background Image with Gradient Mask */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={item.bg}
                                        alt={item.company}
                                        className={`w-full h-full object-cover transition-transform duration-1000 ${
                                            isActive ? 'scale-110 grayscale-0 opacity-40' : 'scale-100 grayscale opacity-20 group-hover:opacity-30 group-hover:scale-105'
                                        }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/80 to-[#070708]/40" />
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-10">
                                    {/* Top Row: Index + Stat Pill */}
                                    <div className="flex items-center justify-between mb-8">
                                        <span className={`font-serif text-3xl font-light transition-colors ${
                                            isActive ? 'text-[#C9A961]' : 'text-white/30 group-hover:text-[#C9A961]/70'
                                        }`}>
                                            {item.num}
                                        </span>

                                        <span className="inline-block px-3 py-1 bg-[#C9A961]/10 border border-[#C9A961]/30 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full">
                                            {item.stat}
                                        </span>
                                    </div>

                                    {/* Entity Title & Subtitle */}
                                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-2 group-hover:text-[#C9A961] transition-colors duration-300">
                                        {item.company}
                                    </h3>

                                    <p className="text-[#C9A961] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                                        {item.tagline}
                                    </p>

                                    <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Row: Logo & Website Link */}
                                <div className="relative z-10 pt-8 mt-auto border-t border-white/10 flex items-center justify-between">
                                    {/* Logo */}
                                    <div className="h-10 flex items-center">
                                        {item.logo === "anantham" ? (
                                            <AnanthamLogo className="h-8 w-auto" variant="gold" />
                                        ) : (
                                            <div className="bg-white/90 px-3 py-1.5 rounded-lg border border-white/20 group-hover:bg-white transition-colors">
                                                <img
                                                    src={item.logo}
                                                    alt={item.company}
                                                    className="h-6 w-auto object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Link */}
                                    {item.website ? (
                                        <a
                                            href={item.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-[#C9A961] hover:text-white font-semibold group/btn"
                                        >
                                            <span>Visit</span>
                                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    ) : (
                                        <span className="text-[10px] uppercase tracking-widest text-[#C9A961] font-semibold">
                                            Flagship Project
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
