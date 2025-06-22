import React from 'react'
import { HERO_CONTENT } from '../constants'
import shaanPhoto from "../assets/shaanProfilePhoto.jpg"
import { motion } from "motion/react"
const HeroSection = () => {
    return (
        <div className='border-b border-neutral-900 pb-2 lg:mb-32 -mt-12 lg:mt-0'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className='pb-8 lg:pb-10 text-6xl font-thin tracking-tight  lg:mt-16 lg:text-6xl'>Shaan Yadav</motion.h1>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="text-transparent tracking-tight bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }} className='my-4 max-w-xl py-4 font-light tracking-tighter'>{HERO_CONTENT.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 lg:p-4 my-6 lg:my-4 lg:-mt-6"
                >
                    <div className="flex justify-center">
                        <img
                            src={shaanPhoto}
                            alt="Shaan Photo"
                            className="rounded-2xl 
             shadow-[0_0_30px_rgba(147,51,234,0.4)] 
             hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]
             transition-shadow duration-500 h-90 w-100 lg:h-110 lg:w-120 object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection