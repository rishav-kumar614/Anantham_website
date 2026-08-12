import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import demandShiftVisual from '../../assets/images/projects/demand_shift_family.png';
import sonipatGrowthHero from '../../assets/images/projects/sonipat_growth_hero.png';
import { 
    Factory, 
    GraduationCap, 
    Sprout, 
    Navigation, 
    Clock, 
    TrendingUp, 
    Users, 
    MapPin, 
    Building2, 
    Compass, 
    CheckCircle2 
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
                { code: "NH-44", desc: "The main Delhi–Chandigarh arterial axis (Sonipat sits directly on it)" },
                { code: "NH-334B", desc: "Sonipat to Rohtak — West-bound industrial manufacturing corridor" },
                { code: "NH-352A", desc: "Sonipat to Gohana / Jind — North-West regional reach" },
                { code: "NH-709", desc: "Sonipat to Baghpat / Shamli — Eastern NCR access" }
            ]
        },
        {
            category: "Expressways & Transit",
            routes: [
                { code: "KMP Expressway", desc: "Kundli–Manesar–Palwal — NCR's outer ring orbital west arc" },
                { code: "KGP Expressway", desc: "Kundli–Ghaziabad–Palwal — NCR's outer ring orbital east arc" },
                { code: "UER-II Expressway", desc: "Urban Extension Road II — Direct seamless link to Dwarka & Gurgaon" },
                { code: "Metro & RRTS Transit", desc: "Operational Metro to Kundli & upcoming Delhi-Panipat RRTS Corridor" }
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
        <section id="why-sonipat" className="relative bg-[#F6F4F0] py-20 md:py-28 overflow-hidden border-t border-[#8A6E4B]/15">
            {/* Subtle background graphics */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: `radial-gradient(#1C1C1C 1px, transparent 0)`,
                backgroundSize: '32px 32px'
            }} />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8A6E4B]/10 border border-[#8A6E4B]/20 rounded-full mb-6">
                            <Compass size={14} className="text-[#8A6E4B]" />
                            <span className="text-[#8A6E4B] text-[11px] uppercase tracking-[0.3em] font-bold">
                                Location Intelligence
                            </span>
                        </div>

                        <h2 className="font-serif text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6">
                            Why <span className="text-[#8A6E4B]">Sonipat</span>?
                        </h2>
                        <p className="text-[#5E5E5E] text-sm font-light">
                            15 lakh+ population · 6 national highways · 3 economic engines driving organic demand.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Page 14 Sonipat Growth Hero Visual Banner */}
                <div className="relative aspect-[21/9] overflow-hidden border border-[#8A6E4B]/20 rounded-lg mb-16 shadow-md group">
                    <img
                        src={sonipatGrowthHero}
                        alt="Sonipat Strategic Growth Corridor Panoramic View"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row justify-between items-start md:items-end">
                        <div>
                            <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.3em] font-bold block mb-1">
                                Northern NCR Strategic Growth Belt · Page 14
                            </span>
                            <h3 className="font-serif text-2xl font-light text-white">Direct Expansion Zone of Delhi</h3>
                        </div>
                        <span className="text-white/70 text-xs font-light">NH-44 · KMP Expressway · RRTS Corridor</span>
                    </div>
                </div>

                {/* Macro Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
                    {macroStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white p-6 md:p-8 border border-[#8A6E4B]/15 shadow-sm text-center group hover:border-[#8A6E4B] transition-colors duration-300"
                        >
                            <span className="block font-serif text-3xl md:text-4xl text-[#8A6E4B] font-light mb-2">
                                {stat.value}
                            </span>
                            <span className="block text-[#1C1C1C] text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
                                {stat.label}
                            </span>
                            <span className="block text-[#5E5E5E]/70 text-[11px]">
                                {stat.subtext}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* 3 Economic Engines Section */}
                <div className="mb-24">
                    <ScrollReveal>
                        <div className="mb-10 text-center md:text-left">
                            <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Economic Foundation
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] font-light">
                                Three Engines · One City
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
                                className="bg-white p-8 border border-[#8A6E4B]/15 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group relative"
                            >
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="font-serif text-3xl text-[#8A6E4B]/20 group-hover:text-[#8A6E4B]/40 transition-colors">
                                        {engine.id}
                                    </span>
                                </div>

                                <div>
                                    <div className="w-12 h-12 rounded-full bg-[#8A6E4B]/10 flex items-center justify-center mb-6 text-[#8A6E4B] group-hover:bg-[#8A6E4B] group-hover:text-white transition-colors duration-300">
                                        <engine.icon size={24} />
                                    </div>

                                    <span className="inline-block px-2.5 py-1 bg-[#F6F4F0] text-[#8A6E4B] text-[10px] uppercase tracking-widest font-bold mb-3 border border-[#8A6E4B]/20">
                                        {engine.badge}
                                    </span>

                                    <h4 className="font-serif text-2xl text-[#1C1C1C] mb-4 font-normal">
                                        {engine.title}
                                    </h4>

                                    <p className="text-[#5E5E5E] text-sm leading-relaxed mb-6 font-light">
                                        {engine.description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-[#F6F4F0]">
                                    <ul className="space-y-2.5">
                                        {engine.highlights.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-xs text-[#1C1C1C] font-medium">
                                                <CheckCircle2 size={14} className="text-[#8A6E4B] flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Connectivity & Drive Times Section */}
                <div className="bg-white border border-[#8A6E4B]/20 p-8 md:p-10 mb-24 shadow-sm">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Seamless Access
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] font-light mb-4">
                                Everything Connects Here.
                            </h3>
                            <p className="text-[#5E5E5E] text-xs font-light mb-6">
                                NH-44, KMP, KGP, UER-II, Metro & RRTS — everything connects here.
                            </p>
                            <div className="space-y-3">
                                {travelTimes.map((t, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-[#F6F4F0] border border-[#8A6E4B]/10">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={14} className="text-[#8A6E4B]" />
                                            <span className="text-xs font-semibold text-[#1C1C1C]">{t.destination}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] text-[#5E5E5E]">{t.distance}</span>
                                            <span className="px-2 py-0.5 bg-[#8A6E4B] text-white text-[10px] font-bold rounded">{t.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {connectivityGrid.map((group, idx) => (
                                <div key={idx}>
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8A6E4B] mb-3">{group.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.routes.map((route, rIdx) => (
                                            <span key={rIdx} className="px-3 py-1.5 bg-[#F6F4F0] border border-[#8A6E4B]/20 text-xs font-semibold text-[#1C1C1C]">
                                                {route.code}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 6 Location Advantage Buckets (Point 8) */}
                <div className="mb-24">
                    <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-4 text-center">
                        Location Advantage · 6 Ecosystem Buckets
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { title: "Education", desc: "IIT Delhi, Ashoka, OP Jindal, BML Munjal" },
                            { title: "Healthcare", desc: "Primus & Multi-speciality Hospitals" },
                            { title: "Connectivity", desc: "1 km to NH-44, KMP/KGP, UER-II, RRTS" },
                            { title: "Lifestyle", desc: "15,000 sq ft Club & Multi-Sport Courts" },
                            { title: "Daily Convenience", desc: "Murthal Hub & High-Street Commerce" },
                            { title: "Nature & Greenery", desc: "Yamuna Basin Water Security & 5 Parks" }
                        ].map((bucket, idx) => (
                            <div key={idx} className="bg-white p-4 border border-[#8A6E4B]/15 text-center shadow-sm hover:border-[#8A6E4B] transition-colors">
                                <span className="block text-xs font-bold text-[#1C1C1C] uppercase tracking-wider mb-1">{bucket.title}</span>
                                <span className="block text-[11px] text-[#5E5E5E] font-light leading-relaxed">{bucket.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Demand Shift Insight */}
                <div className="py-8 relative">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-8">
                            <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-4">
                                Market Insight &amp; Demographics
                            </span>
                            <h3 className="font-serif text-3xl md:text-5xl text-[#1C1C1C] font-light mb-8 leading-tight">
                                The Local Demand Shift is Ready.
                            </h3>

                            <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-[#8A6E4B]/20">
                                {demandShiftPoints.map((item, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <span className="text-[#8A6E4B] font-serif text-2xl">0{idx + 1}.</span>
                                        <h4 className="text-sm font-semibold tracking-wide text-[#1C1C1C]">
                                            {item.title}
                                        </h4>
                                        <p className="text-[#5E5E5E] text-xs leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Demand Shift Family Visual - Page 18 */}
                        <div className="lg:col-span-4">
                            <div className="relative aspect-[3/4] overflow-hidden border border-[#8A6E4B]/30 rounded-lg group">
                                <img
                                    src={demandShiftVisual}
                                    alt="Sonipat Local Demand Shift - Generational Living"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold block">
                                        15 Lakh+ Population
                                    </span>
                                    <span className="text-xs text-white/80 font-light">
                                        End-user demand for quality gated living.
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
