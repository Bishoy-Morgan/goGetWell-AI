'use client'

import React from 'react'
import FormComp from './FormComp'
import { motion } from 'framer-motion'

const Form = () => {

    return (
        <section 
        id='contact'
        className='purple-gradient-rightTop w-full py-32 flex items-center'
        >
            <div 
            className='container flex justify-between gap-x-10 '
            >
                <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='w-1/2 flex flex-col '
                >
                    <h2>Get in touch</h2>
                    <span className='p2 mt-10 mb-16 text-gray  '>
                        Got questions about GoGetWell.AI?
                        <br/>
                        Our team is here to help. Contact us for quick and friendly support.
                    </span>
                    <span className='p2 px-4 border-l-2 border-purple text-white mb-10 '>
                        +91 9811396858
                    </span>
                    <a href='mailto:hello@gogetwell.ai' className='p2 px-4 border-l-2 border-purple text-white '>
                        hello@gogetwell.ai
                    </a>
                </motion.div>

                {/* Form Section  */}
                <FormComp 
                formName={"bottomForm"}
                />
            </div>
        </section>
    )
}

export default Form
