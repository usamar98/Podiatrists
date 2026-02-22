import { useState, useEffect, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ChatbotWidget from './components/ChatbotWidget';
import BookingCalendar from './components/BookingCalendar';

import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Booking from './sections/Booking';
import Testimonials from './sections/Testimonials';
import MapSection from './sections/MapSection';
import Footer from './sections/Footer';

/**
 * BookingContext — Shared state so any "Book Now" button can open the calendar.
 */
export const BookingContext = createContext();

/**
 * App — Main layout composing all sections with chatbot widget,
 * booking calendar modal, and page-load transition.
 */
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openCalendar = () => setCalendarOpen(true);
  const closeCalendar = () => setCalendarOpen(false);

  return (
    <BookingContext.Provider value={{ openCalendar }}>
      <AnimatePresence>
        {/* Page Load Overlay */}
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              className="text-white text-2xl md:text-4xl font-black uppercase tracking-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Elite Podiatry
            </motion.span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Hero />

            {/* Diagonal divider */}
            <div className="relative h-20 md:h-28 bg-white" aria-hidden="true">
              <div className="absolute inset-0 diagonal-stripe-thin opacity-20" />
            </div>

            <Services />
            <About />
            <Booking />
            <Testimonials />
            <MapSection />
          </main>

          <Footer />

          {/* Chatbot Widget (replaces old Book Now FAB) */}
          <ChatbotWidget />

          {/* Booking Calendar Modal */}
          <BookingCalendar isOpen={calendarOpen} onClose={closeCalendar} />
        </motion.div>
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
