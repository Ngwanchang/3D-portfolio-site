"use client"
import React, { useState } from 'react';
import { BtnList } from '@/app/data';
import NavButton from './navbutton';

const Navigation = () => {
    const [isAnyHovered, setIsAnyHovered] = useState(false);
    const angleIncrement = 360 / BtnList.length;

    const handleMouseEnter = () => setIsAnyHovered(true);
    const handleMouseLeave = () => setIsAnyHovered(false);

    return (
        <div className='w-full fixed h-screen flex items-center justify-center'>
            <div className={`flex items-center justify-between relative ${isAnyHovered ? 'paused' : 'animate-spin-slow group'}`}>
                {BtnList.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius = 'calc(20vw - 1rem)';
                    const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                    const y = `calc(${radius} * ${Math.sin(angleRad)})`;
                    
                    return (
                        <div 
                            key={btn.label}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavButton 
                                x={x}
                                y={y}
                                isPaused={isAnyHovered}
                                {...btn}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;