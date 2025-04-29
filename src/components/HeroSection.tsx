'use client'
import React from 'react'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className='purple-gradient-leftBottom w-full h-dvh max-h-[1080px] flex flex-col items-center justify-center'
        >
            <h1 className='text-center mt-16'>AI front office<br />for healthcare agents</h1>
            <span className='p1 inline-block text-gray text-center mt-8 mb-16'>
                Create <span className='font-bold text-purple'>AI Store</span> in 2 mins<br />Scale with Digital Marketing
            </span>
            <button className='primary-btn'>Start Now</button>
        </motion.section>
    )
}

export default HeroSection
