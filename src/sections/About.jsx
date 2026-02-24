import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionMarker from '../components/SectionMarker';
import ScrollReveal from '../components/ScrollReveal';

/**
 * About — Asymmetric layout with large pull quote, real podiatry image,
 * overlapping text card, and parallax depth.
 */
export default function About() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-28 md:py-40 bg-gray-100"
            data-cursor-theme="light"
            aria-labelledby="about-heading"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <SectionMarker number="02" label="Philosophy" />

                {/* Pull Quote */}
                <ScrollReveal>
                    <blockquote className="max-w-4xl mb-20 md:mb-28">
                        <p className="text-3xl md:text-5xl lg:text-[4rem] font-bold leading-tight tracking-tight text-black">
                            &ldquo;We believe every step should be
                            <span className="italic font-light"> pain-free</span>,
                            every patient
                            <span className="italic font-light"> heard</span>,
                            and every treatment
                            <span className="italic font-light"> evidence-based</span>.&rdquo;
                        </p>
                    </blockquote>
                </ScrollReveal>

                {/* Asymmetric Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
                    {/* Image Column */}
                    <motion.div
                        className="lg:col-span-5 lg:col-start-1 relative"
                        style={{ y: imageY }}
                    >
                        <div className="relative aspect-[3/4] overflow-hidden border-2 border-black">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                                alt="Podiatrist performing a detailed foot examination with professional medical equipment"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Decorative offset frame */}
                        <div
                            className="absolute top-4 left-4 w-full h-full border-2 border-black -z-10"
                            aria-hidden="true"
                        />
                    </motion.div>

                    {/* Text Column — overlaps image */}
                    <div className="lg:col-span-6 lg:col-start-6 lg:-ml-12 lg:mt-20 relative z-10">
                        <ScrollReveal delay={0.2}>
                            <div className="bg-white p-8 md:p-12 border-2 border-black">
                                <h2
                                    id="about-heading"
                                    className="text-2xl md:text-[3rem] md:leading-tight font-bold uppercase tracking-tight mb-6"
                                >
                                    Our Approach
                                </h2>

                                <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                                    <p>
                                        At Macarthur Podiatry Group, we combine cutting-edge biomechanical analysis
                                        with compassionate, patient-centred care. Every treatment plan is
                                        personalised — because no two feet are the same.
                                    </p>
                                    <p>
                                        From ingrown toenail surgery to custom orthotic fitting, sports
                                        injury rehabilitation to diabetic foot screening — our clinicians
                                        deliver excellence at every visit.
                                    </p>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200">
                                    {[
                                        { num: '15+', label: 'Years' },
                                        { num: '10K', label: 'Patients' },
                                        { num: '98%', label: 'Satisfaction' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-3xl md:text-4xl font-black text-black">{stat.num}</div>
                                            <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Small inline image below the text card */}
                        <ScrollReveal delay={0.4}>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="aspect-[4/3] overflow-hidden border-2 border-black">
                                    <img
                                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
                                        alt="Custom orthotic insoles being crafted for a patient"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="aspect-[4/3] overflow-hidden border-2 border-black">
                                    <img
                                        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80"
                                        alt="Close-up of a patient walking after successful podiatric treatment"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
