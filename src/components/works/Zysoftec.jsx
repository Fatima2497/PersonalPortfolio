import React from 'react'
import { TiArrowForward } from 'react-icons/ti'
import { motion } from 'framer-motion'

const Zysoftec = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}}
    className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Frontend Developer Internee <span className='text-textGreen tracking-wider'>@Zysoftec</span></h3>
      <p className='text-sm mt-1 font-medium text-textDark'>July 2023 - Oct 2023</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Collaborated with the design team to translate visual mockups into responsive website layouts using HTML and CSS.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Assisted in the maintenance and improvement of the company&apos;s website by updating content, fixing bugs, and ensuring cross-browser compatibility.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Gained hands-on experience with version control systems (e.g., Git) for collaborative development.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Adapted to new technologies and frameworks as required, such as JavaScript libraries (e.g., React) framework(e.g. Next JS) and CSS framework (e.g., Tailwind)
        </li>
      </ul>
    </motion.div>
  )
}

export default Zysoftec