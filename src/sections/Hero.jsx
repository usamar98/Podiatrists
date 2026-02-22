import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useContext } from 'react';
import FloatingShapes from '../components/FloatingShapes';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';
import ScrollReveal from '../components/ScrollReveal';
import { BookingContext } from '../App';

/**
 * Hero — Full 100vh section with bold statement, podiatry imagery,
 * scroll indicator, and parallax effect.
 */
export default function Hero() {
    const ref = useRef(null);
    const { openCalendar } = useContext(BookingContext);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={ref}
            id="hero"
            className="relative h-screen flex items-center overflow-hidden bg-white"
            data-cursor-theme="light"
            aria-label="Hero section"
        >
            <FloatingShapes variant="light" />

            {/* Background Image — Right Side */}
            <motion.div
                className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-0"
                style={{ y: imgY, scale: imgScale }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 lg:block hidden" />
                <div className="absolute inset-0 bg-white/60 lg:bg-transparent z-[5]" />
                <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
                    alt="Professional podiatrist examining a patient's foot in a modern clinic"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
            </motion.div>

            <motion.div
                className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20"
                style={{ y, opacity }}
            >
                {/* Eyebrow */}
                <ScrollReveal delay={0.2}>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                        {/* Foot icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                            <path d="M12 3C9 6 5 10 5 15C5 19 8 22 12 22C16 22 19 19 19 15C19 10 15 6 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs md:text-sm uppercase tracking-[0.35em] font-medium text-gray-500">
                            Expert Foot &amp; Ankle Care
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main headline */}
                <TextReveal
                    text="YOUR SUBURB'S TRUSTED PODIATRIST"
                    className="hero-text text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-[0.95] tracking-[0.05em] text-black max-w-4xl text-balance"
                    tag="h1"
                    delay={0.4}
                />

                {/* Subheadline */}
                <ScrollReveal delay={1.2}>
                    <p className="mt-8 md:mt-10 text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                        From heel pain to custom orthotics — evidence-based podiatric
                        medicine for healthier, happier feet.
                    </p>
                </ScrollReveal>

                {/* CTA Buttons */}
                <ScrollReveal delay={1.5}>
                    <div className="flex flex-wrap gap-4 mt-10 md:mt-12">
                        <MagneticButton
                            variant="filled"
                            size="lg"
                            onClick={openCalendar}
                        >
                            Book Appointment
                        </MagneticButton>
                        <MagneticButton
                            variant="outline"
                            size="lg"
                            onClick={() =>
                                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Our Services
                        </MagneticButton>
                    </div>
                </ScrollReveal>

                {/* New Patient Banner */}
                <ScrollReveal delay={1.8}>
                    <div className="mt-12 inline-flex items-center gap-4 border-2 border-black px-6 py-3">
                        <div className="diagonal-stripe-thin w-8 h-8 shrink-0" aria-hidden="true" />
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                            New Patient Special — Initial Consultation $49
                        </span>
                    </div>
                </ScrollReveal>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
                    Scroll
                </span>
                <motion.div
                    className="w-[1px] h-12 bg-black"
                    animate={{ scaleY: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top' }}
                />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
        </section>
    );
}
