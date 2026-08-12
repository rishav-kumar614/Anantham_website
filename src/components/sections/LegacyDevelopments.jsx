import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Building2, Landmark, ArrowUpRight, CheckCircle2 } from 'lucide-react';

// SYS Projects Images
import oliveResidencyImg from '../../assets/images/projects/olive_residency.png';
import krishnaFarmlandImg from '../../assets/images/projects/krishna_farmland.png';
import golfCourseCommImg from '../../assets/images/projects/golf_course_commercial.png';
import pratibhaTowerImg from '../../assets/images/projects/pratibha_tower_2.png';
import mukteshwarVillasImg from '../../assets/images/projects/mukteshwar_villas.png';
import greenwoodCityImg from '../../assets/images/projects/d13_greenwood_city.png';
import dwarkaExpCommImg from '../../assets/images/projects/dwarka_expressway_commercial.png';
import mannatFarmImg from '../../assets/images/projects/mannat_farm.png';

// NB Constructions Images
import iitDelhiImg from '../../assets/images/projects/iit_delhi_sonipat.png';
import globalHeightsImg from '../../assets/images/projects/global_heights_school.png';
import gulfAdibaImg from '../../assets/images/projects/gulf_adiba_it_building.png';
import djLifestyleImg from '../../assets/images/projects/dj_lifestyle_hospitality.png';
import mmtcPampImg from '../../assets/images/projects/mmtc_pamp_refinery.png';
import bmlMunjalImg from '../../assets/images/projects/bml_munjal_university.png';
import m3mParagonImg from '../../assets/images/projects/m3m_paragon.jpeg';
import m3mMerlinImg from '../../assets/images/projects/m3m_merlin.jpeg';
import m3mSolitudeImg from '../../assets/images/projects/m3m_solitude.jpeg';
import adaniSamsaraImg from '../../assets/images/projects/adani_samsara.jpeg';

export default function LegacyDevelopments() {
    const [activeTab, setActiveTab] = useState('sys');

    const sysProjects = [
        {
            title: "Olive Residency",
            location: "Sector 57, Gurgaon",
            category: "Luxury Row Housing & Builder Floors",
            desc: "Bespoke luxury row houses crafted with architectural precision.",
            badge: "Completed",
            image: oliveResidencyImg
        },
        {
            title: "Krishna Farmland",
            location: "NCR Region",
            category: "Gated Farmhouse Community",
            desc: "Exclusive gated sanctuary offering sprawling farmland estates.",
            badge: "Gated Community",
            image: krishnaFarmlandImg
        },
        {
            title: "Golf Course Commercial",
            location: "Main Golf Course Road, Gurugram",
            category: "Commercial Landmark HQ",
            desc: "Prime commercial office space designed for high-density corporate commerce.",
            badge: "Corporate HQ",
            image: golfCourseCommImg
        },
        {
            title: "Pratibha Tower 2",
            location: "Gurugram",
            category: "Commercial Office Building",
            desc: "State-of-the-art commercial elevation featuring modern glass curtain walls.",
            badge: "Commercial",
            image: pratibhaTowerImg
        },
        {
            title: "Mukteshwar Villas",
            location: "Gurugram",
            category: "Bespoke Villa Community",
            desc: "Tailored residential villas built with durable structural integrity.",
            badge: "Residential",
            image: mukteshwarVillasImg
        },
        {
            title: "D-13 Greenwood City",
            location: "Greenwood City, Gurugram",
            category: "Luxury Builder Floor",
            desc: "High-end floor residences in one of Gurugram's established townships.",
            badge: "Luxury Living",
            image: greenwoodCityImg
        },
        {
            title: "Dwarka Expressway Commercial",
            location: "Dwarka Expressway, Gurugram",
            category: "Commercial Development",
            desc: "Strategic retail and office destination along the growth corridor.",
            badge: "Commercial",
            image: dwarkaExpCommImg
        },
        {
            title: "Mannat Farm",
            location: "Gurugram",
            category: "Luxury Country Estate",
            desc: "Lush green farmhouse development designed for serene weekend retreats.",
            badge: "Estate",
            image: mannatFarmImg
        }
    ];

    const nbProjects = [
        {
            title: "IIT Delhi Sonipat Campus",
            location: "Sonipat, Haryana",
            category: "Premier Educational Campus",
            desc: "Constructed state-of-the-art academic blocks, research centers, and infrastructure.",
            badge: "Institutional Landmark",
            image: iitDelhiImg
        },
        {
            title: "Gulf Adiba IT Building",
            location: "Plot 272, Phase II, Udyog Vihar, Gurugram",
            category: "Iconic IT/ITeS Commercial Tower",
            desc: "Flagship commercial IT building featuring contemporary facade architecture.",
            badge: "Executed for Others",
            image: gulfAdibaImg
        },
        {
            title: "MMTC-PAMP Gold Refinery",
            location: "Rai Industrial Area, Sonipat",
            category: "Industrial Refining Facility",
            desc: "High-security industrial refining campus for India's premier precious metals joint venture.",
            badge: "Executed for Others",
            image: mmtcPampImg
        },
        {
            title: "Global Heights School",
            location: "Gurugram",
            category: "K-12 Educational Institution",
            desc: "Comprehensive school campus development with modern learning facilities.",
            badge: "Executed for Others",
            image: globalHeightsImg
        },
        {
            title: "D.J. Lifestyle & Hospitality",
            location: "Modinagar, UP",
            category: "Hospitality & Convention Center",
            desc: "Large-format hospitality venue designed for premium events and conventions.",
            badge: "Executed for Others",
            image: djLifestyleImg
        },
        {
            title: "BML Munjal University",
            location: "Gurugram",
            category: "Higher Education Campus",
            desc: "Multi-block academic buildings and campus infrastructure.",
            badge: "Executed for Others",
            image: bmlMunjalImg
        },
        {
            title: "M3M Paragon",
            location: "Sector 57, Gurugram",
            category: "Commercial & Retail Landmark",
            desc: "Premier commercial retail hub executed for developer partner M3M.",
            badge: "Engineered In-House",
            image: m3mParagonImg
        },
        {
            title: "M3M Merlin",
            location: "Sector 67, Gurugram",
            category: "High-Rise Residential Landmark",
            desc: "Luxury high-rise residential complex structural execution delivered for M3M.",
            badge: "Engineered In-House",
            image: m3mMerlinImg
        },
        {
            title: "M3M Solitude",
            location: "Sector 89, Gurugram",
            category: "Premium Low-Rise Residences",
            desc: "Modern boutique residential development engineered in-house.",
            badge: "Engineered In-House",
            image: m3mSolitudeImg
        },
        {
            title: "Adani Samsara",
            location: "Sector 63, Gurugram",
            category: "Luxury Township Floors",
            desc: "Executed high-density low-rise residential floors for Adani Realty.",
            badge: "Engineered In-House",
            image: adaniSamsaraImg
        }
    ];

    const currentProjects = activeTab === 'sys' ? sysProjects : nbProjects;

    return (
        <section id="legacy-developments" className="relative bg-[#0D0E11] py-24 md:py-36 overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#C9A961]/[0.025] blur-[160px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold block mb-3">
                            Track Record &amp; Portfolio
                        </span>
                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Delivered <span className="text-[#C9A961] italic font-serif">Landmarks</span>
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                            "We built for others, long before we built for ourselves." Explore three decades of execution excellence across Group developments and third-party institutional projects.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Filter Tabs — Sleek Dark Pill Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('sys')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                                activeTab === 'sys'
                                    ? 'bg-[#C9A961] text-black shadow-[0_0_20px_rgba(201,169,97,0.3)]'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            <Building2 size={15} />
                            <span>SYS Developers Projects</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('nb')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                                activeTab === 'nb'
                                    ? 'bg-[#C9A961] text-black shadow-[0_0_20px_rgba(201,169,97,0.3)]'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            <Landmark size={15} />
                            <span>NB Constructions (Executed for Others)</span>
                        </button>
                    </div>
                </div>

                {/* Subtitle Line */}
                <div className="text-center mb-12">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#C9A961]/80">
                        {activeTab === 'sys' 
                            ? 'Bespoke Residential, Commercial & Farmland Developments' 
                            : 'Executed for Others · Engineered In-House'}
                    </span>
                </div>

                {/* Projects Grid — Card-Free Full Image Gallery Tiles */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {currentProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.08 }}
                                className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-white/5 border border-white/10 hover:border-[#C9A961]/60 transition-all duration-700 cursor-pointer"
                            >
                                {/* Full Background Image */}
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent text-[#C9A961] text-sm font-serif italic p-6 text-center">
                                        {project.title}
                                    </div>
                                )}

                                {/* Gradient Overlays for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

                                {/* Top Badge */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[9px] font-bold uppercase tracking-widest rounded-full">
                                        {project.badge}
                                    </span>
                                    <CheckCircle2 size={15} className="text-[#C9A961]" />
                                </div>

                                {/* Floating Content at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.25em] font-semibold block mb-1">
                                        {project.location}
                                    </span>

                                    <h3 className="font-serif text-2xl text-white font-light leading-tight group-hover:text-[#C9A961] transition-colors duration-300 mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-white/60 text-xs font-light leading-snug line-clamp-2 mb-4 group-hover:text-white/80 transition-colors">
                                        {project.desc}
                                    </p>

                                    <div className="pt-3 border-t border-white/15 flex justify-between items-center text-[10px] uppercase tracking-wider text-white/50 group-hover:text-[#C9A961] transition-colors">
                                        <span>{project.category}</span>
                                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
