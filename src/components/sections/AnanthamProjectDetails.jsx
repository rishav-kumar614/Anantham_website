import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import land3 from '../../assets/images/land3.jpg';

// PDF Presentation Visual Assets
import masterplanImg from '../../assets/images/projects/anantham_88_masterplan.png';
import gateDiagramImg from '../../assets/images/projects/gate_6channel_diagram.png';
import stiltDiagramImg from '../../assets/images/projects/stilt_plot_layout_diagram.png';
import infraImg from '../../assets/images/projects/underground_infra.png';
import clubhouseImg from '../../assets/images/projects/clubhouse_render.jpeg';
import clubhouseMainImg from '../../assets/images/projects/clubhouse_main_render.png';
import sportsImg from '../../assets/images/projects/outdoor_sports_render.png';
import road12mImg from '../../assets/images/projects/road_12m_render.png';
import frontage75mImg from '../../assets/images/projects/frontage_75m_render.png';

// Theme Parks Renders (Page 26)
import parkMeditationImg from '../../assets/images/projects/park_meditation.png';
import parkTeenagerImg from '../../assets/images/projects/park_teenager.png';
import parkChildrenImg from '../../assets/images/projects/park_children.png';
import parkPetImg from '../../assets/images/projects/park_pet.png';
import parkForestImg from '../../assets/images/projects/park_forest.jpeg';

import { 
    ShieldCheck, 
    Layers, 
    Car, 
    TreePine, 
    Zap, 
    Maximize2, 
    Check, 
    ArrowRight, 
    Sparkles, 
    Compass, 
    DoorOpen, 
    Waves, 
    Trophy,
    Home,
    Wifi,
    GraduationCap,
    Heart
} from 'lucide-react';

export default function AnanthamProjectDetails() {
    const [activeTab, setActiveTab] = useState('gate');

    const projectSpecs = [
        { label: "Total Township", value: "20 Acres", sub: "DDJAY" },
        { label: "Plot Count", value: "330 Plots", sub: "Exclusive Limited Release" },
        { label: "Plot Sizes", value: "140 - 180 sq yd", sub: "Versatile Villa Layouts" },
        { label: "Plot Frontage", value: "Above 7.5 m (25 ft)", sub: "Dual Car Lanes + Service Strip" },
        { label: "Main Trunk Road", value: "12 Meters", sub: "20-Year Growth Design" },
        { label: "Internal Roads", value: "9 Meters", sub: "100% Paver-Built" },
        { label: "Gate Innovation", value: "6 Channels / 3 Gates", sub: "Zero Congestion Access" },
        { label: "Clubhouse", value: "15,000 Sq Ft", sub: "Pool & Banquet Facilities" }
    ];

    const gateChannels = [
        { id: "01", title: "Resident In", desc: "Dedicated lane with automated access." },
        { id: "02", title: "Visitor In", desc: "Security-verified, logged entry." },
        { id: "03", title: "Pedestrian In", desc: "Safe footpath-level entry." },
        { id: "04", title: "Delivery In", desc: "Separate lane with guard check room." },
        { id: "05", title: "Vehicle Out", desc: "Unobstructed outward lane." },
        { id: "06", title: "Pedestrian Out", desc: "Illuminated safe exit for walkers." }
    ];

    const themeParks = [
        { name: "Meditation & Wellness Park", desc: "Zen spaces with fruit-bearing trees.", image: parkMeditationImg },
        { name: "Teenager Sports Zone", desc: "For young adults to engage & socialize.", image: parkTeenagerImg },
        { name: "Children's Adventure Play", desc: "Safe cushioned equipment for all ages.", image: parkChildrenImg },
        { name: "Pet Park & Run", desc: "Clean enclosed green spaces for pets.", image: parkPetImg },
        { name: "Forest & Sculpture Park", desc: "Shaded tree canopy with stone installations.", image: parkForestImg }
    ];

    const infraList = [
        { icon: Zap, title: "Underground Power", desc: "All cables pre-laid. Zero overhead wires." },
        { icon: Layers, title: "Pre-Mapped Sewerage", desc: "Sub-surface drainage mapped at design stage." },
        { icon: Wifi, title: "Fiber Internet Ready", desc: "Pre-installed conduits for instant home connection." },
        { icon: Waves, title: "Zero Waterlogging", desc: "Road gradient & U-drains for heavy rainfall management." }
    ];

    return (
        <section id="anantham-88" className="relative bg-[#0A0A0A] text-white py-24 md:py-32 overflow-hidden border-t border-white/10">
            {/* Cinematic background gradient */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A961]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#8A6E4B]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full mb-6">
                            <Sparkles size={14} className="text-[#C9A961]" />
                            <span className="text-[#C9A961] text-[11px] uppercase tracking-[0.3em] font-bold">
                                Flagship Township · DDJAY
                            </span>
                        </div>

                        <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-6">
                            ANANTHAM <span className="text-[#C9A961]">88</span>
                        </h2>
                        <p className="text-white/60 text-base font-light max-w-2xl mx-auto">
                            Sector 88, Sonipat · 20 acres · 330 plots · 140–180 sq yd · 1 km to NH-44.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Township 3D Masterplan Render Visual - Page 20 */}
                <div className="relative aspect-[21/9] overflow-hidden border border-white/15 mb-20 group rounded-lg">
                    <img
                        src={masterplanImg}
                        alt="Anantham 88 Plotted Township 3D Masterplan Render"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        onError={(e) => { e.currentTarget.src = land3; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
                        <div>
                            <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.3em] font-bold block mb-1">
                                Official Masterplan Visual Render
                            </span>
                            <h3 className="font-serif text-2xl text-white font-light">Anantham 88 · Sector 88, Sonipat</h3>
                        </div>
                        <div className="px-4 py-2 bg-black/70 border border-[#C9A961]/40 text-[#C9A961] text-xs font-bold uppercase tracking-wider">
                            1 km Direct Link to NH-44
                        </div>
                    </div>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
                    {projectSpecs.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="bg-white/5 border border-white/10 p-5 md:p-6 hover:border-[#C9A961]/50 transition-colors group"
                        >
                            <span className="block font-serif text-xl md:text-3xl text-[#C9A961] mb-1 font-light">
                                {spec.value}
                            </span>
                            <span className="block text-[10px] font-semibold text-white uppercase tracking-wider">
                                {spec.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Gate Channels Innovation (Page 25) */}
                <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-14 mb-24">
                    <div className="max-w-3xl mb-12">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
                            Traffic Flow Architecture
                        </span>
                        <h3 className="font-serif text-3xl md:text-5xl font-light mb-4">
                            Six Channels Across Three Gates.
                        </h3>
                        <p className="text-white/60 text-sm font-light">
                            3 gates, 6 channels — resident, visitor, pedestrian, delivery, vehicle-out &amp; pedestrian-out. Zero congestion guaranteed.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                            {gateChannels.map((channel) => (
                                <div key={channel.id} className="p-5 bg-white/5 border border-white/10 hover:border-[#C9A961]/40 transition-colors">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-[#C9A961]">{channel.id}</span>
                                        <DoorOpen size={16} className="text-[#C9A961]" />
                                    </div>
                                    <h4 className="text-sm font-semibold text-white mb-1">{channel.title}</h4>
                                    <p className="text-xs text-white/50 leading-relaxed font-light">{channel.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Gate 6-Channel Visual Diagram - Page 25 */}
                        <div className="lg:col-span-6">
                            <div className="relative aspect-[4/3] overflow-hidden border border-[#C9A961]/30 rounded-lg group">
                                <img
                                    src={gateDiagramImg}
                                    alt="Anantham 88 6-Channel 3-Gate Entry Architecture Diagram"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold block">
                                        Page 25 Gate Architecture Diagram
                                    </span>
                                    <span className="text-xs text-white/80 font-light">
                                        6 Channels across 3 Gates + Shaded School Bus Waiting Lounge
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* School Bus Waiting Area Callout */}
                    <div className="mt-8 p-4 bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center gap-4">
                        <ShieldCheck size={24} className="text-[#C9A961] flex-shrink-0" />
                        <div>
                            <span className="text-xs font-bold text-[#C9A961] uppercase tracking-wider block">Shaded Parent & School Bus Lounge</span>
                            <span className="text-xs text-white/70 font-light">Dedicated safe waiting area for children and parents before morning school bus pickup.</span>
                        </div>
                    </div>
                </div>

                {/* 7.5m Frontage & Road Specifications (Page 24 & 28) */}
                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    {/* Road Specifications */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col justify-between">
                        <div>
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
                                Road Network Engineering
                            </span>
                            <h3 className="font-serif text-3xl text-white font-light mb-6">
                                Every Width Has a Reason.
                            </h3>

                            {/* Page 24 Road 3D Render */}
                            <div className="relative aspect-[16/9] overflow-hidden border border-white/10 rounded-lg mb-6 group">
                                <img
                                    src={road12mImg}
                                    alt="Anantham 88 12m Main Trunk Road Render"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-3 left-3 right-3">
                                    <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold block">
                                        Page 24 Road Architecture Render
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 border border-white/10">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-white">12 Meter Main Trunk Road</h4>
                                        <span className="text-xs text-[#C9A961] font-bold">Primary Axis</span>
                                    </div>
                                    <p className="text-xs text-white/60 font-light">Main access spine. Built for 20 years of growth.</p>
                                </div>

                                <div className="p-4 bg-white/5 border border-white/10">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-white">9 Meter Internal Roads</h4>
                                        <span className="text-xs text-[#C9A961] font-bold">Uniform Width</span>
                                    </div>
                                    <p className="text-xs text-white/60 font-light">Generous 9m width for seamless two-way passing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frontage & Stilt Advantage */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-10">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
                            Villa & Builder Floor Engineering
                        </span>
                        <h3 className="font-serif text-3xl text-white font-light mb-6">
                            Above 7.5 Meters — The Magical Frontage.
                        </h3>

                        {/* Stilt Layout Visual Diagram - Page 28 */}
                        <div className="relative aspect-[16/9] overflow-hidden border border-white/10 rounded-lg mb-6 group">
                            <img
                                src={stiltDiagramImg}
                                alt="Plot & Stilt 7.5m Frontage & 2m x 5m Parking Layout Diagram"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-3 left-3 right-3">
                                <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold block">
                                    Page 28 Plot & Stilt Architectural Plan
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs leading-relaxed font-light mb-6">
                            A minimum plot frontage of 7.5m (25 ft) guarantees optimal structural planning for independent floor end-users:
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Car size={18} className="text-[#C9A961] flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Dual Clear Car Parking Lanes</h4>
                                    <p className="text-xs text-white/50 leading-relaxed font-light">Two 2m x 5m parking bays side-by-side without blocking building entry.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Maximize2 size={18} className="text-[#C9A961] flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-semibold text-white">3.5m Dedicated Service Strip</h4>
                                    <p className="text-xs text-white/50 leading-relaxed font-light">Space for staircase, lift well, store room, and cycle/bike parking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Underground Infrastructure */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 flex flex-col justify-center h-full">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Sub-Surface Excellence
                            </span>
                            <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">
                                Clean Above. Complete Below.
                            </h3>
                            <p className="text-white/60 text-sm font-light mb-6">
                                All trunk cabling, sewerage, fiber conduits, and U-drains pre-laid beneath paver roads. No overhead wires. No open drains.
                            </p>

                            <div className="space-y-3">
                                {infraList.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <item.icon size={16} className="text-[#C9A961] flex-shrink-0" />
                                        <span className="text-xs font-semibold text-white">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Infrastructure Visual Render - Page 29 */}
                        <div className="lg:col-span-7">
                            <div className="relative aspect-[16/9] overflow-hidden border border-white/10 rounded-lg group">
                                <img
                                    src={infraImg}
                                    alt="Clean Above. Complete Below. Underground Infrastructure Render"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Theme Parks Visual Gallery (Page 26 Renders) */}
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 mb-24">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                            Page 26 Masterplan Renders
                        </span>
                        <h3 className="font-serif text-3xl md:text-5xl text-white font-light mb-4">
                            Five Theme-Based Parks
                        </h3>
                        <p className="text-white/60 text-sm font-light">
                            Each theme park is crafted with specialized landscaping, native foliage, and age-specific recreational zones.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {themeParks.map((park, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-3 hover:border-[#C9A961]/50 transition-all duration-300 group">
                                <div className="relative aspect-[4/3] overflow-hidden rounded mb-3 border border-white/10">
                                    <img
                                        src={park.image}
                                        alt={park.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-xs font-bold text-white mb-1 leading-snug">{park.name}</h4>
                                <p className="text-[11px] text-white/50 font-light leading-relaxed">{park.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clubhouse & Sports Facilities (Page 27 & 30) */}
                <div className="bg-gradient-to-r from-[#1C1C1C] to-black border border-white/10 p-8 md:p-14">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-3">
                                Lifestyle & Recreation
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white font-light mb-6">
                                15,000 Sq Ft Flagship Club House
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-light mb-8">
                                A glass-forward social sanctuary featuring a swimming pool, banquet spaces, multi-sport courts, and expansive indoor lounges.
                            </p>

                            {/* Main Clubhouse Render (Page 27) */}
                            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 rounded-lg group mb-6">
                                <img
                                    src={clubhouseMainImg}
                                    alt="15,000 Sq Ft Flagship Clubhouse Official 3D Render"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 text-[10px] text-[#C9A961] font-bold uppercase tracking-wider">
                                    Page 27 Clubhouse Architecture Render
                                </div>
                            </div>

                            {/* Greenery & Security - Page 30 */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-white/5 border border-white/10 p-3 text-center">
                                    <TreePine size={16} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-[10px] font-bold text-white">Fruit-Bearing Trees</span>
                                    <span className="block text-[9px] text-white/40">Throughout township</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-3 text-center">
                                    <ShieldCheck size={16} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-[10px] font-bold text-white">3-Tier Security</span>
                                    <span className="block text-[9px] text-white/40">Gate · Patrol · CCTV</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-3 text-center">
                                    <Layers size={16} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-[10px] font-bold text-white">Managed Upkeep</span>
                                    <span className="block text-[9px] text-white/40">Professional maintenance</span>
                                </div>
                            </div>
                        </div>

                        {/* Clubhouse & Sports Facility Visual Renders - Page 30 */}
                        <div className="bg-white/5 p-8 border border-[#C9A961]/30">
                            <span className="text-[#C9A961] text-xs uppercase tracking-widest font-bold block mb-4">
                                Sports & Wellness Amenities
                            </span>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 rounded group">
                                    <img
                                        src={clubhouseImg}
                                        alt="Anantham 15,000 Sq Ft Clubhouse Render"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-[9px] text-[#C9A961] font-bold uppercase">
                                        15,000 Sq Ft Club
                                    </div>
                                </div>
                                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 rounded group">
                                    <img
                                        src={sportsImg}
                                        alt="Outdoor Sports Facilities Render"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-[9px] text-[#C9A961] font-bold uppercase">
                                        Sports Courts
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-center">
                                <div className="p-3 bg-white/5 border border-white/10">
                                    <Trophy size={18} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-xs font-bold text-white">Cricket Nets</span>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10">
                                    <Trophy size={18} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-xs font-bold text-white">Pickleball Court</span>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10">
                                    <Trophy size={18} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-xs font-bold text-white">Tennis Court</span>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10">
                                    <Waves size={18} className="text-[#C9A961] mx-auto mb-1" />
                                    <span className="block text-xs font-bold text-white">Swimming Pool</span>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full mt-6 py-4 bg-[#C9A961] text-black uppercase tracking-[0.25em] text-xs font-bold hover:bg-white transition-colors duration-300"
                            >
                                Request E-Brochure & Site Visit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
