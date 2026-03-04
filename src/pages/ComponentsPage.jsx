import React from 'react';
import '../components/AIAndHackathons.css';
import '../components/TerminalContact.css';
import './ComponentsPage.css';

export default function ComponentsPage() {
    return (
        <div className="components-page">
            <header className="components-header">
                <h1>COMPONENT STATES LIBRARY</h1>
                <a href="#" className="back-link">← BACK TO PORTFOLIO</a>
            </header>

            <section className="component-showcase">
                <h2>1. PROJECT ROW (AI & HACKATHONS)</h2>
                <div className="state-grid">
                    <div className="state-card">
                        <div className="state-label">DEFAULT STATE</div>
                        <div className="showcase-container bg-emerald">
                            <div className="project-row" style={{ padding: '0 24px' }}>
                                <div className="project-glyph">✦</div>
                                <div className="project-info">
                                    <div className="project-name" style={{ fontSize: '32px' }}>SARASVANI</div>
                                    <div className="project-desc">AI-POWERED SPEECH THERAPY</div>
                                </div>
                                <div className="project-meta">
                                    <span className="project-tags">[ GEMINI API ]</span>
                                    <span className="project-year">— 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="state-card">
                        <div className="state-label">HOVER STATE (SIMULATED)</div>
                        <div className="showcase-container bg-emerald">
                            <div className="project-row hover-simulated" style={{ padding: '0 24px' }}>
                                <div className="project-glyph">✦</div>
                                <div className="project-info">
                                    <div className="project-name" style={{ fontSize: '32px' }}>SARASVANI</div>
                                    <div className="project-desc">AI-POWERED SPEECH THERAPY</div>
                                </div>
                                <div className="project-meta">
                                    <span className="project-tags">[ GEMINI API ]</span>
                                    <span className="project-year">— 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="component-showcase">
                <h2>2. TERMINAL ACTION BUTTONS</h2>
                <div className="state-grid">
                    <div className="state-card">
                        <div className="state-label">LINKEDIN (DEFAULT)</div>
                        <div className="showcase-container bg-onyx">
                            <a href="#components" className="action-button linkedin-btn" style={{ height: '120px' }}>
                                <span className="btn-label" style={{ fontSize: '48px' }}>[ LINKEDIN ]</span>
                                <span className="btn-connect">↗ CONNECT <span className="arrow">→</span></span>
                            </a>
                        </div>
                    </div>

                    <div className="state-card">
                        <div className="state-label">LINKEDIN (HOVER SIMULATED)</div>
                        <div className="showcase-container bg-onyx">
                            <a href="#components" className="action-button linkedin-btn btn-hover-simulated" style={{ height: '120px' }}>
                                <span className="btn-label" style={{ fontSize: '48px' }}>[ LINKEDIN ]</span>
                                <span className="btn-connect">↗ CONNECT <span className="arrow">→</span></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="state-grid" style={{ marginTop: '24px' }}>
                    <div className="state-card">
                        <div className="state-label">GITHUB (DEFAULT)</div>
                        <div className="showcase-container bg-onyx">
                            <a href="#components" className="action-button github-btn" style={{ height: '120px' }}>
                                <span className="btn-label" style={{ fontSize: '48px' }}>[ GITHUB ]</span>
                                <span className="btn-connect">↗ CONNECT <span className="arrow">→</span></span>
                            </a>
                        </div>
                    </div>

                    <div className="state-card">
                        <div className="state-label">GITHUB (HOVER SIMULATED)</div>
                        <div className="showcase-container bg-onyx">
                            <a href="#components" className="action-button github-btn btn-hover-simulated" style={{ height: '120px' }}>
                                <span className="btn-label" style={{ fontSize: '48px' }}>[ GITHUB ]</span>
                                <span className="btn-connect">↗ CONNECT <span className="arrow">→</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
