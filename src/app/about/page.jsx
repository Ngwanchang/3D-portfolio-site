'use client';

import Image from 'next/image';
import Navigation from '@/components/navigation';
import Rendermodel from '@/components/Rendermodel';
import WizardModel from '@/components/models/wizard';
import AboutDetails from '@/components/about';
export default function AboutPage() {

  return (
    <main className="relative min-h-screen w-full">
       <div className="absolute inset-0">
         <Image 
           src="/background/about-background.png" 
           alt="background-image" 
           fill
           priority
           className="object-cover object-center opacity-25"
         />
       </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-3xl font-semibold">about page</h1>
       
        <Navigation />
        <div className="w-full h-[420px]">
          <Rendermodel className="w-full h-[420px] z-10">
            <WizardModel />
          </Rendermodel>
        </div>
        <div className="w-full mt-16 md:mt-24">
          <AboutDetails />
        </div>
      </div>
      </main>
  )
  
}
