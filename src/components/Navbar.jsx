import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { BookingContext } from '../App';

/**
 * Navbar — Transparent on top, becomes solid black/white on scroll.
 * Hamburger menu on mobile with full-screen overlay.
 */
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { openCalendar } = useContext(BookingContext);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navLinks = [
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Booking', href: '#booking' },
        { label: 'Testimonials', href: '#testimonials' },
    ];

    const scrollTo = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-black"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Macarthur
                        <span className="font-light ml-1">Podiatry Group</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(link.href);
                                }}
                                className="text-xs uppercase tracking-[0.2em] font-medium text-gray-600 hover:text-black transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <MagneticButton
                            variant="filled"
                            size="sm"
                            onClick={openCalendar}
                            ariaLabel="Book appointment"
                        >
                            Book Now
                        </MagneticButton>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <motion.span
                            className="block w-6 h-[2px] bg-black"
                            animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-6 h-[2px] bg-black"
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-6 h-[2px] bg-black"
                            animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[99] bg-white flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <nav className="flex flex-col items-center gap-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo(link.href);
                                    }}
                                    className="text-4xl md:text-5xl font-bold uppercase tracking-[0.15em] text-black hover:text-gray-400 transition-colors"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <MagneticButton
                                    variant="filled"
                                    size="lg"
                                    onClick={() => { setMenuOpen(false); openCalendar(); }}
                                >
                                    Book Now
                                </MagneticButton>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
