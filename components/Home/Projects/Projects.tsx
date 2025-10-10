import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-32 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Latest <span className='text-cyan-300'> work</span> 
        </h1>
        <p className='mt-5 justify-center text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>Explore a collection of projects showcasing my expertise in front-end development</p>
        <div className='w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            <div data-aos="fade-up" data-aos-delay="0" data-aos-anchor-placement="top-center">
                <Image src='/images/p1.jpg' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern Finance Dashboard UI
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>Apps, UI/UX</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-center">
                <Image src='/images/p2.jpg' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern Finance Dashboard UI
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>Apps, UI/UX</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-center">
                <Image src='/images/p3.jpg' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern Finance Dashboard UI
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>Apps, UI/UX</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center">
                <Image src='/images/p4.jpg' alt='img' width={800} height={650} className='rounded-lg' />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern Finance Dashboard UI
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>Apps, UI/UX</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects