import { motion } from 'framer-motion'
import React from 'react'

export default function About (): JSX.Element {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1.5
        }}
        viewport={{ once: true }}
        src='./perfil.png'
        className='mb-1 md:mt-0 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
      />

      <div className='space-y-5 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
          background
        </h4>

        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam nisi, in delectus suscipit id quas sunt voluptatibus nobis.
          <span className='hidden md:inline'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam nisi, in delectus suscipit id quas sunt voluptatibus nobis.
          </span>
        </p>
      </div>
    </div>
  )
}
