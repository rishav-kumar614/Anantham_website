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
    ShieldCheck,
    Users,
    Navigation
} from 'lucide-react';


export default function WhySonipat() {
    const macroStats = [
        { label: "Population", value: "15 Lakh+", subtext: "Fast-growing urban market", icon: Users },
        { label: "National Highways", value: "6", subtext: "Unmatched NCR connectivity", icon: Navigation },
        { label: "Major Universities", value: "5+", subtext: "Education & innovation hub", icon: GraduationCap },
        { label: "Economic Engines", value: "3", subtext: "Industry, Education, Agriculture", icon: Factory }
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

                {/* Macro Stats Strip — Icon-Accented Luxury Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
                    {macroStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C9A961]/50 hover:bg-[#C9A961]/[0.04] transition-all duration-500 shadow-xl"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center text-[#C9A961] mb-3 group-hover:scale-110 group-hover:bg-[#C9A961] group-hover:text-black transition-all duration-500">
                                <stat.icon size={18} />
                            </div>

                            <span className="font-serif text-3xl sm:text-4xl text-[#C9A961] font-light mb-1">
                                {stat.value}
                            </span>

                            <span className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-1">
                                {stat.label}
                            </span>

                            <span className="text-white/50 text-[11px] font-light">
                                {stat.subtext}
                            </span>
                        </motion.div>
                    ))}
                </div>



                {/* 3 Economic Engines — Full-Width Editorial Numbered Strips */}
                <div className="mb-28">
                    <ScrollReveal>
                        <div className="mb-16">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold block mb-3">
                                Economic Foundation
                            </span>
                            <h3 className="font-serif text-4xl sm:text-5xl text-white font-light">
                                Three Engines · <span className="text-[#C9A961] italic">One City</span>
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-0">
                        {economicEngines.map((engine, idx) => (
                            <motion.div
                                key={engine.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-b border-white/[0.07] hover:border-[#C9A961]/30 transition-colors duration-500"
                            >
                                {/* Large Gold Number */}
                                <div className="flex-shrink-0 w-24 text-right hidden md:block">
                                    <span className="font-serif text-6xl lg:text-7xl text-[#C9A961]/15 group-hover:text-[#C9A961]/40 transition-colors duration-500 font-light leading-none select-none">
                                        {engine.id}
                                    </span>
                                </div>

                                {/* Gold accent line */}
                                <div className="hidden md:block w-px self-stretch bg-white/10 group-hover:bg-[#C9A961]/40 transition-colors duration-500" />

                                {/* Icon + Title + Desc */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#C9A961]/10 border border-[#C9A961]/20 flex items-center justify-center text-[#C9A961] group-hover:bg-[#C9A961] group-hover:text-black transition-all duration-500 flex-shrink-0">
                                            <engine.icon size={18} />
                                        </div>
                                        <h4 className="font-serif text-2xl sm:text-3xl text-white font-light group-hover:text-[#C9A961] transition-colors duration-400">
                                            {engine.title}
                                        </h4>
                                    </div>
                                    <p className="text-white/55 text-sm leading-relaxed font-light max-w-md">
                                        {engine.description}
                                    </p>
                                </div>

                                {/* Highlights as inline pills on the far right */}
                                <div className="flex-shrink-0 flex flex-wrap md:flex-col gap-2 md:items-end">
                                    {engine.highlights.map((item, i) => (
                                        <span
                                            key={i}
                                            className="text-[11px] text-white/70 font-light tracking-wide border-b border-white/20 pb-0.5 group-hover:text-[#C9A961] group-hover:border-[#C9A961]/40 transition-colors duration-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
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
