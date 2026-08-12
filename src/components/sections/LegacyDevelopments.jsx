import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Building2, Landmark, CheckCircle2, Award, ArrowUpRight, Shield } from 'lucide-react';

// SYS Projects Images
import oliveResidencyImg from '../../assets/images/projects/olive_residency.png';
import krishnaFarmlandImg from '../../assets/images/projects/krishna_farmland.png';
import golfCourseCommImg from '../../assets/images/projects/golf_course_commercial.png';
import pratibhaTowerImg from '../../assets/images/projects/pratibha_tower_2.png';
import mukteshwarVillasImg from '../../assets/images/projects/mukteshwar_villas.png';
import greenwoodCityImg from '../../assets/images/projects/d13_greenwood_city.png';
import dwarkaExpCommImg from '../../assets/images/projects/dwarka_expressway_commercial.png';
import mannatFarmImg from '../../assets/images/projects/mannat_farm.png';

// Builder Floor Portfolio Images (Page 8)
import builderFloor1 from '../../assets/images/projects/builder_floor_1.png';
import builderFloor2 from '../../assets/images/projects/builder_floor_2.png';
import builderFloor3 from '../../assets/images/projects/builder_floor_3.png';
import builderFloor4 from '../../assets/images/projects/builder_floor_4.png';
import builderFloor5 from '../../assets/images/projects/builder_floor_5.png';

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
    const [activeTab, setActiveTab] = useState('sys'); // 'sys' or 'nb'

    const sysProjects = [
        {
            title: "Olive Residency",
            location: "Sector 57, Gurgaon",
            category: "Luxury Row Housing & Builder Floors",
            desc: "Bespoke luxury row houses crafted with architectural precision and high-spec interiors.",
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
            title: "Central Research Facility Centre for IIT Delhi",
            location: "Sonipat, Haryana",
            category: "Institutional Milestone",
            desc: "Advanced research infrastructure facility engineered & constructed in-house for IIT Delhi.",
            badge: "Executed for Others",
            image: iitDelhiImg
        },
        {
            title: "Gurugram Global Heights School",
            location: "Gurugram",
            category: "Educational Campus",
            desc: "Modern K-12 institutional school building with academic & sports infrastructure.",
            badge: "Executed for Others",
            image: globalHeightsImg
        },
        {
            title: "IT Building, Gulf Adiba",
            location: "Industrial Area, Gurugram",
            category: "IT Park & Commercial Building",
            desc: "High-spec IT workspace built for international corporate operations.",
            badge: "Executed for Others",
            image: gulfAdibaImg
        },
        {
            title: "DJ Lifestyle & Hospitality Pvt. Ltd.",
            location: "Gurugram",
            category: "Hospitality & Commercial Infrastructure",
            desc: "Turnkey structural execution for premium lifestyle and hospitality enterprise.",
            badge: "Executed for Others",
            image: djLifestyleImg
        },
        {
            title: "MMTC-PAMP India Private Limited",
            location: "Haryana",
            category: "Precious Metals Refinery",
            desc: "High-security industrial manufacturing facility for India's premier gold refinery.",
            badge: "Executed for Others",
            image: mmtcPampImg
        },
        {
            title: "BML Munjal University",
            location: "Haryana",
            category: "University Campus & Hostels",
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
        },
        {
            title: "Maharishi Vidya Mandir Schools",
            location: "25+ Locations Across India",
            category: "National Institutional Footprint",
            desc: "Constructed over 25 school campuses nationwide between 1992 and 2001.",
            badge: "Pan-India Legacy",
            image: null
        }
    ];

    const currentProjects = activeTab === 'sys' ? sysProjects : nbProjects;

    return (
        <section id="legacy-developments" className="relative bg-[#F6F4F0] py-20 md:py-32 overflow-hidden border-t border-[#8A6E4B]/15">
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-4">
                            Track Record & Portfolio
                        </span>
                        <h2 className="font-serif text-[#1C1C1C] text-4xl md:text-6xl font-light leading-[1.05] tracking-tight mb-6">
                            Delivered <span className="text-[#8A6E4B]">Landmarks</span>
                        </h2>
                        <p className="text-[#5E5E5E] text-base md:text-xl font-light leading-relaxed">
                            "We built for others, long before we built for ourselves." Explore three decades of execution excellence across Group developments and third-party institutional projects.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-white p-1.5 border border-[#8A6E4B]/20 shadow-sm">
                        <button
                            onClick={() => setActiveTab('sys')}
                            className={`flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeTab === 'sys'
                                    ? 'bg-[#8A6E4B] text-white shadow-md'
                                    : 'text-[#1C1C1C]/70 hover:text-[#8A6E4B]'
                            }`}
                        >
                            <Building2 size={16} />
                            <span>SYS Developers Projects</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('nb')}
                            className={`flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeTab === 'nb'
                                    ? 'bg-[#8A6E4B] text-white shadow-md'
                                    : 'text-[#1C1C1C]/70 hover:text-[#8A6E4B]'
                            }`}
                        >
                            <Landmark size={16} />
                            <span>NB Constructions (Executed for Others)</span>
                        </button>
                    </div>
                </div>

                {/* Subtitle Banner */}
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A6E4B]">
                        {activeTab === 'sys' 
                            ? 'Bespoke Residential, Commercial & Farmland Developments' 
                            : 'Executed for Others. Engineered In-House.'}
                    </span>
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {currentProjects.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-[#8A6E4B]/15 p-5 flex flex-col justify-between hover:border-[#8A6E4B] hover:shadow-xl transition-all duration-500 group"
                            >
                                <div>
                                    {/* Project Image Banner */}
                                    <div className="relative aspect-[16/10] overflow-hidden mb-4 rounded border border-[#8A6E4B]/15 bg-[#F6F4F0]">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-[#8A6E4B]/5 text-[#8A6E4B] text-xs font-serif italic">
                                                {project.title}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center mb-3">
                                        <span className="px-2.5 py-1 bg-[#F6F4F0] text-[#8A6E4B] text-[10px] font-bold uppercase tracking-wider border border-[#8A6E4B]/20">
                                            {project.badge}
                                        </span>
                                        <CheckCircle2 size={16} className="text-[#8A6E4B]" />
                                    </div>

                                    <h3 className="font-serif text-xl text-[#1C1C1C] font-normal mb-1 group-hover:text-[#8A6E4B] transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="block text-[11px] font-medium text-[#8A6E4B] uppercase tracking-wider mb-3">
                                        {project.location}
                                    </span>
                                    <p className="text-[#5E5E5E] text-xs leading-relaxed font-light mb-4">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#F6F4F0] flex justify-between items-center text-[11px] text-[#5E5E5E]/80">
                                    <span>{project.category}</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#8A6E4B]" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>


            </div>
        </section>
    );
}
