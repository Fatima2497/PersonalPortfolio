"use client"
import React, { useState } from 'react'
import ArchiveCards from './ArchiveCards'
import { motion } from 'framer-motion'

const Archive = () => {
    const [showMore, setShowMore] = useState(false)
  return (
    <div className='max-w-container mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center '>
            <h2 className='text-3xl font-titleFont font-semibold'>Other Projects</h2>
            <p className='text-sm font-titleFont text-textGreen'>View the archive</p>
        </div> 
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ArchiveCards title="A captivating landing page designed for a client, crafted with HTML5, CSS3, and Bootstrap." desc="I've structured the page for optimal user engagement and accessibility. CSS3 brings the design to life, incorporating modern styles and layouts to captivate visitors. Leveraging the power of Bootstrap, I've ensured responsiveness across all devices, providing a seamless experience for every user.This landing page perfectly embodies the client's brand identity and effectively communicates their message to potential customers." link="https://fabulous-toffee-87229e.netlify.app/" listItem={["HTML5", "CSS3", "Bootstrap"]} />
            <ArchiveCards title="A to-do app built with HTML, CSS, and JavaScript, boasting seamless local storage functionality." desc="With HTML providing the structure and CSS adding visual appeal, JavaScript takes the lead by enabling dynamic features like task creation, completion, and deletion. Notably, this app leverages browser's local storage capabilities, allowing users to store their to-do list locally. This means your tasks persist even after closing the browser, ensuring convenient and hassle-free task management." link="https://fatima2497.github.io/TO_DO_APP/" listItem={["HTML5","CSS3","JavaScript"]} />
            <ArchiveCards title="An ECommerce platform crafted with the MERN stack." desc="Seamlessly integrating MongoDB, Express.js, React.js, and Node.js, this platform offers a dynamic and intuitive shopping experience. From browsing products to secure checkout, every step is designed for efficiency and ease. Explore this project to see how the MERN stack empowers modern eCommerce solutions." link="https://github.com/Fatima2497/gadgetHub" listItem={["MONGODB","EXPRESSJS","REACTJS","NODEJS"]} />
            {
            showMore && (
                <>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}}>
                    <ArchiveCards title="Portfolio" desc="Presenting my dynamic personal portfolio, meticulously crafted with Tailwind CSS and Next.js. This combination of cutting-edge technologies ensures a seamless and visually appealing user experience. Tailwind CSS enables rapid styling with its utility-first approach, while Next.js provides optimized performance and effortless navigation. Explore my portfolio to discover how these tools come together to showcase my skills and accomplishments in a modern and captivating manner." link="http://localhost:3000/" listItem={["Tailwind CSS","Next JS"]} />
                    </motion.div>
                </>
            )
        }
        </div>
        <div className='mt-12 flex items-center justify-center'>
           {
            showMore ?  <button 
            onClick={() => setShowMore(false)}
            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Show Less</button> :  <button 
            onClick={() => setShowMore(true)}
            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Show More</button>
           }
        </div>
    </div>
  )
}

export default Archive