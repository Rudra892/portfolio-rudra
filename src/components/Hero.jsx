import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-top-left interactive">
                <div className="brutalist-logo">
                    <svg viewBox="0 0 100 100" className="logo-svg">
                        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" />
                        <circle cx="50" cy="50" r="25" fill="currentColor" />
                        <path d="M10 10 L90 90 M90 10 L10 90" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div className="logo-text">
                        <span>SYS.INIT</span>
                        <span>R_892</span>
                    </div>
                </div>
            </div>

            <div className="hero-center">
                <h1 className="hero-name glitch" data-text="R U D R A">
                    <span className="glitch" data-text="R U D R A">R U D R A</span>
                    <span className="glitch" data-text="P A T E L">P A T E L</span>
                </h1>
                <hr className="hero-divider" />
                <div className="hero-tags-wrapper">
                    <div className="hero-tags border-brutal">
                        <span>[ BACKEND ENGINEER ]</span>
                        <span>[ REAL-TIME AI ]</span>
                        <span>[ CLOUD-NATIVE SYSTEMS ]</span>
                    </div>
                </div>
            </div>

            <div className="hero-bottom-left bounce">
                ↓ SCROLL TO EXPLORE
            </div>
            <div className="hero-bottom-right">
                EST. 2024 //
            </div>
        </section>
    );
}
