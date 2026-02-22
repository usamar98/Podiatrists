import ScrollReveal from '../components/ScrollReveal';
import SectionMarker from '../components/SectionMarker';

/**
 * MapSection — Embedded Google Maps after Testimonials.
 * Shows practice location with a styled wrapper and location details.
 */
export default function MapSection() {
    return (
        <section
            id="location"
            className="relative py-28 md:py-40 bg-gray-100"
            data-cursor-theme="light"
            aria-labelledby="location-heading"
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <SectionMarker number="05" label="Location" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left: Info */}
                    <div className="lg:col-span-4">
                        <ScrollReveal>
                            <h2
                                id="location-heading"
                                className="text-[3rem] md:text-[4rem] leading-tight font-bold uppercase tracking-tight mb-6"
                            >
                                Find Us
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-lg font-light text-gray-500 leading-relaxed mb-10">
                                Conveniently located in the heart of your suburb, with free
                                on-site parking and public transport access.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-1">
                                            Address
                                        </div>
                                        <div className="text-sm font-medium">123 Health Street</div>
                                        <div className="text-sm font-light text-gray-500">Your Suburb, VIC 3000</div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-1">
                                            Phone
                                        </div>
                                        <a href="tel:+61300000000" className="text-sm font-medium hover:underline">
                                            (03) 0000 0000
                                        </a>
                                    </div>
                                </div>

                                {/* Parking */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <path d="M9 17V7h4a4 4 0 010 8H9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-1">
                                            Parking
                                        </div>
                                        <div className="text-sm font-medium">Free on-site parking</div>
                                        <div className="text-sm font-light text-gray-500">Wheelchair accessible</div>
                                    </div>
                                </div>

                                {/* Transport */}
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="14" rx="2" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                            <circle cx="8" cy="20" r="1" />
                                            <circle cx="16" cy="20" r="1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-1">
                                            Public Transport
                                        </div>
                                        <div className="text-sm font-medium">2 min walk from tram stop</div>
                                        <div className="text-sm font-light text-gray-500">Routes 96, 109</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Map */}
                    <div className="lg:col-span-8">
                        <ScrollReveal delay={0.2} direction="right">
                            <div className="border-2 border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <iframe
                                    title="Elite Podiatry Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8162791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1708000000000!5m2!1sen!2sau"
                                    width="100%"
                                    height="500"
                                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                />
                            </div>

                            {/* Directions CTA */}
                            <div className="mt-6 flex items-center gap-4">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=-37.8162791,144.9537353"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-xs uppercase tracking-[0.15em] font-semibold hover:bg-black hover:text-white transition-colors duration-300"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                                    </svg>
                                    Get Directions
                                </a>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
                                    Opens in Google Maps
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
