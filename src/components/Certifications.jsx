import React from 'react';
import './Certifications.css';

export default function Certifications() {
    const certs = [
        {
            issuer: 'STANFORD / DEEPLEARNING.AI',
            title: 'SUPERVISED MACHINE LEARNING',
            skills: 'REGRESSION / CLASSIFICATION / GRADIENT DESCENT',
            year: '2026'
        },
        {
            issuer: 'NVIDIA DLI',
            title: 'REAL-TIME VIDEO AI APPLICATIONS',
            skills: 'DEEPSTREAM SDK / STREAMING AI INFERENCE',
            year: '2025'
        },
        {
            issuer: 'IBM SKILLS NETWORK',
            title: 'DATA SCIENCE TOOLS',
            skills: 'JUPYTER / RSTUDIO / WATSON STUDIO (98% SCORE)',
            year: '2024'
        }
    ];

    return (
        <section className="certifications-section" id="certifications">
            <div className="section-header-05">05 / CERTIFICATIONS</div>

            <div className="certs-grid">
                {certs.map((cert, idx) => (
                    <div className="cert-card interactive-zone" key={idx}>
                        <div className="cert-top">
                            <span className="cert-issuer">{cert.issuer}</span>
                            <span className="cert-year">[{cert.year}]</span>
                        </div>
                        <h3 className="cert-title">{cert.title}</h3>

                        <div className="cert-skills-marquee">
                            <div className="cert-marquee-content">
                                <span>{cert.skills} // </span>
                                <span>{cert.skills} // </span>
                                <span>{cert.skills} // </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
