import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import demandShiftVisual from '../../assets/images/projects/demand_shift_family.png';
import sonipatGrowthHero from '../../assets/images/projects/sonipat_growth_hero.png';
import { 
    Factory, 
    GraduationCap, 
    Sprout, 
    Clock, 
    MapPin, 
    Compass, 
    Check,
    Globe2,
    Building2,
    ShieldCheck
} from 'lucide-react';

export default function WhySonipat() {
    const macroStats = [
        { label: "Population", value: "15 Lakh+", subtext: "Fast-growing urban market" },
        { label: "National Highways", value: "6 Highways", subtext: "Unmatched NCR connectivity" },
        { label: "Major Universities", value: "5+ Institutions", subtext: "Education & innovation hub" },
        { label: "Economic Engines", value: "3 Pillars", subtext: "Industry, Education, Agriculture" }
    ];

    const economicEngines = [
        {
            id: "01",
            icon: Factory,
            title: "Industrial Hub",
            description: "IMT Rai, IMT Kharkhoda & Maruti Suzuki driving employment and workforce growth.",
            highlights: ["IMT Rai", "IMT Kharkhoda", "Maruti Suzuki Plant"],
            badge: "Industrial Momentum"
        },
        {
            id: "02",
            icon: GraduationCap,
            title: "Education Capital",
            description: "Ashoka, OP Jindal, Rajiv Gandhi Education City — a year-round student & professional economy.",
            highlights: ["Ashoka University", "OP Jindal Global", "Rajiv Gandhi City"],
            badge: "Education Capital"
        },
        {
            id: "03",
            icon: Sprout,
            title: "Agri & Logistics Hub",
            description: "Yamuna basin water security & Azadpur Mandi relocation making it North India's food logistics center.",
            highlights: ["Yamuna Basin", "Azadpur Mandi", "Food Processing"],
            badge: "Agri & Logistics"
        }
    ];

    const connectivityGrid = [
        {
            category: "National Highways",
            routes: [
                { code: "NH-44", desc: "The main Delhi–Chandigarh arterial axis" },
                { code: "NH-334B", desc: "Sonipat to Rohtak manufacturing corridor" },
                { code: "NH-352A", desc: "Sonipat to Gohana regional reach" },
                { code: "NH-709", desc: "Sonipat to Baghpat Eastern access" }
            ]
        },
        {
            category: "Expressways & Transit",
            routes: [
                { code: "KMP Expressway", desc: "NCR outer ring orbital west arc" },
                { code: "KGP Expressway", desc: "NCR outer ring orbital east arc" },
                { code: "UER-II Expressway", desc: "Direct link to Dwarka & Gurgaon" },
                { code: "RRTS Transit", desc: "Upcoming Delhi-Panipat RRTS Corridor" }
            ]
        }
    ];

    const travelTimes = [
        { destination: "NH-44 Entry", distance: "1 km", duration: "1 min" },
        { destination: "Central Delhi", distance: "~45 km", duration: "45 mins" },
        { destination: "Gurugram", distance: "~60 km", duration: "60 mins" },
        { destination: "IGI Airport", distance: "~65 km", duration: "90 mins" }
    ];

    const demandShiftPoints = [
        {
            title: "Nuclear Family Shift",
            desc: "One joint family drives demand for 3 independent modern homes."
        },
        {
            title: "Local End-User Demand",
            desc: "15 lakh+ residents seeking quality gated living within their own city."
        },
        {
            title: "Wealth Retained Locally",
            desc: "Better connectivity & local commerce keep capital in Sonipat seeking premium real estate."
        }
    ];

    return (
        <section id="why-sonipat" className="relative bg-[#070708] py-24 md:py-36 overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#C9A961]/[0.03] blur-[180px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-[#C9A961] mb-3">
                            <Compass size={14} />
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                                Location Intelligence
                            </span>
                        </div>

                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Why <span className="text-[#C9A961] italic font-serif">Sonipat</span>?
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
                            15 lakh+ population · 6 national highways · 3 economic engines driving organic demand.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Hero Widescreen Panoramic Image Banner — Edge-to-Edge Widescreen */}
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10 mb-20 shadow-2xl group">
                    <img
                        src={sonipatGrowthHero}
                        alt="Sonipat Strategic Growth Corridor Panoramic View"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.3em] font-bold block mb-1">
                                Northern NCR Strategic Growth Belt
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                                Direct Expansion Zone of Delhi
                            </h3>
                        </div>
                        <span className="text-white/70 text-xs font-light tracking-wide bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            NH-44 · KMP Expressway · RRTS Corridor
                        </span>
                    </div>
                </div>

                {/* Macro Stats Strip — Clean Borderless Horizontal Ribbon */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-24 backdrop-blur-sm">
                    {macroStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="text-center p-4 border-r last:border-r-0 border-white/10"
                        >
                            <span className="block font-serif text-3xl sm:text-4xl text-[#C9A961] font-light mb-1">
                                {stat.value}
                            </span>
                            <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-1">
                                {stat.label}
                            </span>
                            <span className="block text-white/40 text-[11px] font-light">
                                {stat.subtext}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* 3 Economic Engines Section — Box-Free Glass Columns */}
                <div className="mb-28">
                    <ScrollReveal>
                        <div className="mb-12 text-center">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
                                Economic Foundation
                            </span>
                            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                                Three Engines · <span className="text-[#C9A961] italic font-serif">One City</span>
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {economicEngines.map((engine, idx) => (
                            <motion.div
                                key={engine.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-[#C9A961]/40 hover:from-[#C9A961]/[0.05] transition-all duration-700"
                            >
                                <div className="absolute top-6 right-8">
                                    <span className="font-serif text-3xl text-[#C9A961]/25 group-hover:text-[#C9A961]/60 transition-colors font-light">
                                        {engine.id}
                                    </span>
                                </div>

                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center mb-6 text-[#C9A961] group-hover:bg-[#C9A961] group-hover:text-black transition-colors duration-500">
                                        <engine.icon size={22} />
                                    </div>

                                    <span className="inline-block px-3 py-1 bg-[#C9A961]/10 border border-[#C9A961]/30 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full mb-3">
                                        {engine.badge}
                                    </span>

                                    <h4 className="font-serif text-2xl text-white mb-3 font-light group-hover:text-[#C9A961] transition-colors">
                                        {engine.title}
                                    </h4>

                                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                        {engine.description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <ul className="space-y-2.5">
                                        {engine.highlights.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-xs text-white/80 font-light">
                                                <div className="w-3.5 h-3.5 rounded-full bg-[#C9A961]/15 border border-[#C9A961]/40 flex items-center justify-center text-[#C9A961] flex-shrink-0">
                                                    <Check size={9} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Seamless Access & Travel Times — Sleek Dark Layout */}
                <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 mb-28 backdrop-blur-md">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
                                Seamless Access
                            </span>
                            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-3">
                                Everything Connects Here.
                            </h3>
                            <p className="text-white/60 text-xs font-light mb-6">
                                NH-44, KMP, KGP, UER-II, Metro &amp; RRTS — everything connects here.
                            </p>
                            <div className="space-y-3">
                                {travelTimes.map((t, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A961]/40 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={15} className="text-[#C9A961]" />
                                            <span className="text-xs font-medium text-white">{t.destination}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[11px] text-white/50">{t.distance}</span>
                                            <span className="px-2.5 py-0.5 bg-[#C9A961] text-black text-[10px] font-bold rounded-full">{t.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-10">
                            {connectivityGrid.map((group, idx) => (
                                <div key={idx}>
                                    <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#C9A961] mb-4">
                                        {group.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {group.routes.map((route, rIdx) => (
                                            <span key={rIdx} className="px-3.5 py-2 bg-white/5 border border-white/10 text-xs font-medium text-white/90 rounded-lg hover:border-[#C9A961]/50 hover:text-[#C9A961] transition-colors">
                                                {route.code}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 6 Location Advantage Buckets */}
                <div className="mb-28">
                    <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-6 text-center">
                        Location Advantage · 6 Ecosystem Buckets
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { title: "Education", desc: "IIT Delhi, Ashoka, OP Jindal" },
                            { title: "Healthcare", desc: "Primus & Multi-speciality Hospitals" },
                            { title: "Connectivity", desc: "1 km to NH-44, KMP/KGP, RRTS" },
                            { title: "Lifestyle", desc: "15,000 sq ft Club & Sports Courts" },
                            { title: "Daily Commerce", desc: "Murthal Hub & High-Street Retail" },
                            { title: "Nature & Greenery", desc: "Yamuna Basin Water & 5 Theme Parks" }
                        ].map((bucket, idx) => (
                            <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/10 text-center hover:border-[#C9A961]/50 hover:bg-[#C9A961]/[0.03] transition-all duration-300">
                                <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">{bucket.title}</span>
                                <span className="block text-[11px] text-white/50 font-light leading-relaxed">{bucket.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Insight & Demographics — Editorial Split */}
                <div className="relative pt-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
                                Market Insight &amp; Demographics
                            </span>
                            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light mb-8 leading-tight">
                                The Local Demand Shift is Ready.
                            </h3>

                            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                                {demandShiftPoints.map((item, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <span className="text-[#C9A961] font-serif text-2xl font-light">0{idx + 1}.</span>
                                        <h4 className="text-sm font-semibold text-white tracking-wide">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/60 text-xs leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Demand Shift Family Visual */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 group shadow-2xl">
                                <img
                                    src={demandShiftVisual}
                                    alt="Sonipat Local Demand Shift - Generational Living"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold block mb-1">
                                        15 Lakh+ Population
                                    </span>
                                    <span className="text-xs text-white/90 font-light">
                                        Organic end-user demand for planned gated communities.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
