import { useContext } from 'react';
import SectionMarker from '../components/SectionMarker';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import FloatingShapes from '../components/FloatingShapes';
import { BookingContext } from '../App';

/**
 * Booking — Black background section with white text, large calendar icon,
 * and prominent CTA for appointment booking.
 */
export default function Booking() {
    const { openCalendar } = useContext(BookingContext);
    return (
        <section
            id="booking"
            className="relative py-28 md:py-40 bg-black text-white overflow-hidden"
            data-cursor-theme="dark"
            aria-labelledby="booking-heading"
        >
            <FloatingShapes variant="dark" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Section number in white stroke */}
                <ScrollReveal direction="left" delay={0.1}>
                    <div className="flex items-end gap-6 mb-12 md:mb-16">
                        <span
                            className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tight text-transparent select-none"
                            style={{ WebkitTextStroke: '2px #FFF' }}
                            aria-hidden="true"
                        >
                            03
                        </span>
                        <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium pb-8 text-gray-500">
                            Booking
                        </span>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left: Calendar Icon + Info */}
                    <div>
                        <ScrollReveal>
                            {/* Large Calendar Icon */}
                            <div className="mb-10">
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <rect x="10" y="20" width="80" height="70" rx="4" />
                                    <line x1="10" y1="38" x2="90" y2="38" />
                                    <line x1="30" y1="10" x2="30" y2="28" />
                                    <line x1="70" y1="10" x2="70" y2="28" />
                                    {/* Calendar dots */}
                                    <circle cx="30" cy="52" r="3" fill="white" stroke="none" />
                                    <circle cx="50" cy="52" r="3" fill="white" stroke="none" />
                                    <circle cx="70" cy="52" r="3" fill="white" stroke="none" />
                                    <circle cx="30" cy="68" r="3" fill="white" stroke="none" />
                                    <circle cx="50" cy="68" r="3" fill="white" stroke="none" />
                                    <circle cx="70" cy="68" r="3" fill="white" stroke="none" />
                                    <circle cx="30" cy="78" r="3" />
                                    <circle cx="50" cy="78" r="3" />
                                </svg>
                            </div>

                            <h2
                                id="booking-heading"
                                className="text-heading md:text-display font-bold uppercase tracking-tight mb-6 max-w-xl"
                            >
                                Ready to Take the First Step?
                            </h2>

                            <p className="text-body font-light text-gray-400 max-w-md leading-relaxed mb-10">
                                Book your consultation today. Same-week appointments available.
                                No referral needed — just call or book online.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <MagneticButton
                                    variant="inverted"
                                    size="lg"
                                    onClick={() => window.open('tel:+61300000000')}
                                    ariaLabel="Call to book an appointment"
                                >
                                    Call Now
                                </MagneticButton>
                                <MagneticButton
                                    variant="inverted"
                                    size="lg"
                                    ariaLabel="Book appointment online"
                                    onClick={openCalendar}
                                >
                                    Book Online
                                </MagneticButton>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Appointment Details Card */}
                    <ScrollReveal delay={0.3} direction="right">
                        <div className="border-2 border-white/20 p-8 md:p-12">
                            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold mb-8 text-gray-400">
                                Appointment Info
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        label: 'Initial Consultation',
                                        value: '45 min — $89',
                                        note: 'New Patient Special: $49',
                                    },
                                    {
                                        label: 'Follow-Up',
                                        value: '30 min — $65',
                                        note: null,
                                    },
                                    {
                                        label: 'Biomechanical Assessment',
                                        value: '60 min — $150',
                                        note: 'Includes gait analysis',
                                    },
                                    {
                                        label: 'Bulk Billing',
                                        value: 'Medicare / DVA',
                                        note: 'Conditions apply',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex justify-between items-start pb-6 border-b border-white/10 last:border-none"
                                    >
                                        <div>
                                            <div className="text-sm font-medium">{item.label}</div>
                                            {item.note && (
                                                <div className="text-xs text-gray-500 mt-1">{item.note}</div>
                                            )}
                                        </div>
                                        <div className="text-sm font-semibold text-right">{item.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Hours */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-gray-400">
                                    Clinic Hours
                                </h4>
                                <div className="grid grid-cols-2 gap-2 text-sm font-light text-gray-300">
                                    <span>Mon – Fri</span>
                                    <span className="text-right">8:00 AM – 6:00 PM</span>
                                    <span>Saturday</span>
                                    <span className="text-right">9:00 AM – 1:00 PM</span>
                                    <span>Sunday</span>
                                    <span className="text-right">Closed</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
