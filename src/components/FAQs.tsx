'use client'

import React, { useState } from 'react'
import Arrow from './Arrow'
import { motion, AnimatePresence } from 'framer-motion'

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    interface FAQProps {
        question: string;
        answer: string;
    }

    const faqs: FAQProps[] = [
        {
            question: 'What is gogetwell.ai?',
            answer: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.'
        },
        {
            question: 'What is the AI Front Office for Healthcare Agents?',
            answer: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.'
        },
        {
            question: 'How does the AI Agent assist me in my healthcare business?',
            answer: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.'
        },
        {
            question: 'Can I customize the website for my healthcare services?',
            answer: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.'
        },
        {
            question: 'How does this platform support independent healthcare facilitators like me?',
            answer: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.'
        },
        {
            question: 'How does the platform help me manage patient leads?',
            answer: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.'
        },
        {
            question: 'Is it easy to integrate the platform with the hospitals I work with?',
            answer: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.'
        },
        {
            question: 'Is the platform secure and compliant with healthcare regulations?',
            answer: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patient's data is always protected."
        },
        {
            question: 'How quickly can I get started with the platform?',
            answer: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.'
        },
        {
            question: 'What kind of customer support is available if I need help?',
            answer: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.'
        },
        {
            question: 'How does the platform help me attract more patients?',
            answer: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.'
        }
    ]

    return (
        <section 
        id='faqs'
        className='purple-gradient-rightBottom w-full flex items-center justify-center py-16'
    >
        <div className='container flex flex-col items-center justify-center'>
            <motion.span 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='p2 text-center font-bold text-purple '
            >
                Everything You Need to Know
            </motion.span>
            <motion.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className='text-center my-10'
            >
                FAQs
            </motion.h2>

            <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-full py-6 shadow-2xl shadow-black rounded-xl'
            >
                {faqs.map((item: FAQProps, index: number) => (
                    <div key={index} className='flex flex-col py-4 cursor-pointer'>
                        <div 
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className='group flex justify-between '
                        >
                            <span className='p2 mb-2 px-4 font-bold flex space-x-4 group-hover:border-l-8 border-purple rounded-l transition-all duration-100 ease-in-out'>
                                {item.question}
                            </span>
                            <Arrow 
                                fill={activeIndex === index ? '#ad5389' : '#ffffffcc'}
                                style={`${activeIndex === index ? 'rotate-180' : ''} transition-all duration-500 ease-in-out mr-8`}
                            />
                        </div>

                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className='overflow-hidden'
                                >
                                    <span className='py-6 px-8 text-sm text-gray max-w-5xl block'>
                                        {item.answer}
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
    )
}

export default FAQs
