import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton — A button that gently pulls toward the cursor on hover.
 * Inverts colors (black ↔ white) on hover for Swiss brutalist aesthetic.
 */
export default function MagneticButton({
    children,
    onClick,
    className = '',
    variant = 'outline', // 'outline' | 'filled' | 'inverted'
    size = 'md',
    ariaLabel,
}) {
    const ref = useRef(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (e.clientX - centerX) * 0.3;
        const dy = (e.clientY - centerY) * 0.3;
        setOffset({ x: dx, y: dy });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    const sizeClasses = {
        sm: 'px-6 py-2 text-xs tracking-[0.15em]',
        md: 'px-10 py-4 text-sm tracking-[0.15em]',
        lg: 'px-14 py-5 text-base tracking-[0.15em]',
    };

    const variantClasses = {
        outline:
            'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white',
        filled:
            'bg-black text-white border-2 border-black hover:bg-white hover:text-black',
        inverted:
            'border-2 border-white bg-transparent text-white hover:bg-white hover:text-black',
    };

    return (
        <motion.button
            ref={ref}
            data-magnetic="true"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: 'spring', damping: 15, stiffness: 150 }}
            whileTap={{ scale: 0.95 }}
            className={`
        relative uppercase font-semibold
        transition-colors duration-300 ease-out
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
            aria-label={ariaLabel || undefined}
        >
            {children}
        </motion.button>
    );
}
