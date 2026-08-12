import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import meharSinghImg from '../../assets/images/founders/mehar-singh.webp';
import sagarJanghuImg from '../../assets/images/founders/sagar-janghu.webp';
import shubhamJanghuImg from '../../assets/images/founders/Shubham-janghu.jpeg';
import pratibhaMalikImg from '../../assets/images/founders/pratibha-malik.jpeg';
import devenderSinghImg from '../../assets/images/founders/devender-singh.jpeg';
import goldUserAvatar from '../../assets/images/founders/gold_user_avatar.png';
import corporateHqImg from '../../assets/images/projects/corporate_hq.jpeg';

// Page 7 Consultant ChatGPT Logos
import sandeepKheraLogo from '../../assets/images/projects/sandeep_khera_logo.png';
import maansiSaxenaLogo from '../../assets/images/projects/maansi_saxena_logo.png';
import somnathBeheraLogo from '../../assets/images/projects/somnath_behera_logo.png';

import { 
    Award, 
    GraduationCap, 
    Briefcase, 
    Scale, 
    MapPin, 
    Linkedin, 
    CheckCircle2, 
    Sparkles, 
    Quote,
    Building2,
    ShieldCheck
} from 'lucide-react';

export default function Team() {
    const founders = [
        {
            name: "Mehar Singh",
            role: "Founder & Visionary",
            image: meharSinghImg,
            experienceBadge: "35+ Years Mastery",
            specialties: ["Civil Construction Pioneer", "Execution-First Leadership"],
            credentials: [
                "B.A., MD University Rohtak (1987)",
                "Founded MR Construction (1991)",
                "Constructed 25+ Maharishi Vidya Mandir Schools"
            ],
            bio: "35+ years in civil construction. Founded MR Construction in 1991. The group's execution-first philosophy traces back to him."
        },
        {
            name: "Sagar Janghu",
            role: "Managing Partner",
            image: sagarJanghuImg,
            linkedin: "https://www.linkedin.com/in/sagar-janghu/",
            experienceBadge: "Ex J.P. Morgan Real Estate IB",
            specialties: ["B.Tech NSIT", "MBA ESADE", "CFA Charterholder"],
            credentials: [
                "B.Tech, Netaji Subhash Institute of Technology (NSIT)",
                "MBA, ESADE Business School (Top-ranked global school)",
                "CFA Charterholder · Ex J.P. Morgan Real Estate IB",
                "Joint Secretary, GHDA (Gurugram Home Developers Assoc.)"
            ],
            bio: "Ex J.P. Morgan Real Estate IB. Brings financial discipline and strategic direction to Anantham."
        }
    ];

    const keyManagement = [
        {
            name: "Shubham Janghu",
            role: "Legal Advisor & Counsel",
            image: shubhamJanghuImg,
            linkedin: "https://www.linkedin.com/in/shubham-janghu/",
            experienceBadge: "LL.M. Cambridge (UK)",
            specialties: ["Supreme Court Advocate", "Land Titling Specialist"],
            credentials: [
                "LL.M., Cambridge University (UK)",
                "Dual-Qualified: England & Wales and India",
                "B.B.A. LL.B., O.P. Jindal Global University",
                "Advocate: Hon'ble Supreme Court & Delhi High Court"
            ],
            bio: "Leads legal strategy, land titling, and compliance — ensuring airtight standing across all acquisitions."
        },
        {
            name: "Pratibha Malik",
            role: "Principal Designer & Architect",
            image: pratibhaMalikImg,
            linkedin: "https://www.linkedin.com/in/pratibha-malik-b036a953/",
            experienceBadge: "Spatial Architect",
            specialties: ["Architectural Design", "Space Planning"],
            credentials: [
                "Principal Architect & Interior Strategist",
                "Luxury Residential & Commercial Specialist",
                "Contextual Design Integration"
            ],
            bio: "Drives aesthetic direction and spatial planning across Anantham's residential and plotted communities."
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
            desc: "Architecture and landscape consultancy across residential and commercial masterplans."
        },
        {
            name: "Maansi Saxena",
            company: "landscape architect mesh design",
            role: "Architectural Studio",
            logo: maansiSaxenaLogo,
            desc: "Architectural studio crafting contextual spaces where built and unbuilt coexist seamlessly."
        },
        {
            name: "Somnath Behera",
            company: "Behera Associates",
            role: "MEPF Engineering",
            logo: somnathBeheraLogo,
            desc: "30+ years of MEPF engineering. Code-compliant, sustainable MEP and fire safety systems."
        }
    ];

    return (
        <section id="founders" className="relative bg-[#0D0E11] text-white py-24 md:py-36 overflow-hidden border-t border-white/10">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C9A961]/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8A6E4B]/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-[#C9A961]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Subtle Metallic Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `radial-gradient(#C9A961 1px, transparent 1px)`,
                backgroundSize: '36px 36px'
            }} />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Main Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full mb-6">
                            <Sparkles size={14} className="text-[#C9A961]" />
                            <span className="text-[#C9A961] text-[11px] uppercase tracking-[0.35em] font-bold">
                                Leadership &amp; Vision
                            </span>
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight mb-6 text-white">
                            Two Leaders. <span className="text-[#C9A961] italic">One Philosophy.</span>
                        </h2>

                        <div className="relative max-w-2xl mx-auto bg-white/5 border border-[#C9A961]/20 p-4 md:p-5 rounded-xl backdrop-blur-sm shadow-xl">
                            <Quote size={20} className="text-[#C9A961]/40 absolute top-3 left-4" />
                            <p className="text-white/80 text-sm md:text-base font-light italic leading-relaxed pl-6">
                                "Vision lays the foundation. Execution builds the legacy." Guided by decades of engineering expertise, legal clarity, and financial discipline.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 1. FOUNDERS CARDS (Mehar Singh & Sagar Janghu) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-28">
                    {founders.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#C9A961]/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(201,169,97,0.12)] flex flex-col justify-between"
                        >
                            {/* Top Badge */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                                <span className="px-3 py-1 bg-[#C9A961]/15 border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full">
                                    {member.experienceBadge}
                                </span>
                            </div>

                            <div>
                                {/* Profile Header */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pt-2">
                                    {/* Portrait Frame */}
                                    <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden border-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition-all duration-500 shadow-xl flex-shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Title & Specialties */}
                                    <div className="text-center sm:text-left flex-1">
                                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light group-hover:text-[#C9A961] transition-colors">
                                                {member.name}
                                            </h3>
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all">
                                                    <Linkedin size={14} />
                                                </a>
                                            )}
                                        </div>

                                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.25em] font-bold block mb-3">
                                            {member.role}
                                        </span>

                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                            {member.specialties.map((spec, i) => (
                                                <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 text-[10px] uppercase tracking-wider font-semibold rounded">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Paragraph */}
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light mb-6 bg-black/30 p-3.5 rounded-lg border border-white/5">
                                    {member.bio}
                                </p>

                                {/* Credentials Bullet List */}
                                <div className="space-y-2 pt-2">
                                    {member.credentials.map((cred, cIdx) => (
                                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-light">
                                            <CheckCircle2 size={14} className="text-[#C9A961] flex-shrink-0 mt-0.5" />
                                            <span>{cred}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. EXECUTIVE MANAGEMENT SECTION (Shubham Janghu & Pratibha Malik) */}
                <div className="mb-28">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Executive Leadership &amp; Design
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white font-light">
                                Key Management Team
                            </h3>
                            <div className="w-16 h-[1px] bg-[#C9A961]/40 mx-auto mt-4" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                        {keyManagement.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="group relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#C9A961]/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(201,169,97,0.1)] flex flex-col justify-between"
                            >
                                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                                    <span className="px-3 py-1 bg-[#C9A961]/15 border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full">
                                        {member.experienceBadge}
                                    </span>
                                </div>

                                <div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pt-2">
                                        <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden border-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition-all duration-500 shadow-xl flex-shrink-0">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                        </div>

                                        <div className="text-center sm:text-left flex-1">
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light group-hover:text-[#C9A961] transition-colors">
                                                    {member.name}
                                                </h3>
                                                {member.linkedin && (
                                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all">
                                                        <Linkedin size={14} />
                                                    </a>
                                                )}
                                            </div>

                                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.25em] font-bold block mb-3">
                                                {member.role}
                                            </span>

                                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                                {member.specialties.map((spec, i) => (
                                                    <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 text-[10px] uppercase tracking-wider font-semibold rounded">
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light mb-6 bg-black/30 p-3.5 rounded-lg border border-white/5">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-2 pt-2">
                                        {member.credentials.map((cred, cIdx) => (
                                            <div key={cIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-light">
                                                <CheckCircle2 size={14} className="text-[#C9A961] flex-shrink-0 mt-0.5" />
                                                <span>{cred}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. BUSINESS PARTNERS */}
                <div className="mb-24">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Trusted Allies
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                                Business Partners
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {businessPartners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="bg-white/5 border border-white/10 hover:border-[#C9A961]/50 p-6 rounded-xl transition-all duration-300 group backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition-colors flex-shrink-0">
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-xl text-white group-hover:text-[#C9A961] transition-colors">{partner.name}</h4>
                                        <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.25em] font-bold block">{partner.role}</span>
                                    </div>
                                </div>
                                <p className="text-white/60 text-xs leading-relaxed font-light">{partner.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. CORPORATE HQ CALLOUT */}
                <div className="bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-white/[0.08] border border-white/15 rounded-2xl p-8 md:p-12 mb-24 relative overflow-hidden group shadow-2xl">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full mb-3">
                                <Building2 size={14} className="text-[#C9A961]" />
                                <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.25em] font-bold">
                                    Corporate Headquarters
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
                                Golf Course Road, Gurugram
                            </h3>

                            <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                                Plot No. 585, Main Golf Course Road, Sector 43, Gurugram, Haryana — The operational nerve center for Anantham Projects, SYS Developers LLP, and NB Constructions.
                            </p>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 border border-[#C9A961]/40 text-[#C9A961] text-xs uppercase tracking-widest font-bold rounded-md">
                                <MapPin size={14} />
                                <span>Established Since 2011 · Main Golf Course Road Axis</span>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative aspect-[16/10] overflow-hidden border border-[#C9A961]/40 rounded-xl group-hover:border-[#C9A961] transition-all shadow-xl">
                                <img
                                    src={corporateHqImg}
                                    alt="Corporate HQ Main Golf Course Road Gurugram"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 text-[10px] text-[#C9A961] font-bold uppercase tracking-wider rounded">
                                    Official Headquarters Building
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. KEY CONSULTANTS GRID */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
                    <ScrollReveal>
                        <div className="text-center mb-10">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Project Execution Partners
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white font-light">
                                Key Consultants
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {consultants.map((consultant, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.12 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#C9A961]/50 hover:bg-white/[0.08] transition-all duration-300 group"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        {consultant.logo ? (
                                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A961]/30 group-hover:border-[#C9A961] transition-colors flex-shrink-0">
                                                <img src={consultant.logo} alt={consultant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-[#C9A961]/10 flex items-center justify-center text-[#C9A961] font-serif text-lg font-bold flex-shrink-0">
                                                {consultant.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.2em] font-bold block">
                                                {consultant.role}
                                            </span>
                                            <h4 className="font-serif text-xl text-white group-hover:text-[#C9A961] transition-colors">
                                                {consultant.name}
                                            </h4>
                                            <span className="block text-xs font-semibold text-white/60">
                                                {consultant.company}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-xs leading-relaxed font-light">
                                        {consultant.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
