import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionMarker from '../components/SectionMarker';
import ScrollReveal from '../components/ScrollReveal';

/**
 * Testimonials — Horizontal scrolling carousel with patient photos,
 * large decorative quote marks, and podiatry-specific stories.
 */

const testimonials = [
    {
        quote:
            "After years of plantar fasciitis, I'd given up on running. Macarthur Podiatry Group's shockwave therapy and custom orthotics changed everything — I completed my first half-marathon pain-free last month.",
        name: 'Sarah Mitchell',
        role: 'Marathon Runner',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
        condition: 'Plantar Fasciitis',
    },
    {
        quote:
            "The biomechanical gait analysis was incredible — they identified an alignment issue that three other practitioners had missed. My new orthotics have eliminated my knee pain completely.",
        name: 'James Thornton',
        role: 'High School Teacher',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
        condition: 'Gait Correction',
    },
    {
        quote:
            "My daughter's flat feet were a real worry. The team made her feel so comfortable during the assessment, and the treatment plan has shown amazing improvement. Her confidence walking and running has soared.",
        name: 'Priya Sharma',
        role: 'Parent',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
        condition: 'Paediatric Flat Feet',
    },
    {
        quote:
            "As a Type 2 diabetic, regular foot checks are critical. Macarthur Podiatry Group gives me thorough screening every visit and caught a nerve issue early. Their preventative care is second to none.",
        name: 'Robert Chen',
        role: 'Retiree, 68',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
        condition: 'Diabetic Foot Care',
    },
    {
        quote:
            "I had an ingrown toenail for months. The nail surgery was quick, virtually painless with the local anaesthetic, and I was back in shoes within a week. Wish I'd come sooner!",
        name: 'Emma Wallace',
        role: 'Nurse',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        condition: 'Ingrown Toenail Surgery',
    },
    {
        quote:
            "Achilles tendinitis was ruining my football season. The tailored rehab program and dry needling at Macarthur Podiatry Group had me back on the pitch in six weeks — stronger than before.",
        name: 'Daniel Okoye',
        role: 'Semi-Pro Footballer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
        condition: 'Achilles Tendinitis',
    },
];

export default function Testimonials() {
    const scrollContainerRef = useRef(null);
    const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section
            id="testimonials"
            className="relative py-28 md:py-40 bg-white overflow-hidden"
            data-cursor-theme="light"
            aria-labelledby="testimonials-heading"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <SectionMarker number="04" label="Testimonials" />

                <ScrollReveal>
                    <h2
                        id="testimonials-heading"
                        className="text-[3rem] md:text-[4rem] leading-tight font-bold uppercase tracking-tight mb-4 max-w-3xl"
                    >
                        Patient Stories
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-lg text-gray-500 font-light max-w-xl mb-12 md:mb-16 leading-relaxed">
                        Real results from real patients. Hear how expert podiatric care
                        transformed their lives — one step at a time.
                    </p>
                </ScrollReveal>
            </div>

            {/* Horizontal Scroll Carousel */}
            <div ref={sectionRef}>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-20 pb-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    role="region"
                    aria-label="Testimonials carousel"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className="snap-start shrink-0 w-[85vw] md:w-[55vw] lg:w-[38vw] border-2 border-black flex flex-col group hover:bg-black hover:text-white transition-colors duration-500"
                            data-cursor-label="Read"
                            initial={{ opacity: 0, x: 60 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.12,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            {/* Top: Condition Tag + Quote */}
                            <div className="p-8 md:p-10 flex-1">
                                {/* Condition badge */}
                                <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold border border-black group-hover:border-white px-3 py-1 mb-6 transition-colors duration-500">
                                    {t.condition}
                                </span>

                                {/* Decorative quote mark */}
                                <span
                                    className="text-[5rem] md:text-[6rem] font-black leading-none text-gray-200 group-hover:text-gray-700 transition-colors duration-500 select-none block -mb-8 -mt-2"
                                    aria-hidden="true"
                                >
                                    &ldquo;
                                </span>

                                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                                    {t.quote}
                                </p>
                            </div>

                            {/* Bottom: Client Info with Photo */}
                            <div className="px-8 md:px-10 pb-8 pt-4 border-t border-gray-200 group-hover:border-gray-700 transition-colors duration-500 flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={`${t.name}, ${t.role}`}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-black group-hover:border-white transition-colors duration-500"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-[0.1em]">
                                        {t.name}
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-[0.15em] text-gray-400 group-hover:text-gray-500 mt-0.5 font-medium"
                                        style={{ fontVariant: 'small-caps' }}
                                    >
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll hint */}
            <ScrollReveal delay={0.5}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-8 flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-black" />
                    <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-gray-400">
                        Drag to explore
                    </span>
                </div>
            </ScrollReveal>
        </section>
    );
}
