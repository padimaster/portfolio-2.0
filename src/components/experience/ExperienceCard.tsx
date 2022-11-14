import { motion } from 'framer-motion'
import React from 'react'

export default function ExperienceCard (): JSX.Element {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          opacity: 0,
          y: -100
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1, y: 0
        }}
        viewport={{ once: true }}
        className='w-20 h-20 rounded-full xl:w-[200px] object-cover object-center'
        src='./experience/horizon/logo.png'
        alt='Horizon Logo'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Founder</h4>
        <p className='font-bold text-2xl mt-1'>HORIZON Technology</p>
        <div className='flex space-x-2 my-2'>
          <picture>
            <img
              className='h-10 w-10 rounded-full'
              src="./experience/technologies/javascript.png"
              alt=""
            />
          </picture>
          <picture>
            <img
              className='h-10 w-10 rounded-full'
              src="./experience/technologies/javascript.png"
              alt=""
            />
          </picture>
          <picture>
            <img
              className='h-10 w-10 rounded-full'
              src="./experience/technologies/javascript.png"
              alt=""
            />
          </picture>
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work... - Present
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </article>
  )
}
