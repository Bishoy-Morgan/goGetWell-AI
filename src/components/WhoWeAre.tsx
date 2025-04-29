'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Services from './Services'
import Image from 'next/image'
import platform from '@/public/images/platform.png'


const AboutUs: React.FC = () => {
    return (
        <section 
        id='about'
        className="purple-gradient-rightBottom w-full flex flex-col items-center justify-center py-32"
        >
            <div className='container flex items-center justify-center gap-x-10 '>
                <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='w-1/2 flex flex-col justify-start'
                >
                    <span className='p2 inline-block font-bold text-purple '>Discover Our Journey</span>
                    <h2 className='my-10 text-white'>Who We Are</h2>
                    <p className='p2 text-gray'>
                        We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
                    </p>
                    <p className='p2 mt-4 text-gray'>
                        Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: .5 }}
                    className='relative w-1/2 h-[70vh] max-h-[40rem]'
                >
                    <Image 
                    src={platform}
                    alt='Our Platform'
                    fill
                    quality={100}
                    priority
                    objectFit='cover'
                    className='object-cover overflow-visible'
                    />
                </motion.div>
            </div>
            <Services />
        </section>
    )
}

export default AboutUs
