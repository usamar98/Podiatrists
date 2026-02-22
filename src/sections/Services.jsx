import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionMarker from '../components/SectionMarker';
import ScrollReveal from '../components/ScrollReveal';

/**
 * Services grid — 3 columns with hover color inversion,
 * thick borders, podiatry-specific line icons, and imagery.
 */

const services = [
    {
        title: 'General Podiatry',
        desc: 'Comprehensive foot assessments, nail care, callus and corn treatment. Expert care for everyday foot health.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
        imageAlt: 'Podiatrist examining a patient foot during routine check-up',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4C20 8 14 14 14 22C14 30 18 36 24 44C30 36 34 30 34 22C34 14 28 8 24 4Z" />
                <circle cx="24" cy="22" r="5" />
            </svg>
        ),
    },
    {
        title: 'Biomechanics',
        desc: 'Gait analysis, orthotics prescription, and posture correction. Precision diagnostics for optimal movement.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
        imageAlt: 'Gait analysis and biomechanical assessment of walking pattern',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 40L16 28L24 32L32 20L40 8" />
                <circle cx="16" cy="28" r="2" />
                <circle cx="24" cy="32" r="2" />
                <circle cx="32" cy="20" r="2" />
            </svg>
        ),
    },
    {
        title: 'Sports Injuries',
        desc: 'Return-to-play rehab, shockwave therapy, and sport-specific treatment plans for active lifestyles.',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
        imageAlt: 'Athlete running on a track, representing sports podiatry care',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 36L20 24L28 28L36 12" />
                <path d="M28 12H36V20" />
                <line x1="6" y1="42" x2="42" y2="42" />
            </svg>
        ),
    },
    {
        title: 'Diabetic Foot Care',
        desc: 'Preventative screening, wound management, and ongoing care plans for diabetic patients.',
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80',
        imageAlt: 'Medical professional checking blood sugar levels for diabetic care',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 8V20M24 20L30 14M24 20L18 14" />
                <rect x="12" y="24" width="24" height="16" rx="3" />
                <line x1="24" y1="28" x2="24" y2="36" />
                <line x1="20" y1="32" x2="28" y2="32" />
            </svg>
        ),
    },
    {
        title: 'Nail Surgery',
        desc: 'Ingrown toenail correction under local anaesthetic. Same-day procedures with minimal downtime.',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
        imageAlt: 'Medical surgical tools in sterile environment for nail procedures',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="6" width="20" height="36" rx="10" />
                <line x1="14" y1="20" x2="34" y2="20" />
                <line x1="24" y1="6" x2="24" y2="20" />
            </svg>
        ),
    },
    {
        title: 'Children\'s Podiatry',
        desc: 'Growing feet need expert attention. Flat feet, in-toeing, and developmental assessments.',
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
        imageAlt: 'Happy child walking and running, representing children podiatric care',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="20" cy="28" rx="10" ry="14" />
                <circle cx="14" cy="12" r="3" />
                <circle cx="20" cy="10" r="3" />
                <circle cx="26" cy="12" r="3" />
                <circle cx="30" cy="16" r="2.5" />
            </svg>
        ),
    },
];

export default function Services() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section
            id="services"
            className="relative py-28 md:py-40 bg-white"
            data-cursor-theme="light"
            aria-labelledby="services-heading"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <SectionMarker number="01" label="Services" />

                <ScrollReveal>
                    <h2
                        id="services-heading"
                        className="text-[3rem] md:text-[4rem] leading-tight font-bold uppercase tracking-tight mb-4 max-w-3xl"
                    >
                        What We Treat
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-lg text-gray-500 font-light max-w-xl mb-16 md:mb-20 leading-relaxed">
                        From routine foot care to complex surgical solutions — evidence-based
                        podiatric medicine tailored to your needs.
                    </p>
                </ScrollReveal>

                {/* Services Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="group relative border-2 border-black overflow-hidden transition-colors duration-500 hover:bg-black hover:text-white -mt-[2px] -ml-[2px]"
                            data-cursor-label="View"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                                {/* Icon overlay on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-8">
                                {/* Icon (visible normally) */}
                                <div className="mb-4 text-black group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-bold uppercase tracking-[0.1em] mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-sm font-light leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                                    {service.desc}
                                </p>

                                {/* Arrow */}
                                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span>Learn More</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-8 md:gap-12">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                                <span className="text-[10px] font-black tracking-wider">AHPRA</span>
                            </div>
                            <span className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                                Registered
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                                <span className="text-[10px] font-black tracking-wider">BULK</span>
                            </div>
                            <span className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                                Bulk Billing Available
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                                <span className="text-[10px] font-black">DVA</span>
                            </div>
                            <span className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                                DVA Approved
                            </span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
