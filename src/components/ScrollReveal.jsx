import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * ScrollReveal — Wrapper that triggers fade+slide animation when element enters viewport.
 * Supports configurable direction, delay, and stagger for child elements.
 */
export default function ScrollReveal({
    children,
    direction = 'up',     // 'up' | 'down' | 'left' | 'right'
    delay = 0,
    duration = 0.8,
    distance = 60,
    once = true,
    className = '',
}) {
    const [ref, inView] = useInView({
        triggerOnce: once,
        threshold: 0.15,
    });

    const directionMap = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
    };

    const initial = {
        opacity: 0,
        ...directionMap[direction],
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
