import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * BookingCalendar — Modal with an interactive calendar date picker.
 * Opens when user clicks "Book Now" / "Book Appointment".
 * Black/white Swiss design with selectable dates, time slots, and GHL form widget.
 */

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const TIME_SLOTS = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
    const d = new Date(year, month, 1).getDay();
    return d === 0 ? 6 : d - 1; // Monday = 0
}

export default function BookingCalendar({ isOpen, onClose }) {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [step, setStep] = useState('date'); // 'date' | 'time' | 'form'

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const isToday = (day) => {
        return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
    };

    const isPast = (day) => {
        const date = new Date(currentYear, currentMonth, day);
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return date < todayStart;
    };

    const isSunday = (day) => {
        return new Date(currentYear, currentMonth, day).getDay() === 0;
    };

    const handleDateSelect = (day) => {
        if (isPast(day) || isSunday(day)) return;
        setSelectedDate(new Date(currentYear, currentMonth, day));
        setStep('time');
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep('form');
    };

    const handleReset = () => {
        setSelectedDate(null);
        setSelectedTime(null);
        setStep('date');
    };

    const handleClose = () => {
        handleReset();
        onClose();
    };

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-AU', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    // Filter time slots for Saturday (shorter hours)
    const availableSlots = selectedDate && selectedDate.getDay() === 6
        ? TIME_SLOTS.filter(t => {
            const hour = parseInt(t);
            const isPM = t.includes('PM');
            const h24 = isPM && hour !== 12 ? hour + 12 : hour;
            return h24 >= 9 && h24 < 13;
        })
        : TIME_SLOTS;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-[151] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white border-2 border-black w-full max-w-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {/* Header */}
                            <div className="bg-black text-white px-6 py-5 flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-bold uppercase tracking-[0.1em]">
                                        {step === 'date' && 'Select Date'}
                                        {step === 'time' && 'Select Time'}
                                        {step === 'form' && 'Your Details'}
                                    </h2>
                                    <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mt-1">
                                        Macarthur Podiatry Group
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Close calendar"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            {/* Step: Date Selection */}
                            {step === 'date' && (
                                <div className="p-6">
                                    {/* Month Navigation */}
                                    <div className="flex items-center justify-between mb-6">
                                        <button
                                            onClick={prevMonth}
                                            className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                            aria-label="Previous month"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M10 4L6 8L10 12" />
                                            </svg>
                                        </button>
                                        <span className="text-lg font-bold uppercase tracking-[0.1em]">
                                            {monthName} {currentYear}
                                        </span>
                                        <button
                                            onClick={nextMonth}
                                            className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                            aria-label="Next month"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M6 4L10 8L6 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Day Headers */}
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {DAYS.map((day) => (
                                            <div
                                                key={day}
                                                className="text-center text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 py-2"
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-1">
                                        {/* Empty cells before first day */}
                                        {Array.from({ length: firstDay }).map((_, i) => (
                                            <div key={`empty-${i}`} className="h-10" />
                                        ))}

                                        {/* Day cells */}
                                        {Array.from({ length: daysInMonth }).map((_, i) => {
                                            const day = i + 1;
                                            const past = isPast(day);
                                            const sunday = isSunday(day);
                                            const disabled = past || sunday;
                                            const todayMark = isToday(day);

                                            return (
                                                <button
                                                    key={day}
                                                    onClick={() => handleDateSelect(day)}
                                                    disabled={disabled}
                                                    className={`h-10 text-sm font-medium transition-all duration-200 relative
                            ${disabled
                                                            ? 'text-gray-300 cursor-not-allowed'
                                                            : 'hover:bg-black hover:text-white cursor-pointer'
                                                        }
                            ${todayMark ? 'border-2 border-black font-bold' : ''}
                          `}
                                                >
                                                    {day}
                                                    {sunday && (
                                                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[7px] text-gray-300">
                                                            closed
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-4 h-4 border-2 border-black inline-block" /> Today
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-4 h-4 bg-gray-200 inline-block" /> Unavailable
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Step: Time Selection */}
                            {step === 'time' && (
                                <div className="p-6">
                                    <button
                                        onClick={() => setStep('date')}
                                        className="text-xs uppercase tracking-[0.15em] font-medium text-gray-400 hover:text-black transition-colors mb-4 flex items-center gap-1"
                                    >
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M10 4L6 8L10 12" />
                                        </svg>
                                        Back to calendar
                                    </button>

                                    <p className="text-sm font-bold mb-1">{formatDate(selectedDate)}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-6">
                                        Select a time slot
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 max-h-[280px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                                        {availableSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => handleTimeSelect(time)}
                                                className="py-3 px-2 text-xs font-medium border border-black hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-[0.05em]"
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step: GHL Form Widget */}
                            {step === 'form' && (
                                <div className="p-6">
                                    <button
                                        onClick={() => setStep('time')}
                                        className="text-xs uppercase tracking-[0.15em] font-medium text-gray-400 hover:text-black transition-colors mb-4 flex items-center gap-1"
                                    >
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M10 4L6 8L10 12" />
                                        </svg>
                                        Back to time slots
                                    </button>

                                    {/* Booking Summary Mini */}
                                    <div className="border border-gray-200 px-4 py-3 mb-6 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-[0.15em]">Your Appointment</p>
                                            <p className="text-sm font-bold mt-0.5">{formatDate(selectedDate)}</p>
                                        </div>
                                        <span className="text-sm font-bold bg-black text-white px-3 py-1.5 uppercase tracking-[0.05em]">
                                            {selectedTime}
                                        </span>
                                    </div>

                                    {/* GHL Form Widget */}
                                    <iframe
                                        src="https://api.usama.services/widget/form/Z8rdtq1lQkGmTjWdG5tp"
                                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                                        id="inline-Z8rdtq1lQkGmTjWdG5tp"
                                        data-layout="{'id':'INLINE'}"
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Form 0"
                                        data-height="544"
                                        data-layout-iframe-id="inline-Z8rdtq1lQkGmTjWdG5tp"
                                        data-form-id="Z8rdtq1lQkGmTjWdG5tp"
                                        title="Form 0"
                                    />

                                    <p className="text-[10px] text-gray-400 mt-4 text-center">
                                        You'll receive a confirmation SMS and email after booking.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
