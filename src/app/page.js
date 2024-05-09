"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import LeftSide from '@/components/LeftSide'
import { motion } from 'framer-motion'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'>
      <Navbar />
      <div className='w-full h-[88vh] xl:flex xl:flex-row  items-center gap-20 justify-between'>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
          <LeftSide />
        </motion.div>
        <div className='mx-auto w-full p-4 h-[88vh] '>
          {/* Banner */}
          <Banner />
          {/* About */}
          <About />
          {/* Experience */}
          <Experience />
          {/* Project */}
          <Projects />
          {/* Archive */}
          <Archive />
          {/* Contact */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
        
      </div>
    </main>
  )
}
