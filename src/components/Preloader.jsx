import React, { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let currentProgress = 0;

        // Frantic brutalist numbering sequence
        const interval = setInterval(() => {
            // Jump quickly
            currentProgress += Math.floor(Math.random() * 15) + 5;
            if (currentProgress >= 100) {
                currentProgress = 100;
                setProgress(100);
                clearInterval(interval);
                setTimeout(() => {
                    onComplete(); // Fire callback to unmount safely
                }, 300); // slight pause at 100%
            } else {
                setProgress(currentProgress);
            }
        }, 100); // very fast interval

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="preloader-container">
            <div className="preloader-overlay top"></div>
            <div className="preloader-overlay bottom"></div>

            <div className="preloader-content">
                <div className="preloader-terminal">
                    &gt;_ INITIALIZING BRUTALIST_UI
                    <br />
                    &gt;_ BOOTSTRAP: [OK]
                    <br />
                    &gt;_ AESTHETICS: [RAW]
                </div>
                <div className="preloader-percentage">
                    {progress.toString().padStart(3, '0')}%
                </div>
            </div>
        </div>
    );
}
