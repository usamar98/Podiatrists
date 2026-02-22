import { useContext } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import { BookingContext } from '../App';

/**
 * Footer — Inverted (black bg, white text) with practice details,
 * hours, location, and outlined social icons.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { openCalendar } = useContext(BookingContext);

    return (
        <footer
            className="relative bg-black text-white pt-20 md:pt-28 pb-8"
            data-cursor-theme="dark"
            role="contentinfo"
        >
            {/* Diagonal divider */}
            <div
                className="absolute top-0 left-0 w-full h-px bg-white/10"
                aria-hidden="true"
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Top: Large CTA */}
                <ScrollReveal>
                    <div className="pb-16 md:pb-20 border-b border-white/10">
                        <h2 className="text-3xl md:text-5xl lg:text-display font-bold uppercase tracking-tight mb-6 max-w-3xl">
                            Let&apos;s Get You Moving
                        </h2>
                        <p className="text-body font-light text-gray-400 max-w-md mb-8 leading-relaxed">
                            Book your appointment today. Your feet will thank you.
                        </p>
                        <MagneticButton
                            variant="inverted"
                            size="lg"
                            onClick={openCalendar}
                        >
                            Book Appointment
                        </MagneticButton>
                    </div>
                </ScrollReveal>

                {/* Middle: Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-20">
                    {/* Column 1: Contact */}
                    <ScrollReveal delay={0.1}>
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 text-gray-400">
                                Contact
                            </h3>
                            <div className="space-y-3 text-sm font-light text-gray-300 leading-relaxed">
                                <p>123 Health Street</p>
                                <p>Your Suburb, VIC 3000</p>
                                <p className="pt-2">
                                    <a
                                        href="tel:+61300000000"
                                        className="hover:text-white transition-colors"
                                    >
                                        (03) 0000 0000
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="mailto:hello@elitepodiatry.com.au"
                                        className="hover:text-white transition-colors"
                                    >
                                        hello@elitepodiatry.com.au
                                    </a>
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Column 2: Hours */}
                    <ScrollReveal delay={0.2}>
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 text-gray-400">
                                Hours
                            </h3>
                            <div className="space-y-3 text-sm font-light text-gray-300">
                                <div className="flex justify-between">
                                    <span>Mon – Fri</span>
                                    <span>8:00 – 6:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>9:00 – 1:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Column 3: Quick Links */}
                    <ScrollReveal delay={0.3}>
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 text-gray-400">
                                Quick Links
                            </h3>
                            <div className="space-y-3">
                                {['Services', 'About', 'Booking', 'Testimonials'].map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(`#${link.toLowerCase()}`)
                                                ?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="block text-sm font-light text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Column 4: Social */}
                    <ScrollReveal delay={0.4}>
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold mb-6 text-gray-400">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {[
                                    {
                                        name: 'Instagram',
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                                <circle cx="12" cy="12" r="5" />
                                                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        name: 'Facebook',
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 2H15C13.343 2 12 3.343 12 5V8H9V12H12V22H16V12H19L20 8H16V5C16 4.448 16.448 4 17 4H20V2H18Z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        name: 'LinkedIn',
                                        icon: (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="3" />
                                                <line x1="8" y1="11" x2="8" y2="17" />
                                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                                <path d="M12 17V14C12 12.343 13.343 11 15 11C16.657 11 18 12.343 18 14V17" />
                                                <line x1="12" y1="11" x2="12" y2="17" />
                                            </svg>
                                        ),
                                    },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-light text-gray-500">
                        &copy; {currentYear} Elite Podiatry. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs font-light text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
