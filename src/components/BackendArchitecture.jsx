import React, { useState, useEffect } from 'react';
import './BackendArchitecture.css';

export default function BackendArchitecture() {
    const [hoveredTech, setHoveredTech] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate normalized mouse position for parallax (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const techStack = [
        { num: '01', name: 'NESTJS', desc: 'ENTERPRISE APIS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
        { num: '02', name: 'POSTGRESQL', desc: 'RELATIONAL CORE', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { num: '03', name: 'REDIS', desc: 'CACHE + QUEUES', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
        { num: '04', name: 'DOCKER', desc: 'CONTAINERIZATION', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { num: '05', name: 'AWS', desc: 'CLOUD-NATIVE INFRA', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { num: '06', name: 'MONGODB', desc: 'NO-SQL STORE', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    ];

    return (
        <section className="backend-section" id="backend">
            <div className="backend-left">
                <div className="marquee-container">
                    <div className="marquee-content">
                        PRODUCTION BACKEND // CLEAN ARCHITECTURE //
                        PRODUCTION BACKEND // CLEAN ARCHITECTURE //
                    </div>
                </div>
                <div className="slat-overlay"></div>
            </div>

            <div className="backend-divider"></div>

            <div className="backend-right">
                <div className="tech-stack-container">
                    <div className="tech-stack-label">TECH STACK</div>
                    <div className="tech-stack-list">
                        {techStack.map((item, idx) => (
                            <div
                                className="tech-item interactive-zone"
                                key={idx}
                                onMouseEnter={() => setHoveredTech(item.img)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <span className="tech-num">{item.num}</span>
                                <span className="tech-name">{item.name}</span>
                                <span className="tech-arrow">→</span>
                                <span className="tech-desc">{item.desc}</span>
                            </div>
                        ))}
                    </div>

                    {/* Floating Image Reveal with Parallax */}
                    <div
                        className={`tech-image-reveal ${hoveredTech ? 'visible' : ''}`}
                        style={{
                            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) ${hoveredTech ? 'scale(1)' : 'scale(0.9)'}`
                        }}
                    >
                        {hoveredTech && <img src={hoveredTech} alt="Tech Logo" />}
                    </div>

                </div>
                <div className="backend-callout">
                    BUILT FOR SCALE.<br />DESIGNED FOR CLARITY.
                </div>
            </div>
        </section>
    );
}
