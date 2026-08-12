import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Building2, Landmark, ArrowUpRight, Sparkles } from 'lucide-react';

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
    const [expandedIdx, setExpandedIdx] = useState(0);

    const sysProjects = [
        {
            title: "Olive Residency",
            location: "Sector 57, Gurgaon",
            category: "Luxury Row Housing & Builder Floors",
            desc: "Bespoke luxury row houses crafted with architectural precision and high-spec interior finishes.",
            badge: "Completed",
            image: oliveResidencyImg
        },
        {
            title: "Krishna Farmland",
            location: "NCR Region",
            category: "Gated Farmhouse Community",
            desc: "Exclusive gated sanctuary offering sprawling farmland estates surrounded by nature.",
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
            location: "Udyog Vihar, Gurugram",
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
        <section id="legacy-developments" className="relative bg-[#070708] py-24 md:py-36 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#C9A961]/[0.03] blur-[180px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 text-[#C9A961] mb-3">
                            <Sparkles size={14} />
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                                Architectural Portfolio
                            </span>
                        </div>

                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Delivered <span className="text-[#C9A961] italic font-serif">Landmarks</span>
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                            "We built for others, long before we built for ourselves." Explore three decades of execution excellence.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Category Filter Pills */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <button
                            onClick={() => {
                                setActiveTab('sys');
                                setExpandedIdx(0);
                            }}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                                activeTab === 'sys'
                                    ? 'bg-[#C9A961] text-black shadow-[0_0_20px_rgba(201,169,97,0.3)]'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            <Building2 size={14} />
                            <span>SYS Developers Projects ({sysProjects.length})</span>
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('nb');
                                setExpandedIdx(0);
                            }}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                                activeTab === 'nb'
                                    ? 'bg-[#C9A961] text-black shadow-[0_0_20px_rgba(201,169,97,0.3)]'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            <Landmark size={14} />
                            <span>NB Constructions ({nbProjects.length})</span>
                        </button>
                    </div>
                </div>

                {/* FULL-WIDTH HORIZONTAL EXPANDING ACCORDION REEL (ALL PROJECTS) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[530px] w-full overflow-x-auto pb-4 custom-scrollbar"
                    >
                        {currentProjects.map((project, idx) => {
                            const isExpanded = expandedIdx === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    layout
                                    onClick={() => setExpandedIdx(idx)}
                                    onMouseEnter={() => setExpandedIdx(idx)}
                                    className={`relative overflow-hidden rounded-2xl transition-all duration-700 cursor-pointer border ${
                                        isExpanded
                                            ? 'lg:flex-[4] min-w-[320px] lg:min-w-[420px] border-[#C9A961] shadow-[0_0_35px_rgba(201,169,97,0.2)] ring-1 ring-[#C9A961]/40'
                                            : 'lg:flex-[1] min-w-[90px] border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                                    } h-[380px] lg:h-full flex flex-col justify-between p-5 md:p-7 flex-shrink-0 lg:flex-shrink`}
                                >
                                    {/* Full Image Background */}
                                    <div className="absolute inset-0 z-0">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`w-full h-full object-cover transition-transform duration-1000 ${
                                                    isExpanded ? 'scale-105 grayscale-0' : 'scale-100 grayscale group-hover:scale-105'
                                                }`}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-white/10 to-black" />
                                        )}
                                        {/* Gradient Dark Overlay */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 ${
                                            isExpanded
                                                ? 'bg-gradient-to-t from-black/95 via-black/50 to-black/20'
                                                : 'bg-gradient-to-t from-black/90 via-black/70 to-black/40'
                                        }`} />
                                    </div>

                                    {/* EXPANDED CONTENT VIEW */}
                                    {isExpanded ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="relative z-10 h-full flex flex-col justify-between"
                                        >
                                            {/* Top Bar */}
                                            <div className="flex items-center justify-between">
                                                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                    {project.badge}
                                                </span>
                                                <span className="text-[#C9A961] text-xs font-mono font-semibold">
                                                    {String(idx + 1).padStart(2, '0')} / {String(currentProjects.length).padStart(2, '0')}
                                                </span>
                                            </div>

                                            {/* Bottom Details */}
                                            <div className="pt-10">
                                                <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
                                                    {project.location}
                                                </span>

                                                <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-3 leading-tight">
                                                    {project.title}
                                                </h3>

                                                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-6">
                                                    {project.desc}
                                                </p>

                                                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                                                    <span className="text-white/50 text-xs font-light">
                                                        {project.category}
                                                    </span>

                                                    <div className="w-8 h-8 rounded-full bg-[#C9A961] text-black flex items-center justify-center">
                                                        <ArrowUpRight size={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* COLLAPSED STRIP VIEW */
                                        <div className="relative z-10 h-full flex flex-col justify-between">
                                            <span className="font-serif text-2xl text-[#C9A961]/40 font-light">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>

                                            {/* Vertical Project Title on Desktop */}
                                            <div className="hidden lg:block my-auto">
                                                <h4 className="font-serif text-lg text-white font-light whitespace-nowrap -rotate-90 origin-left translate-y-12">
                                                    {project.title}
                                                </h4>
                                            </div>

                                            {/* Horizontal Title on Mobile */}
                                            <div className="block lg:hidden">
                                                <h4 className="font-serif text-xl text-white font-light">
                                                    {project.title}
                                                </h4>
                                                <span className="text-[#C9A961] text-xs font-light block">
                                                    {project.location}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
