import React from 'react'
import Head from 'next/head'
import { Hero, Header, About, WorkExperience } from '@components'

export default function Home (): JSX.Element {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Alex&apos; Portfolio</title>
      </Head>

      <Header />

      <main>
        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        {/* Experience */}
        <section>
          <WorkExperience />
        </section>

        {/* Skills */}

        {/* Project */}

        {/* Hobbies */}

        {/* Contact Me */}

        {/* Footer */}

      </main>

    </div>
  )
}
