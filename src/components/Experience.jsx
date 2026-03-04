import React from 'react';
import './Experience.css';

export default function Experience() {
    return (
        <section className="experience-section" id="experience">

            {/* KINETIC TYPOGRAPHY BACKGROUND */}
            <div className="kinetic-marquee-container">
                <div className="kinetic-marquee-content">
                    SYSTEM ENGAGED // ARCHITECTURE // DATA FLOW // SYSTEM ENGAGED //
                </div>
            </div>

            <div className="section-header-04">04 / EXPERIENCE & EDUCATION</div>

            <div className="exp-container">

                <div className="exp-left interactive-zone">
                    <div className="exp-label">[ PROFESSIONAL ]</div>
                    <h2 className="exp-title">BACKEND INTERN</h2>
                    <div className="exp-subtitle">CLOUD NATIVE APPLICATION PROJECT</div>

                    <ul className="exp-details">
                        <li><span className="bullet">■</span> BUILT SCALABLE APIS USING CLEAN ARCHITECTURE / NESTJS</li>
                        <li><span className="bullet">■</span> WINSTON LOGGER WITH DAILY ROTATION</li>
                        <li><span className="bullet">■</span> DOMAIN / APP / INFRA LAYERING</li>
                        <li><span className="bullet">■</span> PROFESSIONAL PR WORKFLOW & GIT STRATEGY</li>
                    </ul>
                </div>

                <div className="exp-divider"></div>

                <div className="exp-right interactive-zone">
                    <div className="exp-label">[ EDUCATION ]</div>
                    <h2 className="exp-title">B.E. INFO. TECH</h2>
                    <div className="exp-subtitle">GTU — AHMEDABAD INST. OF TECHNOLOGY (2023-27)</div>

                    <ul className="exp-details">
                        <li><span className="bullet">■</span> DATA STRUCTURES & ALGORITHMS</li>
                        <li><span className="bullet">■</span> OPERATING SYSTEMS & DBMS</li>
                        <li><span className="bullet">■</span> ARTIFICIAL INTELLIGENCE</li>
                        <li><span className="bullet">■</span> CLOUD-NATIVE SYSTEMS FOUNDATION</li>
                    </ul>
                </div>

            </div>

            <div className="rotating-stamp">
                <svg viewBox="0 0 100 100" className="stamp-svg">
                    <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                    <text>
                        <textPath href="#curve" startOffset="0" className="stamp-text">
                            BACKEND ENGINEER ✦ AI DEV ✦
                        </textPath>
                    </text>
                </svg>
                <div className="stamp-center">⚙</div>
            </div>
        </section>
    );
}
