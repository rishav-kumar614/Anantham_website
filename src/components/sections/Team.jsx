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

export default function Team() {
    const founders = [
        {
            name: "Mehar Singh",
            role: "Founder & Visionary",
            image: meharSinghImg,
            specialties: ["35+ Years Experience", "Execution-First Pioneer"],
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
            specialties: ["B.Tech NSIT", "MBA ESADE", "CFA Charterholder"],
            credentials: [
                "B.Tech, Netaji Subhash Institute of Technology (NSIT, Delhi)",
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
            role: "Legal Advisor",
            image: shubhamJanghuImg,
            linkedin: "https://www.linkedin.com/in/shubham-janghu/",
            specialties: ["LL.M. Cambridge", "Supreme Court Advocate"],
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
            role: "In-House Principal Designer",
            image: pratibhaMalikImg,
            linkedin: "https://www.linkedin.com/in/pratibha-malik-b036a953/",
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
            desc: "Operational strength and ground-level expertise across the group's ventures."
        },
        {
            name: "Devender Singh",
            role: "Partner",
            image: devenderSinghImg,
            desc: "Decades of industry relationships and project oversight driving reliable execution."
        }
    ];

    const consultants = [
        {
            name: "Sandeep Khera",
            company: "Interact Consultants Pvt. Ltd.",
            role: "Architecture & Landscape Consultancy",
            logo: sandeepKheraLogo,
            desc: "Architecture and landscape consultancy across residential and commercial projects."
        },
        {
            name: "Maansi Saxena",
            company: "landscape architect mesh design",
            role: "Architectural Studio",
            logo: maansiSaxenaLogo,
            desc: "Architectural studio crafting contextual, timeless spaces where built and unbuilt coexist."
        },
        {
            name: "Somnath Behera",
            company: "Behera Associates",
            role: "MEPF Engineering Consultants",
            logo: somnathBeheraLogo,
            desc: "30+ years of MEPF engineering. Code-compliant, sustainable solutions across MEP and fire protection."
        }
    ];

    return (
        <section id="founders" className="relative bg-white overflow-hidden py-20 md:py-32 border-t border-[#8A6E4B]/15">
            {/* Background Texture */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F6F4F0] via-white to-[#F6F4F0]" />
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header - Founders */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                        <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-4">
                            Leadership & Vision
                        </span>
                        <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mb-6" />

                        <h2 className="font-serif text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6">
                            Two Leaders. <span className="text-[#8A6E4B]">One Philosophy.</span>
                        </h2>

                        <p className="text-[#5E5E5E] text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
                            "Vision lays the foundation. Execution builds the legacy." Guided by decades of engineering expertise, legal clarity, and financial discipline.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-20">
                    {founders.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group bg-white border border-[#8A6E4B]/20 p-8 hover:border-[#8A6E4B] hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#8A6E4B]/20 group-hover:border-[#8A6E4B] transition-colors flex-shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="text-center sm:text-left">
                                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                            <h3 className="font-serif text-2xl text-[#1C1C1C] group-hover:text-[#8A6E4B] transition-colors">
                                                {member.name}
                                            </h3>
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8A6E4B] hover:text-[#1C1C1C] transition-colors">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                </a>
                                            )}
                                        </div>

                                        <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.25em] font-bold block mb-3">
                                            {member.role}
                                        </span>

                                        <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-3">
                                            {member.specialties.map((spec, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-[#F6F4F0] text-[#1C1C1C]/80 text-[10px] uppercase tracking-wider font-semibold border border-[#8A6E4B]/15">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[#5E5E5E] text-xs leading-relaxed font-light mb-6">
                                    {member.bio}
                                </p>

                                <div className="space-y-1.5 pt-4 border-t border-[#F6F4F0]">
                                    {member.credentials.map((cred, cIdx) => (
                                        <div key={cIdx} className="flex items-center gap-2 text-[11px] text-[#1C1C1C]/80 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8A6E4B]" />
                                            <span>{cred}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Key Management Team Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                            Executive Leadership & Design
                        </span>
                        <h3 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] font-light">
                            Key Management Team
                        </h3>
                    </div>
                </ScrollReveal>

                {/* Key Management Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-24">
                    {keyManagement.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group bg-white border border-[#8A6E4B]/20 p-8 hover:border-[#8A6E4B] hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#8A6E4B]/20 group-hover:border-[#8A6E4B] transition-colors flex-shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="text-center sm:text-left">
                                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                            <h3 className="font-serif text-2xl text-[#1C1C1C] group-hover:text-[#8A6E4B] transition-colors">
                                                {member.name}
                                            </h3>
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8A6E4B] hover:text-[#1C1C1C] transition-colors">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                                </a>
                                            )}
                                        </div>

                                        <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.25em] font-bold block mb-3">
                                            {member.role}
                                        </span>

                                        <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-3">
                                            {member.specialties.map((spec, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-[#F6F4F0] text-[#1C1C1C]/80 text-[10px] uppercase tracking-wider font-semibold border border-[#8A6E4B]/15">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[#5E5E5E] text-xs leading-relaxed font-light mb-6">
                                    {member.bio}
                                </p>

                                <div className="space-y-1.5 pt-4 border-t border-[#F6F4F0]">
                                    {member.credentials.map((cred, cIdx) => (
                                        <div key={cIdx} className="flex items-center gap-2 text-[11px] text-[#1C1C1C]/80 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8A6E4B]" />
                                            <span>{cred}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Business Partners */}
                <div className="mb-16">
                    <ScrollReveal>
                        <div className="text-center mb-8">
                            <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Business Partners
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[#1C1C1C] font-light">
                                Trusted Allies in Building
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {businessPartners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="bg-white border border-[#8A6E4B]/20 p-6 hover:border-[#8A6E4B] hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#8A6E4B]/30 group-hover:border-[#8A6E4B] transition-colors flex-shrink-0">
                                        {partner.image ? (
                                            <img
                                                src={partner.image}
                                                alt={partner.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#8A6E4B]/10 flex items-center justify-center text-[#8A6E4B] font-serif text-lg font-bold">
                                                {partner.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-xl text-[#1C1C1C] group-hover:text-[#8A6E4B] transition-colors">{partner.name}</h4>
                                        <span className="text-[#8A6E4B] text-[10px] uppercase tracking-[0.25em] font-bold">{partner.role}</span>
                                    </div>
                                </div>
                                <p className="text-[#5E5E5E] text-xs leading-relaxed font-light">{partner.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Corporate HQ Callout - Page 12 */}
                <div className="bg-[#1C1C1C] text-white p-8 md:p-12 mb-16 relative overflow-hidden group border border-[#8A6E4B]/20">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Our Corporate Headquarters
                            </span>
                            <h3 className="font-serif text-2xl md:text-4xl font-light mb-3">
                                Golf Course Road, Gurugram
                            </h3>
                            <p className="text-white/60 text-sm font-light leading-relaxed mb-4">
                                Plot No. 585, Main Golf Course Road, Sector 43, Gurugram, Haryana — The nerve centre of operations for Anantham Projects, SYS Developers LLP, and NB Constructions.
                            </p>
                            <span className="inline-block px-4 py-2 border border-[#C9A961]/40 text-[#C9A961] text-xs uppercase tracking-widest font-bold">
                                Since 2011 · Main Golf Course Road
                            </span>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="relative aspect-[4/3] overflow-hidden border border-[#C9A961]/30 rounded group-hover:border-[#C9A961] transition-colors">
                                <img
                                    src={corporateHqImg}
                                    alt="Corporate HQ Main Golf Course Road Gurugram"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Consultants Grid - Page 7 */}
                <div className="bg-[#F6F4F0] border border-[#8A6E4B]/20 p-8 md:p-12">
                    <ScrollReveal>
                        <div className="text-center mb-10">
                            <span className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-bold block mb-2">
                                Project Execution Partners
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] font-light">
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
                                className="bg-white p-6 border border-[#8A6E4B]/15 flex flex-col justify-between hover:border-[#8A6E4B] hover:shadow-md transition-all duration-300 group"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        {consultant.logo ? (
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#8A6E4B]/20 group-hover:border-[#8A6E4B] transition-colors flex-shrink-0">
                                                <img src={consultant.logo} alt={consultant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-[#8A6E4B]/10 flex items-center justify-center text-[#8A6E4B] font-serif text-lg font-bold flex-shrink-0">
                                                {consultant.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <span className="text-[#8A6E4B] text-[10px] uppercase tracking-[0.2em] font-bold block">
                                                {consultant.role}
                                            </span>
                                            <h4 className="font-serif text-xl text-[#1C1C1C] group-hover:text-[#8A6E4B] transition-colors">
                                                {consultant.name}
                                            </h4>
                                            <span className="block text-xs font-semibold text-[#1C1C1C]/70">
                                                {consultant.company}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-[#5E5E5E] text-xs leading-relaxed font-light">
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
