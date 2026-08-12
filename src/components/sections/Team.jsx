import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

// Founder Images
import meharSinghImg from '../../assets/images/founders/mehar-singh.webp';
import sagarJanghuImg from '../../assets/images/founders/sagar-janghu.webp';
import shubhamJanghuImg from '../../assets/images/founders/Shubham-janghu.jpeg';
import pratibhaMalikImg from '../../assets/images/founders/pratibha-malik.jpeg';
import devenderSinghImg from '../../assets/images/founders/devender-singh.jpeg';
import goldUserAvatar from '../../assets/images/founders/gold_user_avatar.png';
import corporateHqImg from '../../assets/images/projects/corporate_hq.jpeg';

// Consultant Logos
import sandeepKheraLogo from '../../assets/images/projects/sandeep_khera_logo.png';
import maansiSaxenaLogo from '../../assets/images/projects/maansi_saxena_logo.png';
import somnathBeheraLogo from '../../assets/images/projects/somnath_behera_logo.png';

import { 
    Linkedin, 
    Building2, 
    MapPin, 
    Sparkles,
    Check,
    ArrowUpRight
} from 'lucide-react';

export default function Team() {
    const founders = [
        {
            name: "Mehar Singh",
            role: "Founder & Visionary",
            image: meharSinghImg,
            highlight: "35+ Years Civil Construction Mastery",
            bio: "35+ years in civil construction. Founded MR Construction in 1991. The group's execution-first philosophy traces back to him.",
            credentials: [
                "B.A., MD University Rohtak (1987)",
                "Founded MR Construction (1991)",
                "Constructed 25+ Maharishi Vidya Mandir Schools"
            ],
            tags: ["Execution-First", "35+ Yrs Civil"]
        },
        {
            name: "Sagar Janghu",
            role: "Managing Partner",
            image: sagarJanghuImg,
            linkedin: "https://www.linkedin.com/in/sagar-janghu/",
            highlight: "Ex J.P. Morgan Real Estate IB",
            bio: "Ex J.P. Morgan Real Estate IB. Brings financial discipline and strategic direction to Anantham.",
            credentials: [
                "B.Tech, Netaji Subhash Institute of Technology (NSIT)",
                "MBA, ESADE Business School (Top-ranked global school)",
                "CFA Charterholder · Ex J.P. Morgan Real Estate IB",
                "Joint Secretary, GHDA (Gurugram Home Developers Assoc.)"
            ],
            tags: ["Ex J.P. Morgan IB", "CFA Charterholder", "MBA ESADE"]
        }
    ];

    const keyManagement = [
        {
            name: "Shubham Janghu",
            role: "Legal Advisor & Counsel",
            image: shubhamJanghuImg,
            linkedin: "https://www.linkedin.com/in/shubham-janghu/",
            highlight: "LL.M. Cambridge University (UK)",
            bio: "Leads legal strategy, land titling, and compliance — ensuring airtight standing across all acquisitions.",
            credentials: [
                "LL.M., Cambridge University (UK)",
                "Dual-Qualified: England & Wales and India",
                "B.B.A. LL.B., O.P. Jindal Global University",
                "Advocate: Hon'ble Supreme Court & Delhi High Court"
            ],
            tags: ["Supreme Court Advocate", "LL.M. Cambridge"]
        },
        {
            name: "Pratibha Malik",
            role: "Principal Designer & Architect",
            image: pratibhaMalikImg,
            linkedin: "https://www.linkedin.com/in/pratibha-malik-b036a953/",
            highlight: "Spatial Architect & Designer",
            bio: "Drives aesthetic direction and spatial planning across Anantham's residential and plotted communities.",
            credentials: [
                "Principal Architect & Interior Strategist",
                "Luxury Residential & Commercial Specialist",
                "Contextual Design Integration"
            ],
            bioDetails: "Contextual Design Integration across Luxury Residential & Commercial Sectors.",
            tags: ["Architectural Design", "Space Planning"]
        }
    ];

    const businessPartners = [
        {
            name: "Mahavir Singh",
            role: "Partner",
            image: goldUserAvatar,
            desc: "Operational strength and ground-level execution expertise across the group's ventures."
        },
        {
            name: "Devender Singh",
            role: "Partner",
            image: devenderSinghImg,
            desc: "Decades of industry relationships and project oversight driving reliable delivery."
        }
    ];

    const consultants = [
        {
            name: "Sandeep Khera",
            company: "Interact Consultants Pvt. Ltd.",
            role: "Architecture & Landscape",
            logo: sandeepKheraLogo,
            desc: "Architecture & landscape masterplanning for residential & commercial developments."
        },
        {
            name: "Maansi Saxena",
            company: "landscape architect mesh design",
            role: "Architectural Studio",
            logo: maansiSaxenaLogo,
            desc: "Crafting contextual, timeless spaces where built and unbuilt coexist in harmony."
        },
        {
            name: "Somnath Behera",
            company: "Behera Associates",
            role: "MEPF Engineering",
            logo: somnathBeheraLogo,
            desc: "30+ years of MEPF engineering. Code-compliant, sustainable MEP infrastructure."
        }
    ];

    return (
        <section id="founders" className="relative bg-[#0A0B0D] text-white py-28 md:py-40 overflow-hidden">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#C9A961]/10 via-[#C9A961]/5 to-transparent pointer-events-none blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A6E4B]/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Editorial Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-[#C9A961]" />
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold">
                                Leadership &amp; Vision
                            </span>
                            <div className="w-8 h-[1px] bg-[#C9A961]" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8 text-white">
                            Two Leaders. <span className="text-[#C9A961] italic font-serif">One Philosophy.</span>
                        </h2>

                        <p className="text-white/70 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed italic border-l-2 border-[#C9A961] pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0">
                            "Vision lays the foundation. Execution builds the legacy." Guided by decades of engineering expertise, legal clarity, and financial discipline.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ============================================================ */}
                {/* 1. FOUNDERS EDITORIAL MAGAZINE SHOWCASE (NO CARDS!)          */}
                {/* ============================================================ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-36 relative">
                    {/* Vertical Hairline Divider between Founders on Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A961]/25 to-transparent -translate-x-1/2" />

                    {founders.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group flex flex-col md:flex-row lg:flex-col xl:flex-row items-start gap-8 lg:gap-10"
                        >
                            {/* Portrait Artwork Frame */}
                            <div className="relative w-full md:w-56 lg:w-full xl:w-64 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl border border-white/10 group-hover:border-[#C9A961] transition-all duration-700">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                
                                {/* Bottom Floating Highlight Badge */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold">
                                        {member.highlight}
                                    </span>
                                </div>
                            </div>

                            {/* Bio & Details Column */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-serif text-3xl sm:text-4xl text-white font-light group-hover:text-[#C9A961] transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-full text-[#C9A961] hover:text-white transition-colors"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block">
                                        {member.role}
                                    </span>
                                </div>

                                <div className="w-12 h-[1px] bg-[#C9A961]/40" />

                                <p className="text-white/70 text-sm leading-relaxed font-light">
                                    {member.bio}
                                </p>

                                {/* Credentials List */}
                                <div className="space-y-2.5 pt-2">
                                    {member.credentials.map((cred, cIdx) => (
                                        <div key={cIdx} className="flex items-start gap-3 text-xs text-white/80 font-light">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-1.5 flex-shrink-0" />
                                            <span className="leading-snug">{cred}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Minimal Tag Badges */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {member.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase tracking-wider font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ============================================================ */}
                {/* 2. EXECUTIVE MANAGEMENT SECTION (EDITORIAL OPEN GRID)         */}
                {/* ============================================================ */}
                <div className="mb-36 pt-12 border-t border-white/10">
                    <ScrollReveal>
                        <div className="mb-20 text-center sm:text-left">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
                                Executive Leadership &amp; Design
                            </span>
                            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                                Key Management Team
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {keyManagement.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group flex flex-col md:flex-row lg:flex-col xl:flex-row items-start gap-8 lg:gap-10"
                            >
                                {/* Portrait Artwork Frame */}
                                <div className="relative w-full md:w-56 lg:w-full xl:w-64 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl border border-white/10 group-hover:border-[#C9A961] transition-all duration-700">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold">
                                            {member.highlight}
                                        </span>
                                    </div>
                                </div>

                                {/* Bio & Details Column */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light group-hover:text-[#C9A961] transition-colors duration-300">
                                                {member.name}
                                            </h3>
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-full text-[#C9A961] hover:text-white transition-colors"
                                                >
                                                    <Linkedin size={18} />
                                                </a>
                                            )}
                                        </div>
                                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block">
                                            {member.role}
                                        </span>
                                    </div>

                                    <div className="w-12 h-[1px] bg-[#C9A961]/40" />

                                    <p className="text-white/70 text-sm leading-relaxed font-light">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-2.5 pt-2">
                                        {member.credentials.map((cred, cIdx) => (
                                            <div key={cIdx} className="flex items-start gap-3 text-xs text-white/80 font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-1.5 flex-shrink-0" />
                                                <span className="leading-snug">{cred}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {member.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase tracking-wider font-semibold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 3. BUSINESS PARTNERS — LARGE PORTRAIT GRID                   */}
                {/* ============================================================ */}
                <div className="pt-16 border-t border-white/10 mb-24">
                    <ScrollReveal>
                        <div className="flex items-baseline gap-4 mb-12">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.35em] font-semibold">
                                Trusted Allies
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C9A961]/30 to-transparent" />
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-wrap gap-10">
                        {businessPartners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="group flex flex-col items-center gap-3 text-center"
                            >
                                {/* Circular Photo */}
                                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#C9A961] transition-all duration-500 shadow-xl flex-shrink-0">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-base text-white group-hover:text-[#C9A961] transition-colors font-light">{partner.name}</h4>
                                    <span className="text-[#C9A961] text-[10px] uppercase tracking-widest font-bold">{partner.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* ============================================================ */}
                {/* 4. KEY CONSULTANTS — NUMBERED EDITORIAL TABLE                 */}
                {/* ============================================================ */}
                <div className="pt-16 border-t border-white/10 mb-24">
                    <ScrollReveal>
                        <div className="flex items-baseline gap-4 mb-12">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.35em] font-semibold">
                                Project Execution Partners
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C9A961]/30 to-transparent" />
                        </div>
                    </ScrollReveal>

                    <div className="space-y-0">
                        {consultants.map((consultant, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group grid grid-cols-12 items-center gap-6 py-6 border-b border-white/10 hover:border-[#C9A961]/30 transition-colors duration-300 cursor-default"
                            >
                                {/* Index Number */}
                                <div className="col-span-1">
                                    <span className="font-serif text-3xl text-[#C9A961]/25 group-hover:text-[#C9A961]/70 transition-colors duration-300 font-light">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Logo */}
                                <div className="col-span-2">
                                    {consultant.logo ? (
                                        <div className="w-14 h-14 overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#C9A961]/40 transition-colors rounded p-1.5 flex items-center justify-center">
                                            <img
                                                src={consultant.logo}
                                                alt={consultant.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded flex items-center justify-center text-[#C9A961] font-serif text-lg font-bold">
                                            {consultant.name.charAt(0)}
                                        </div>
                                    )}
                                </div>

                                {/* Name & Company */}
                                <div className="col-span-4">
                                    <h4 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#C9A961] transition-colors duration-300 font-light">
                                        {consultant.name}
                                    </h4>
                                    <span className="text-white/50 text-xs font-light">
                                        {consultant.company}
                                    </span>
                                </div>

                                {/* Role Badge */}
                                <div className="col-span-3">
                                    <span className="inline-block px-3 py-1 border border-[#C9A961]/30 group-hover:border-[#C9A961] text-[#C9A961] text-[10px] uppercase tracking-widest font-bold transition-colors duration-300">
                                        {consultant.role}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="col-span-2">
                                    <p className="text-white/50 text-xs font-light leading-relaxed">
                                        {consultant.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 4. CORPORATE HQ EDITORIAL HERO STRIP (NO CARDS!)             */}
                {/* ============================================================ */}
                <div className="pt-16 border-t border-white/10">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <div className="inline-flex items-center gap-2 text-[#C9A961]">
                                <Building2 size={16} />
                                <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                                    Corporate Headquarters
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
                                Main Golf Course Road, Gurugram
                            </h3>

                            <p className="text-white/70 text-sm font-light leading-relaxed">
                                Plot No. 585, Main Golf Course Road, Sector 43, Gurugram, Haryana — The operational nerve center for Anantham Projects, SYS Developers LLP, and NB Constructions.
                            </p>

                            <div className="pt-2">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A961]/10 border border-[#C9A961]/30 text-[#C9A961] text-xs uppercase tracking-wider font-semibold">
                                    <MapPin size={14} />
                                    Since 2011 · Main Golf Course Road Axis
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 group shadow-2xl">
                                <img
                                    src={corporateHqImg}
                                    alt="Corporate HQ Main Golf Course Road Gurugram"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs text-white/80 font-light tracking-wide">
                                        Anantham Corporate Headquarters · Gurugram
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
