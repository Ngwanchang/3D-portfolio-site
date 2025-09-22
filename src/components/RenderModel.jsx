"use client"
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import clsx from 'clsx';
const Rendermodel = ({children, className}) => {
    return (
   <Canvas className={clsx("w-screen -z-10 h-screen relative", className)}>

    <Suspense fallback= {null}>
        {children}
        </Suspense>
        <Environment preset="dawn"/>
    </Canvas>
    )
}
export default Rendermodel;