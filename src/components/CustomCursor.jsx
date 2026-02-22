import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CinematicCursor — A section-aware cursor that morphs based on context:
 * - White cursor on dark sections (booking, footer)
 * - Black cursor on light sections (hero, services, about, testimonials)
 * - Expands on interactive elements with glow ring
 * - Smooth spring-based following with trail effect
 * - Shows contextual label on hover (e.g., "View", "Book")
 */
export default function CinematicCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorTheme, setCursorTheme] = useState('light'); // 'light' = black cursor, 'dark' = white cursor
    const [hoverLabel, setHoverLabel] = useState('');

    // Motion values for smooth trail
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Outer ring — slower, more springy
    const ringX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.8 });
    const ringY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.8 });

    // Inner dot — faster, snappier
    const dotX = useSpring(mouseX, { damping: 30, stiffness: 300, mass: 0.3 });
    const dotY = useSpring(mouseY, { damping: 30, stiffness: 300, mass: 0.3 });

    // Trail element — slowest
    const trailX = useSpring(mouseX, { damping: 15, stiffness: 80, mass: 1.2 });
    const trailY = useSpring(mouseY, { damping: 15, stiffness: 80, mass: 1.2 });

    const detectSection = useCallback((x, y) => {
        // Get element under cursor and walk up to find section
        const el = document.elementFromPoint(x, y);
        if (!el) return;

        const section = el.closest('[data-cursor-theme]');
        if (section) {
            setCursorTheme(section.dataset.cursorTheme);
        } else {
            // Fallback: check background color
            const closest = el.closest('section, footer, nav, [class*="bg-black"]');
            if (closest) {
                const bg = window.getComputedStyle(closest).backgroundColor;
                // Parse rgb values
                const match = bg.match(/\d+/g);
                if (match) {
                    const brightness = (parseInt(match[0]) + parseInt(match[1]) + parseInt(match[2])) / 3;
                    setCursorTheme(brightness < 128 ? 'dark' : 'light');
                }
            }
        }
    }, []);

    useEffect(() => {
        let rafId;
        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);

            // Throttle section detection with rAF
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => detectSection(e.clientX, e.clientY));
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const interactive = target.closest('a, button, [data-magnetic], [data-cursor-label]');
            if (interactive) {
                setIsHovering(true);
                setHoverLabel(interactive.dataset?.cursorLabel || '');
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            if (target.closest('a, button, [data-magnetic], [data-cursor-label]')) {
                setIsHovering(false);
                setHoverLabel('');
            }
        };

        const handleLeave = () => setIsVisible(false);
        const handleEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        window.addEventListener('mouseout', handleMouseOut, { passive: true });
        document.addEventListener('mouseleave', handleLeave);
        document.addEventListener('mouseenter', handleEnter);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mouseleave', handleLeave);
            document.removeEventListener('mouseenter', handleEnter);
            cancelAnimationFrame(rafId);
        };
    }, [mouseX, mouseY, detectSection]);

    if (!isVisible) return null;

    const isDark = cursorTheme === 'dark';
    const ringColor = isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)';
    const dotColor = isDark ? '#FFFFFF' : '#000000';
    const trailColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)';
    const glowColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';

    return (
        <>
            {/* Trail — outermost, slowest, largest */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
                style={{
                    x: trailX,
                    y: trailY,
                    width: isHovering ? 80 : 50,
                    height: isHovering ? 80 : 50,
                    marginLeft: isHovering ? -40 : -25,
                    marginTop: isHovering ? -40 : -25,
                    background: trailColor,
                    transition: 'width 0.4s, height 0.4s, margin 0.4s, background 0.5s',
                }}
            />

            {/* Outer ring — the main visible cursor element */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center"
                style={{
                    x: ringX,
                    y: ringY,
                    width: isHovering ? 70 : 40,
                    height: isHovering ? 70 : 40,
                    marginLeft: isHovering ? -35 : -20,
                    marginTop: isHovering ? -35 : -20,
                    border: `2px solid ${ringColor}`,
                    boxShadow: isHovering ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}` : 'none',
                    transition: 'width 0.3s, height 0.3s, margin 0.3s, border-color 0.5s, box-shadow 0.3s',
                }}
            >
                {/* Hover label */}
                {isHovering && hoverLabel && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            color: dotColor,
                            fontSize: '8px',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            transition: 'color 0.5s',
                        }}
                    >
                        {hoverLabel}
                    </motion.span>
                )}
            </motion.div>

            {/* Inner dot — fast, snappy */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
                style={{
                    x: dotX,
                    y: dotY,
                    width: isHovering ? 8 : 6,
                    height: isHovering ? 8 : 6,
                    marginLeft: isHovering ? -4 : -3,
                    marginTop: isHovering ? -4 : -3,
                    background: dotColor,
                    transition: 'width 0.2s, height 0.2s, margin 0.2s, background 0.5s',
                }}
            />
        </>
    );
}
