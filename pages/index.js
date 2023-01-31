import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import { AnimatePresence, motion } from 'framer-motion'
export default function Home() {
  return (
    <>
      <Head>
        <title>Dilkash | Front-end Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <AnimatePresence>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </AnimatePresence>


    </>
  )
}
