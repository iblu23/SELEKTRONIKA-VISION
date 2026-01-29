import React, { useEffect, useRef } from 'react';

const SoundWaveBackground = ({ className }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        // Expanded Neon Color Palette
        const palette = [
            '#00FF41', // Toxic Green
            '#9D00FF', // Cyber Violet
            '#00D9FF', // Electric Blue
            '#FF00C8', // Neon Magenta (New)
            '#EFFF00', // Acid Yellow (New)
            '#00FFF0', // Plasma Cyan (New)
            '#6A00FF', // Deep Ultraviolet (New)
            'rgba(255, 140, 0, 0.5)' // Soft Neon Orange (Accents)
        ];

        // Helper to generate varied waves based on audio archetypes
        const createWaves = (count) => {
            const generatedWaves = [];
            const archetypes = ['bass', 'rhythm', 'accent'];

            for (let i = 0; i < count; i++) {
                const archetype = archetypes[Math.floor(Math.random() * archetypes.length)];
                let waveConfig = {};
                const baseColor = palette[Math.floor(Math.random() * palette.length)];

                if (archetype === 'bass') {
                    // Large, slow, thick, deep
                    waveConfig = {
                        color: baseColor,
                        baseY: Math.random(), // Full vertical span
                        amplitude: 60 + Math.random() * 60,
                        frequency: 0.0005 + Math.random() * 0.001,
                        speed: 0.005 + Math.random() * 0.01,
                        thickness: 2 + Math.random() * 2,
                        blur: 20 + Math.random() * 10,
                        type: ['sine', 'composite'][Math.floor(Math.random() * 2)],
                        tilt: (Math.random() - 0.5) * 0.1 // Subtle tilt
                    };
                } else if (archetype === 'rhythm') {
                    // Medium energy, standard movement
                    waveConfig = {
                        color: baseColor,
                        baseY: Math.random(),
                        amplitude: 30 + Math.random() * 40,
                        frequency: 0.002 + Math.random() * 0.002,
                        speed: 0.015 + Math.random() * 0.02,
                        thickness: 1.5 + Math.random(),
                        blur: 10 + Math.random() * 10,
                        type: ['composite', 'sine', 'bass'][Math.floor(Math.random() * 3)],
                        tilt: (Math.random() - 0.5) * 0.15
                    };
                } else {
                    // Accent: Thin, fast, sharp, energetic
                    waveConfig = {
                        color: baseColor,
                        baseY: Math.random(),
                        amplitude: 15 + Math.random() * 20,
                        frequency: 0.004 + Math.random() * 0.004,
                        speed: 0.03 + Math.random() * 0.03,
                        thickness: 0.5 + Math.random() * 1,
                        blur: 5 + Math.random() * 5,
                        type: 'saw',
                        tilt: (Math.random() - 0.5) * 0.2
                    };
                }

                generatedWaves.push({
                    ...waveConfig,
                    phaseOffset: Math.random() * Math.PI * 2,
                    opacitySpeed: 0.002 + Math.random() * 0.008
                });
            }
            return generatedWaves;
        };

        // Original waves preserved (updated with tilt/phase for consistency)
        const originalWaves = [
            { color: '#00FF41', baseY: 0.3, amplitude: 50, frequency: 0.002, speed: 0.02, thickness: 2, blur: 15, type: 'sine', tilt: 0, phaseOffset: 0, opacitySpeed: 0.005 },
            { color: '#9D00FF', baseY: 0.6, amplitude: 80, frequency: 0.001, speed: 0.015, thickness: 3, blur: 20, type: 'composite', tilt: 0.05, phaseOffset: 1, opacitySpeed: 0.004 },
            { color: '#00D9FF', baseY: 0.8, amplitude: 40, frequency: 0.003, speed: 0.03, thickness: 1, blur: 10, type: 'saw', tilt: -0.02, phaseOffset: 2, opacitySpeed: 0.006 },
            { color: '#00FF41', baseY: 0.2, amplitude: 30, frequency: 0.004, speed: 0.01, thickness: 1, blur: 8, type: 'sine', tilt: 0, phaseOffset: 3, opacitySpeed: 0.005 }
        ];

        // Multiply total number of waveforms (approx 20 total)
        const extraWaves = createWaves(16);
        const waves = [...originalWaves, ...extraWaves];

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            time += 1;

            waves.forEach((wave, index) => {
                ctx.beginPath();

                // Analog Instability: Subtle flutter and drift
                const instability = Math.sin(time * 0.02 + wave.phaseOffset) * 0.1;
                // Dynamic amplitude modulation (simulating low frequency bass hits)
                const bassMod = Math.sin(time * 0.05 + index) * 0.3 + 1 + instability;
                const currentAmp = wave.amplitude * bassMod;

                // Life/Breathing: Slow fade in and out for some layers
                const fade = 0.5 + Math.sin(time * wave.opacitySpeed + index) * 0.5;

                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.lineWidth = wave.thickness;
                ctx.strokeStyle = wave.color;
                ctx.shadowBlur = wave.blur;
                ctx.shadowColor = wave.color;

                // Apply opacity
                ctx.globalAlpha = fade;

                const verticalCenter = canvas.height * wave.baseY;

                // Less dense sampling for performance if needed, 5-10px is smooth enough
                for (let x = 0; x <= canvas.width; x += 8) {
                    const globalX = x + time * wave.speed * 50; // Horizontal flow
                    let y = 0;

                    if (wave.type === 'sine') {
                        y = Math.sin(globalX * wave.frequency) * currentAmp;
                    } else if (wave.type === 'composite') {
                        // Complex harmonic
                        y = Math.sin(globalX * wave.frequency) * currentAmp
                            + Math.sin(globalX * wave.frequency * 2.5) * (currentAmp * 0.5);
                    } else if (wave.type === 'saw') {
                        // Smoothed saw-like texture
                        y = (Math.sin(globalX * wave.frequency) + Math.sin(globalX * wave.frequency * 2) * 0.5) * currentAmp;
                    } else if (wave.type === 'bass') {
                        // Distorted/Saturated shape
                        y = Math.tanh(Math.sin(globalX * wave.frequency) * 3) * currentAmp;
                    }

                    // Diagonal/Spatial Drift
                    const tiltOffset = (x - canvas.width / 2) * (wave.tilt || 0);

                    // Vertical low-freq drift (breathing)
                    const verticalDrift = Math.sin(time * 0.001 + wave.phaseOffset) * 40;

                    ctx.lineTo(x, verticalCenter + y + tiltOffset + verticalDrift);
                }

                ctx.stroke();
                ctx.globalAlpha = 1.0; // Reset alpha
            });

            animationId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none z-0 opacity-60 mix-blend-screen ${className || 'fixed top-0 left-0 w-full h-full'}`}
        />
    );
};

export default SoundWaveBackground;
