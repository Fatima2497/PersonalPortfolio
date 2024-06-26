"use client"
import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactJS from './works/ReactJS'
import Zysoftec from './works/Zysoftec'

const Experience = () => {

    const [workIbra, setWorkIbra] = useState(true)
    const [workZysoftec, setWorkZysoftec] = useState(false)

    const handleIbranext = () => {
        setWorkIbra(true)
        setWorkZysoftec(false)
    }

    
    const handleZysoftec = () => {
        setWorkIbra(false)
        setWorkZysoftec(true)
    }
  return (
    <section 
    id='experience'
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
        <SectionTitle title="Where I have Worked" />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li onClick={handleIbranext} 
                className={`
                ${workIbra ? 
                "border-l-textGreen text-textGreen" : 
                "border-l-hoverColor text-textDark"} 
                border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Ibranext Technologies</li>
                <li onClick={handleZysoftec} 
                className={`
                ${workZysoftec ? 
                "border-l-textGreen text-textGreen" : 
                "border-l-hoverColor text-textDark"} 
                border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Zysoftec</li>
            </ul>
            {workIbra &&  <ReactJS />}
            {workZysoftec && <Zysoftec />}
        </div>
    </section>
  )
}

export default Experience