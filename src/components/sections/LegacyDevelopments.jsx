import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Building2, Landmark, ChevronRight, ChevronLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
    const [selectedSysIdx, setSelectedSysIdx] = useState(0);
    const [selectedNbIdx, setSelectedNbIdx] = useState(0);

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
            desc: "Exclusive gated sanctuary offering sprawling farmland estates surrounded by lush nature.",
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
            desc: "Tailored residential villas built with durable structural integrity and premium finishes.",
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
    const selectedIdx = activeTab === 'sys' ? selectedSysIdx : selectedNbIdx;
    const setSelectedIdx = activeTab === 'sys' ? setSelectedSysIdx : setSelectedNbIdx;
    const activeProject = currentProjects[selectedIdx] || currentProjects[0];

    const handleNext = () => {
        setSelectedIdx((prev) => (prev + 1) % currentProjects.length);
    };

    const handlePrev = () => {
        setSelectedIdx((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
    };

    return (
        <section id="legacy-developments" className="relative bg-[#070708] py-24 md:py-36 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[800px] h-[500px] bg-[#C9A961]/[0.03] blur-[180px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold block mb-3">
                            Track Record &amp; Portfolio
                        </span>
                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Delivered <span className="text-[#C9A961] italic font-serif">Landmarks</span>
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                            "We built for others, long before we built for ourselves." Explore three decades of execution excellence.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Filter Tabs — Architectural Minimalist Selector */}
                <div className="flex justify-center mb-14">
                    <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <button
                            onClick={() => {
                                setActiveTab('sys');
                                setSelectedSysIdx(0);
                            }}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                                activeTab === 'sys'
                                    ? 'bg-[#C9A961] text-black shadow-[0_0_20px_rgba(201,169,97,0.3)]'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            <Building2 size={14} />
                            <span>SYS Developers Projects</span>
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('nb');
                                setSelectedNbIdx(0);
                            }}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                                activeTab === 'nb'
                                    ? 'bg-[#C9A961] text-black shadow-[0_0_20px_rgba(201,169,97,0.3)]'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            <Landmark size={14} />
                            <span>NB Constructions (Executed for Others)</span>
                        </button>
                    </div>
                </div>

                {/* EDITORIAL SPLIT SHOWCASE (Left: Large Feature View | Right: Interactive Registry List) */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT COLUMN (7 Cols): Large Cinematic Project Feature */}
                    <div className="lg:col-span-7 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-${selectedIdx}`}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-2xl overflow-hidden aspect-[16/11] border border-white/10 group shadow-2xl"
                            >
                                {/* Background Image */}
                                {activeProject.image ? (
                                    <img
                                        src={activeProject.image}
                                        alt={activeProject.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-black flex items-center justify-center p-12 text-[#C9A961] font-serif text-2xl italic text-center">
                                        {activeProject.title}
                                    </div>
                                )}

                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                                {/* Top Floating Badge */}
                                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                                    <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-[#C9A961]/50 text-[#C9A961] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        {activeProject.badge}
                                    </span>
                                    <span className="text-[#C9A961] text-xs font-mono font-semibold">
                                        {String(selectedIdx + 1).padStart(2, '0')} / {String(currentProjects.length).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Bottom Floating Details */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                                    <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-1">
                                        {activeProject.location}
                                    </span>

                                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-3">
                                        {activeProject.title}
                                    </h3>

                                    <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-xl mb-4">
                                        {activeProject.desc}
                                    </p>

                                    <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                                        <span className="text-white/50 text-xs font-light">
                                            {activeProject.category}
                                        </span>

                                        {/* Prev / Next Controls */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={handlePrev}
                                                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:border-[#C9A961] hover:text-[#C9A961] transition-colors"
                                            >
                                                <ChevronLeft size={16} />
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:border-[#C9A961] hover:text-[#C9A961] transition-colors"
                                            >
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT COLUMN (5 Cols): Interactive Registry List */}
                    <div className="lg:col-span-5 space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="text-[#C9A961] text-[10px] uppercase tracking-[0.3em] font-semibold pb-3 border-b border-white/10 mb-4">
                            Project Portfolio Register ({currentProjects.length})
                        </div>

                        {currentProjects.map((project, idx) => {
                            const isSelected = selectedIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedIdx(idx)}
                                    className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 cursor-pointer border ${
                                        isSelected
                                            ? 'bg-[#C9A961]/10 border-[#C9A961]/50 text-white'
                                            : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05] text-white/70'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-serif text-lg font-light ${
                                            isSelected ? 'text-[#C9A961]' : 'text-white/30 group-hover:text-[#C9A961]/70'
                                        }`}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <h4 className={`font-serif text-base font-light transition-colors ${
                                                isSelected ? 'text-[#C9A961]' : 'text-white group-hover:text-[#C9A961]'
                                            }`}>
                                                {project.title}
                                            </h4>
                                            <span className="text-white/40 text-[11px] font-light block">
                                                {project.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] uppercase tracking-wider text-[#C9A961] font-semibold px-2 py-0.5 rounded border border-[#C9A961]/20 bg-[#C9A961]/5">
                                            {project.badge}
                                        </span>
                                        <ArrowUpRight size={14} className={`transition-transform ${
                                            isSelected ? 'text-[#C9A961] translate-x-0.5 -translate-y-0.5' : 'text-white/20 group-hover:text-[#C9A961]'
                                        }`} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
