import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import AnanthamLogo from '../brand/AnanthamLogo';
import partner1 from '../../assets/images/partners/partner1.webp';
import partner2 from '../../assets/images/partners/partner2.webp';
import { ArrowRight, Compass } from 'lucide-react';

export default function Journey() {
    const journeySteps = [
        {
            phase: "PHASE 01",
            yearLabel: "DEVELOPMENT",
            company: "SYS Developers",
            subtitle: "Own Real-Estate Developments",
            description: "Premium plotted & residential projects built and owned by the group.",
            logo: partner2,
            website: "https://sysdevelopers.com/"
        },
        {
            phase: "PHASE 02",
            yearLabel: "EXECUTION & SCALE",
            company: "N.B. Constructions",
            subtitle: "Civil Execution Arm",
            description: "400+ projects delivered for leading brands across India over three decades.",
            logo: partner1,
            website: "https://nbconstructions.com/"
        },
        {
            phase: "PHASE 03",
            yearLabel: "THE CULMINATION",
            company: "Anantham",
            subtitle: "A Legacy Taking Shape",
            description: "Bringing 30+ years of construction mastery to create gated planned communities.",
            logo: "anantham"
        }
    ];

    return (
        <section id="story" className="relative bg-[#070708] py-28 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Background Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C9A961]/[0.03] blur-[120px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 text-[#C9A961] mb-3">
                            <Compass size={14} className="animate-spin-slow" />
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                                Our Evolution &amp; Journey
                            </span>
                        </div>

                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                            Three Entities. <span className="text-[#C9A961] italic font-serif">One Continuous Legacy.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Horizontal Roadmap Flow (Journey Track) */}
                <div className="relative">
                    {/* Horizontal Connecting Timeline Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#C9A961]/20 via-[#C9A961]/60 to-[#C9A961]/20 z-0" />

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-start relative z-10">
                        {journeySteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.25 }}
                                className="group relative flex flex-col"
                            >
                                {/* Milestone Node Marker on the Line */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        {/* Glowing Milestone Diamond */}
                                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#070708] border border-[#C9A961]/50 group-hover:border-[#C9A961] group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(201,169,97,0.2)]">
                                            <div className="w-2.5 h-2.5 rotate-45 bg-[#C9A961]" />
                                        </div>
                                        <span className="text-[#C9A961] text-[10px] font-bold uppercase tracking-[0.25em]">
                                            {step.phase}
                                        </span>
                                    </div>

                                    {/* Arrow connector for next step */}
                                    {idx < 2 && (
                                        <div className="hidden lg:flex items-center text-[#C9A961]/40 group-hover:text-[#C9A961] transition-colors">
                                            <ArrowRight size={18} />
                                        </div>
                                    )}
                                </div>

                                {/* Content Body */}
                                <div className="space-y-4 pr-4">
                                    <span className="text-white/40 text-[10px] uppercase tracking-widest block font-medium">
                                        {step.yearLabel}
                                    </span>

                                    <h3 className="font-serif text-3xl text-white font-light group-hover:text-[#C9A961] transition-colors duration-300">
                                        {step.company}
                                    </h3>

                                    <p className="text-[#C9A961] text-xs uppercase tracking-wider font-semibold">
                                        {step.subtitle}
                                    </p>

                                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed pt-1">
                                        {step.description}
                                    </p>

                                    {/* Integrated Brand Logo Display */}
                                    <div className="pt-4 pb-2">
                                        {step.logo === "anantham" ? (
                                            <div className="h-10 flex items-center">
                                                <AnanthamLogo className="h-8 w-auto" variant="gold" />
                                            </div>
                                        ) : (
                                            <div className="inline-block bg-white/90 p-2 rounded border border-white/20 group-hover:bg-white transition-all">
                                                <img
                                                    src={step.logo}
                                                    alt={step.company}
                                                    className="h-6 w-auto object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Website Link */}
                                    {step.website && (
                                        <div className="pt-2">
                                            <a
                                                href={step.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#C9A961] hover:text-white transition-colors font-semibold border-b border-[#C9A961]/30 pb-0.5"
                                            >
                                                <span>Explore Entity</span>
                                                <ArrowRight size={12} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
