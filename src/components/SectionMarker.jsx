import ScrollReveal from './ScrollReveal';

/**
 * SectionMarker — Large outlined number (01, 02, 03...) used as visual section headers.
 * Swiss design style with tracked-out sans-serif lettering.
 */
export default function SectionMarker({ number, label }) {
    return (
        <ScrollReveal direction="left" delay={0.1}>
            <div className="flex items-end gap-6 mb-12 md:mb-16">
                <span
                    className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tight text-transparent select-none"
                    style={{
                        WebkitTextStroke: '2px #000',
                    }}
                    aria-hidden="true"
                >
                    {number}
                </span>
                {label && (
                    <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium pb-8 text-gray-500">
                        {label}
                    </span>
                )}
            </div>
        </ScrollReveal>
    );
}
