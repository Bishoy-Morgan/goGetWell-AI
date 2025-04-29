'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Experience: React.FC = () => {
    return (
        <section className='w-full py-32 flex items-center justify-center'>
            <div className='container flex flex-col items-center justify-center '>
                <motion.h2 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='font-bold text-center leading-tight'
                >
                    Transforming the Medical
                    <br/>
                    Tourism Experience
                </motion.h2>
                <motion.p 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: .2 }}
                className='p2 text-center text-gray max-w-2xl mt-10 '
                >
                    Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.
                </motion.p>
                <motion.p 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: .3 }}
                className='p2 text-center text-gray max-w-2xl mt-6 '
                >
                    Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.
                </motion.p>
            </div>
        </section>
    )
}

export default Experience
