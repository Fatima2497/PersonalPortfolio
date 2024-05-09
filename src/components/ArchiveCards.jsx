import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

const ArchiveCards = ({title, desc, listItem, link}) => {
  return (
   
     <div className='w-full h-90 rounded-lg bg-[#112240] p-7 flex flex-col  gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
        <div className='flex justify-between items-center'>
            <FaRegFolder className='text-4xl text-textGreen'/>
            <a href={link} target='_blank'><RxOpenInNewWindow className='text-4xl hover:text-textGreen'/></a>
        </div>
        <div>
            <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
            <p className='text-sm mt-3'>{desc}</p>
        </div>
        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
           {
            listItem.map((item,i)=>{
                <li key={i}>{item}</li>
            })
           }
        </ul>
    </div>

  )
}

export default ArchiveCards