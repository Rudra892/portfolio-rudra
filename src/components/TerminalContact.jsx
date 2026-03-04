import React from 'react';
import './TerminalContact.css';

export default function TerminalContact() {
    return (
        <section className="terminal-section" id="terminal">

            <div className="terminal-zone-1">
                <div className="term-top-left">
                    <div className="term-ready">
                        &gt;_ SYSTEM STATUS: READY TO BUILD. <div className="blink-cursor"></div>
                    </div>
                    <div className="term-nominal">ALL SYSTEMS NOMINAL // AVAILABLE FOR CONTRACTS</div>
                </div>

                <div className="term-top-right">
                    <div>LOCATION: INDIA, IN</div>
                    <div>TIMEZONE: IST UTC+5:30</div>
                </div>
            </div>

            <div className="terminal-zone-2">
                <a href="https://www.linkedin.com/in/rudra-patel-14a2642b8" target="_blank" rel="noreferrer" className="action-button linkedin-btn interactive">
                    <span className="btn-label">[ LINKEDIN ]</span>
                    <span className="btn-connect">↗ CONNECT <span className="arrow">→</span></span>
                </a>

                <a href="https://github.com/Rudra892" target="_blank" rel="noreferrer" className="action-button github-btn interactive">
                    <span className="btn-label">[ GITHUB ]</span>
                    <span className="btn-connect">↗ CONNECT <span className="arrow">→</span></span>
                </a>

                <a href="mailto:rudrapatel892005@gmail.com" className="action-button email-btn interactive">
                    <span className="btn-label">[ EMAIL ]</span>
                    <span className="btn-connect">↗ MESSAGE <span className="arrow">→</span></span>
                </a>
            </div>

            <div className="terminal-footer">
                <div className="footer-left">RUDRA PATEL © 2026</div>
                <div className="footer-right">SYSTEM OFFLINE.</div>
            </div>
        </section>
    );
}
