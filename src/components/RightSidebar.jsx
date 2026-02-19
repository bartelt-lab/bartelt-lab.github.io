import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Section configurations for different routes (defined outside component to avoid re-creation)
const ROUTE_SECTIONS = {
    '/core-team-projects': [
        { id: 'hero', label: 'Overview' },
        { id: 'active-projects', label: 'Active' },
        { id: 'archive', label: 'Archive' },
    ],
    '/core-team-projects/dynamo': [
        { id: 'hero', label: 'Overview' },
        { id: 'features', label: 'Features' },
        { id: 'evaluation', label: 'Evaluation' },
        { id: 'science', label: 'Science' },
        { id: 'architecture', label: 'Architecture' },
    ],
    '/core-team-projects/ai4ai': [
        { id: 'hero', label: 'Overview' },
        { id: 'features', label: 'Features' },
        { id: 'evaluation', label: 'Evaluation' },
        { id: 'extra', label: 'Details' },
    ],
    '/core-team-projects/vergabepilot': [
        { id: 'hero', label: 'Overview' },
        { id: 'features', label: 'Features' },
        { id: 'evaluation', label: 'Evaluation' },
        { id: 'extra', label: 'Details' },
    ],
};

const RightSidebar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();

    const sections = useMemo(() => ROUTE_SECTIONS[location.pathname] || [], [location.pathname]);
    const isVisible = sections.length > 0;

    // Reset active section on route change
    useEffect(() => {
        if (sections.length > 0) {
            setActiveSection(sections[0].id);
        }
    }, [location.pathname]);

    // Scroll Spy Logic
    useEffect(() => {
        if (!isVisible) return;

        const handleScroll = () => {
            // Use a smaller offset for more accurate detection
            const scrollPosition = window.scrollY + 150;

            // Find all valid sections that actually exist in the DOM
            const validSections = [];
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (!element) continue;
                const rect = element.getBoundingClientRect();
                validSections.push({
                    id: section.id,
                    top: rect.top + window.scrollY,
                    bottom: rect.top + window.scrollY + rect.height
                });
            }

            if (validSections.length === 0) return;

            // At the very top of the page, always highlight first section
            if (window.scrollY < 100) {
                setActiveSection(validSections[0].id);
                return;
            }

            // At bottom of page, highlight last item
            const totalScrollableHeight = document.documentElement.scrollHeight;
            if ((window.innerHeight + window.scrollY) >= totalScrollableHeight - 100) {
                setActiveSection(validSections[validSections.length - 1].id);
                return;
            }

            // Find the last section whose top is above our scroll position
            let current = validSections[0].id;
            for (let i = validSections.length - 1; i >= 0; i--) {
                if (validSections[i].top <= scrollPosition) {
                    current = validSections[i].id;
                    break;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check with small delay to ensure DOM is ready
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, [isVisible, location.pathname, sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Always use dark sidebar (pages have white/light backgrounds)
    const lineColor = 'bg-gray-300';
    const dotBaseClass = 'bg-transparent border-gray-400 border-2';
    const dotHoverClass = 'group-hover:bg-gray-600';
    const labelColor = 'text-gray-700';

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex fixed top-0 right-0 h-full w-12 lg:w-48 z-40 flex-col items-end justify-center pointer-events-none"
                >
                    <div className="flex flex-col items-center space-y-6 pointer-events-auto mr-4">
                        <div className={`w-px h-12 ${lineColor} transition-colors duration-300`}></div>

                        {sections.map((section) => (
                            <div key={section.id} className="relative group flex items-center">
                                {/* Label - Always visible on desktop */}
                                <span
                                    className={`hidden lg:block text-xs font-bold uppercase tracking-widest transition-all duration-200 whitespace-nowrap mr-3
                                    ${activeSection === section.id
                                            ? 'opacity-100 text-blue-600'
                                            : 'opacity-50 text-gray-500 group-hover:opacity-80'
                                        }
                                `}>
                                    {section.label}
                                </span>

                                {/* Dot */}
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className="relative flex items-center justify-center w-8 h-8 group-hover:scale-110 transition-transform duration-200"
                                    aria-label={`Scroll to ${section.label}`}
                                >
                                    <div className={`rounded-full transition-all duration-300
                                        ${activeSection === section.id
                                            ? 'w-3.5 h-3.5 bg-blue-600 scale-125'
                                            : `w-2.5 h-2.5 ${dotBaseClass} ${dotHoverClass}`
                                        }
                                    `} />
                                </button>
                            </div>
                        ))}

                        <div className={`w-px h-12 ${lineColor} transition-colors duration-300`}></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RightSidebar;
