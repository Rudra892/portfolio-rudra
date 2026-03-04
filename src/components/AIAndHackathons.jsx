import React from 'react';
import './AIAndHackathons.css';

export default function AIAndHackathons() {
    const projects = [
        {
            glyph: '✦',
            name: 'SARASVANI',
            desc: 'AI-POWERED SPEECH THERAPY PLATFORM',
            tags: '[ GEMINI API ] [ PYTHON ] [ REAL-TIME ]',
            year: '2024'
        },
        {
            glyph: '◈',
            name: 'DIAGNOSTIC PORTAL',
            desc: 'COMPUTER VISION FOR CROP DISEASE DETECTION',
            tags: '[ TENSORFLOW ] [ FASTAPI ] [ VISION AI ]',
            year: '2024'
        },
        {
            glyph: '⬡',
            name: 'NASA ORRERY',
            desc: 'REAL-TIME ORBITAL MECHANICS TRACKER',
            tags: '[ THREE.JS ] [ NASA API ] [ WEBGL ]',
            year: '2024'
        }
    ];

    return (
        <section className="hackathon-section" id="ai">
            <div className="section-header-03">03 / PROJECTS</div>

            <div className="ai-marquee-container">
                <div className="ai-marquee-content">
                    AI INTEGRATION // COMPUTER VISION // PREDICTIVE MODELING // AI INTEGRATION // COMPUTER VISION // PREDICTIVE MODELING //
                </div>
            </div>

            <div className="project-list-container">
                {projects.map((proj, idx) => (
                    <div className="project-row interactive" key={idx}>
                        <div className="project-glyph">{proj.glyph}</div>
                        <div className="project-info">
                            <div className="project-name">{proj.name}</div>
                            <div className="project-desc">{proj.desc}</div>
                        </div>
                        <div className="project-meta">
                            <span className="project-tags">{proj.tags}</span>
                            <span className="project-year">— {proj.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
