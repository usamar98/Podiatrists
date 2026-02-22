import { motion } from 'framer-motion';

/**
 * FloatingShapes — Animated black geometric shapes (circles, squares, crosses)
 * that float in the background with different speeds and delays.
 */
export default function FloatingShapes({ variant = 'light' }) {
    const isLight = variant === 'light';
    const color = isLight ? 'border-black' : 'border-white';
    const bgColor = isLight ? 'bg-black' : 'bg-white';

    const shapes = [
        // Large hollow circle
        {
            className: `absolute w-32 h-32 rounded-full border-2 ${color} opacity-[0.06]`,
            style: { top: '10%', left: '8%' },
            animate: { y: [-20, 20, -20], rotate: [0, 180, 360] },
            transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
        },
        // Small filled square
        {
            className: `absolute w-8 h-8 ${bgColor} opacity-[0.04]`,
            style: { top: '25%', right: '15%' },
            animate: { y: [-30, 10, -30], x: [-10, 10, -10] },
            transition: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        },
        // Medium hollow square
        {
            className: `absolute w-20 h-20 border-2 ${color} opacity-[0.05] rotate-45`,
            style: { bottom: '30%', left: '12%' },
            animate: { y: [-15, 25, -15], rotate: [45, 90, 45] },
            transition: { duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 },
        },
        // Swiss cross (+)
        {
            className: 'absolute opacity-[0.06]',
            style: { top: '60%', right: '10%' },
            animate: { y: [-25, 15, -25], rotate: [0, 90, 0] },
            transition: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            children: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16" y="4" width="8" height="32" fill={isLight ? '#000' : '#FFF'} />
                    <rect x="4" y="16" width="32" height="8" fill={isLight ? '#000' : '#FFF'} />
                </svg>
            ),
        },
        // Small circle
        {
            className: `absolute w-6 h-6 rounded-full ${bgColor} opacity-[0.04]`,
            style: { top: '45%', left: '45%' },
            animate: { y: [-20, 20, -20], x: [-15, 15, -15] },
            transition: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 },
        },
        // Diagonal line
        {
            className: `absolute w-[1px] h-24 ${bgColor} opacity-[0.05] rotate-[30deg]`,
            style: { top: '15%', right: '30%' },
            animate: { y: [-10, 20, -10] },
            transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
        },
        // Another cross (bottom-left)
        {
            className: 'absolute opacity-[0.04]',
            style: { bottom: '15%', right: '40%' },
            animate: { y: [-10, 15, -10], rotate: [0, 45, 0] },
            transition: { duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2.5 },
            children: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="2" width="4" height="20" fill={isLight ? '#000' : '#FFF'} />
                    <rect x="2" y="10" width="20" height="4" fill={isLight ? '#000' : '#FFF'} />
                </svg>
            ),
        },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className={shape.className}
                    style={shape.style}
                    animate={shape.animate}
                    transition={shape.transition}
                >
                    {shape.children || null}
                </motion.div>
            ))}
        </div>
    );
}
