import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const ReactJS = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}}
    className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Developer Trainee <span className='text-textGreen tracking-wider'>@Ibranext Technologies & Consultancy Services</span></h3>
      <p className='text-sm mt-1 font-medium text-textDark'>Oct 2023 - Feb 2024</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Designed and developed the front-end of applications and websites, consistently delivering exceptional user experiences.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Leveraged a strong skill set in React, JavaScript, HTML, and CSS to create responsive and user-friendly web interfaces.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Demonstrated proficiency in working with RESTful APIs, integrating third-party libraries, and utilizing various APIs to enhance application functionality.
        </li>
      </ul>
    </motion.div>
  )
}

export default ReactJS