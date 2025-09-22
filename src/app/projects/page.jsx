

'use client';

import Image from 'next/image';
import ProjectList from '@/components/projects';
import { projectsData } from '../data';
export default function Home() {

  return (
    <main className="relative min-h-screen w-full">
       <div className="absolute inset-0">
         <Image 
           src="/background/projects-background.png" 
           alt="background-image" 
           fill
           priority
           className="object-cover object-center opacity-25"
         />
       </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-3xl font-semibold">Projects page</h1>
        <ProjectList projects={projectsData} />
      </div>
      </main>
  )
  
}
