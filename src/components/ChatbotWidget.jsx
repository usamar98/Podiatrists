import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ChatbotWidget — Floating chat bubble in the bottom-right corner.
 * Opens a sleek black/white chat panel with pre-built podiatry FAQs
 * and quick-action buttons.
 */

const quickReplies = [
    'Book an appointment',
    'What are your hours?',
    'Do you bulk bill?',
    'Where are you located?',
    'New patient info',
];

const botResponses = {
    'Book an appointment': "We'd love to see you! You can book online by clicking the **Book Now** button above, or call us at **(03) 0000 0000**. Same-week appointments are usually available.",
    'What are your hours?': "🕐 **Mon–Fri:** 8:00 AM – 6:00 PM\n**Saturday:** 9:00 AM – 1:00 PM\n**Sunday:** Closed",
    'Do you bulk bill?': "Yes! We offer **bulk billing** for eligible Medicare and DVA patients. Conditions apply — feel free to ask at reception when booking.",
    'Where are you located?': "📍 **123 Health Street, Your Suburb VIC 3000**\nWe're right next to the medical centre, with free parking available on-site.",
    'New patient info': "Welcome! New patients receive a comprehensive **45-minute initial consultation** for just **$49** (normally $89). No referral needed — just book and bring your Medicare card.",
};

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: 'bot',
            text: "Hi there! 👋 I'm the Macarthur Podiatry Group assistant. How can I help you today?",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleQuickReply = (reply) => {
        // Add user message
        setMessages((prev) => [...prev, { from: 'user', text: reply }]);

        // Simulate typing
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                { from: 'bot', text: botResponses[reply] || "Thanks for your message! Our team will get back to you shortly." },
            ]);
        }, 800 + Math.random() * 600);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
                data-magnetic="true"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </motion.svg>
                    )}
                </AnimatePresence>

                {/* Pulse ring when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full border-2 border-black animate-ping opacity-20" />
                )}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-28 right-8 z-[89] w-[360px] max-w-[calc(100vw-2rem)] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                        style={{ height: '480px' }}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="bg-black text-white px-5 py-4 flex items-center gap-3 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 3C9 6 5 10 5 15C5 19 8 22 12 22C16 22 19 19 19 15C19 10 15 6 12 3Z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold uppercase tracking-[0.1em]">Macarthur Podiatry Group</div>
                                <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                                    Online now
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'none' }}>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${msg.from === 'user'
                                            ? 'bg-black text-white'
                                            : 'bg-gray-100 text-black border border-gray-200'
                                            }`}
                                    >
                                        {msg.text.split('\n').map((line, j) => (
                                            <span key={j}>
                                                {line.split(/(\*\*.*?\*\*)/g).map((part, k) =>
                                                    part.startsWith('**') && part.endsWith('**') ? (
                                                        <strong key={k}>{part.slice(2, -2)}</strong>
                                                    ) : (
                                                        part
                                                    )
                                                )}
                                                {j < msg.text.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing indicator */}
                            {isTyping && (
                                <motion.div
                                    className="flex justify-start"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="bg-gray-100 border border-gray-200 px-4 py-3 flex gap-1.5">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        <div className="shrink-0 border-t border-gray-200 px-4 py-3">
                            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-2">
                                Quick questions
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply}
                                        onClick={() => handleQuickReply(reply)}
                                        className="text-[11px] px-3 py-1.5 border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-[0.05em] font-medium"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
