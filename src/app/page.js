

'use client';

import Image from 'next/image';
import bg from "../../public/background/home-background.png"
import WizardModel from '@/components/models/wizard';
import Rendermodel from '@/components/Rendermodel';
import Navigation from '@/components/navigation';
export default function Home() {

  return (
    <main className="relative min-h-screen w-full">
       <div className="absolute inset-0">
         <Image 
           src={bg} 
           alt="background-image" 
           fill
           priority
           className="object-cover object-center opacity-25"
         />
       </div>
       <div className="w-full h-screen">
{/*render nav component and 3d component*/}
<Navigation />
<Rendermodel>
  <WizardModel />
</Rendermodel>
       </div>
      </main>
  )
  
}
