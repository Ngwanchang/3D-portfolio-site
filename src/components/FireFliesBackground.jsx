"use client";
import React, { useState, useEffect } from 'react';

const createFirefly = () => ({
    id: Math.random().toString(36).substring(2, 9),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`
});

const FirefliesBackground = () => {
    const [fireflies, setFireflies] = useState([]);
    
    useEffect(() => {
        // Add initial fireflies
        const initialFireflies = Array(5).fill().map(createFirefly);
        setFireflies(initialFireflies);

        // Add new firefly periodically
        const interval = setInterval(() => {
            setFireflies(prevFireflies => {
                // Keep only the last 20 fireflies to prevent memory issues
                const newFireflies = [...prevFireflies, createFirefly()];
                return newFireflies.slice(-20);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none'>
            {fireflies.map((firefly) => (
                <div 
                    key={firefly.id}
                    className='absolute rounded-full w-[20px] h-[20px] bg-firefly-radial'
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} infinite alternate`,
                        boxShadow: '0 0 10px 2px rgba(254, 254, 91, 0.5)'
                    }}
                />
            ))}
        </div>
    );
};

export default FirefliesBackground;