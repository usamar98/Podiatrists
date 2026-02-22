import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * TextReveal — Letters appear one-by-one with stagger when entering viewport.
 * Perfect for hero headings and pull quotes.
 */
export default function TextReveal({
    text,
    className = '',
    tag = 'h1',
    delay = 0,
    stagger = 0.03,
    once = true,
}) {
    const [ref, inView] = useInView({
        triggerOnce: once,
        threshold: 0.3,
    });

    const words = text.split(' ');
    const Tag = tag;

    return (
        <Tag ref={ref} className={className} aria-label={text}>
            {words.map((word, wi) => (
                <span key={wi} className="inline-block mr-[0.3em]">
                    {word.split('').map((char, ci) => {
                        const globalIndex = words.slice(0, wi).join('').length + ci;
                        return (
                            <motion.span
                                key={`${wi}-${ci}`}
                                className="inline-block"
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{
                                    duration: 0.5,
                                    delay: delay + globalIndex * stagger,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                aria-hidden="true"
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </span>
            ))}
        </Tag>
    );
}
