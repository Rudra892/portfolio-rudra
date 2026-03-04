import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import BackendArchitecture from './components/BackendArchitecture';
import AIAndHackathons from './components/AIAndHackathons';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import TerminalContact from './components/TerminalContact';
import ComponentsPage from './pages/ComponentsPage';
import Preloader from './components/Preloader';

// Brutalist Cursor Component (CRT Smear)
const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState(Array(5).fill({ x: 0, y: 0 }));
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let animationFrameId;
        let currentX = 0;
        let currentY = 0;

        const updatePosition = (e) => {
            currentX = e.clientX;
            currentY = e.clientY;
            setPosition({ x: currentX, y: currentY });
        };

        const animateTrail = () => {
            setTrail((prevTrail) => {
                const newTrail = [...prevTrail];
                newTrail.unshift({ x: currentX, y: currentY });
                newTrail.pop();
                return newTrail;
            });
            animationFrameId = requestAnimationFrame(animateTrail);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.closest('button') ||
                e.target.closest('a') ||
                e.target.classList.contains('interactive') ||
                e.target.closest('.interactive') ||
                e.target.closest('.interactive-zone')
            ) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        animateTrail();

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Ghost Trails */}
            {trail.map((point, index) => (
                <div
                    key={index}
                    className="custom-cursor-trail"
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        opacity: 1 - index * 0.2,
                        transform: `translate(-50%, -50%) scale(${1 - index * 0.1})`,
                        transition: 'transform 0s, opacity 0s'
                    }}
                ></div>
            ))}

            {/* Main Cursor */}
            <div
                className={`custom-cursor ${hovered ? 'hovered' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                <div className="crosshair-v"></div>
                <div className="crosshair-h"></div>
            </div>
        </>
    );
};

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [inverted, setInverted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [exitAnim, setExitAnim] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#components') {
                setCurrentPage('components');
            } else {
                setCurrentPage('home');
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const toggleInvert = () => {
        setInverted(!inverted);
        document.body.classList.toggle('inverted', !inverted);
    };

    const handlePreloaderComplete = () => {
        setExitAnim(true);
        setTimeout(() => {
            setLoading(false);
        }, 500); // Wait for smash animation
    };

    return (
        <>
            <CustomCursor />
            <div className="noise-overlay"></div>

            {loading && (
                <div className={exitAnim ? 'preloader-exit' : ''} style={{ position: 'relative', zIndex: 99999 }}>
                    <Preloader onComplete={handlePreloaderComplete} />
                </div>
            )}

            {currentPage === 'home' && (
                <button className="invert-toggle interactive" onClick={toggleInvert}>
                    [ INVERT SYSTEM ]
                </button>
            )}

            {currentPage === 'home' ? (
                <div className="portfolio-scroll-container" style={{ visibility: loading ? 'hidden' : 'visible' }}>
                    <div className="sticky-section" style={{ zIndex: 0 }}><Hero /></div>
                    <div className="sticky-section" style={{ zIndex: 1 }}><BackendArchitecture /></div>
                    <div className="sticky-section" style={{ zIndex: 2 }}><AIAndHackathons /></div>
                    <div className="sticky-section" style={{ zIndex: 3 }}><Experience /></div>
                    <div className="sticky-section" style={{ zIndex: 4 }}><Certifications /></div>
                    <div className="sticky-section" style={{ zIndex: 5 }}><TerminalContact /></div>
                </div>
            ) : (
                <ComponentsPage />
            )}
        </>
    );
}
