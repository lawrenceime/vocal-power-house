// import React from 'react'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div className='relative w-full h-[500px] bg-black '>
//         <div className='flex flex-col justify-center w-[50%] ml-10 h-[100%] gap-2'>
//             <p className='text-4xl font-bold text-white '>The Vocal Powerhouse</p>
//             <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, suscipit.</p>
//             <button className='bg-white rounded-[5px] h-[56px] w-[120px]'>Register Now</button>
//         </div>
//     <Image className='absolute right-20 top-1/2'  src="/assets/voicer_over_artiste.jpeg" width={400} height={500} alt='voice over artiste'/>
//     </div>
//   )
// }

// export default Hero     

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative w-full h-[500px]'>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/assets/bearded_voice_actor.jpg" 
          layout="fill" 
          objectFit="cover" 
          alt="Hero background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className='relative flex flex-col justify-center w-[50%] ml-20 h-[100%] gap-2 z-10'>
        <p className='text-6xl font-bold text-white'>The Vocal Powerhouse</p>
        <p className='text-white'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, suscipit.
        </p>
        <button className='bg-white rounded-[5px] h-[50px] w-[150px]'>Register Now</button>
      </div>

      {/* Foreground Image */}
      <Image 
        className='absolute right-20  transform -translate-y-1/2 z-10'  
        src="/assets/voicer_over_artiste.jpeg" 
        width={400} 
        height={500} 
        alt='Voice over artiste'
      />
    </div>
  )
}

export default Hero
