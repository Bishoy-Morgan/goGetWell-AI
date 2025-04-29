'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import analysis from '@/public/images/solutions/1.jpg'
import query from '@/public/images/solutions/2.jpg'
import database from '@/public/images/solutions/3.jpg'
import payment from '@/public/images/solutions/4.jpg'
import lead from '@/public/images/solutions/10.jpg'
import ai from '@/public/images/solutions/6.jpg'
import support from '@/public/images/solutions/7.jpg'
import marketing from '@/public/images/solutions/8.jpg'
import smart from '@/public/images/solutions/5.jpg'
import Arrow from './Arrow'


interface SolutionsProps {
    id: number
    img: StaticImageData
    title: string
    description: string
}

const Solutions: React.FC = () => {
    const solutions = [
        {
            id: 1,
            img: ai,
            title: 'Custom AI-Powered Website',
            description: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        },
        {
            id: 2,
            img: smart,
            title: 'Enhanced Patient Conversion',
            description: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        },
        {
            id: 3,
            img: query,
            title: 'Real-Time Query Handling',
            description: 'Instant response system for patient inquiries with AI-powered chat support.',
        },
        {
            id: 4,
            img: analysis,
            title: 'Medical Report Analysis',
            description: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        },
        {
            id: 5,
            img: lead,
            title: 'Improved Lead Generation',
            description: 'Data-driven lead generation strategies to attract and engage potential patients.',
        },
        {
            id: 6,
            img: database,
            title: 'Comprehensive Healthcare Database',
            description: 'Interactive tools to enhance patient engagement and satisfaction.',
        },
        {
            id: 7,
            img: support,
            title: 'Multilingual Support',
            description: 'Breaking language barriers with comprehensive multilingual communication tools.',
        },
        {
            id: 8,
            img: payment,
            title: 'Seamless Payment Handling',
            description: 'Secure and efficient payment processing for medical services globally.',
        },
        {
            id: 9,
            img: marketing,
            title: 'Marketing And SEO Support',
            description: 'Optimized digital presence with advanced SEO and marketing strategies.',
        }
    ]

    return (
        <section className='purple-gradient-leftTop w-full flex flex-col items-center justify-start py-16'>
            <div className='container flex flex-col items-center justify-start'>
                <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='text-center mb-10'
                >
                    Strategic Solutions
                    <br />
                    for Lasting Impact
                </motion.h2>
                <div className='w-4/5 flex items-center 2xl:justify-center gap-8 mt-8'>
                    
                    {/* First container for odd indexed solutions */}
                    <div className='w-1/2 2xl:w-2/5 flex flex-col space-y-12 '>
                        {solutions.filter((solution, index) => index % 2 !== 0).map((solution: SolutionsProps) => (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className={`group h-[75vh] 2xl:h-[50vh] max-h-[30rem] rounded-xl shadow shadow-darkPurple flex flex-col items-center justify-center`}
                            >
                                <div className='relative w-full h-[50vh] max-h-[20rem] transition-all duration-300 ease-in-out '>
                                    <Image
                                        src={solution.img}
                                        alt={solution.title}
                                        fill
                                        priority
                                        quality={100}
                                        objectFit='cover'
                                        sizes="100vw"
                                        className="object-cover rounded-t-xl"
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full bg-darkPurple/15 '></div>
                                </div>
                                <div className='w-full h-[30vh] group-hover:h-[35vh] flex flex-col p-6 transition-all duration-300 ease-in-out '>
                                    <h4>{solution.title}</h4>
                                    <p className='p3 mt-2'>{solution.description}</p>
                                    <button className='translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 w-fit pt-2 flex items-center gap-x-2 rounded-xl transition-all duration-300 ease-in-out '>
                                        <span className='text-sm font-bold text-purple'>
                                            Dicover more
                                        </span>
                                        <Arrow 
                                            width={12}
                                            height={12}
                                            fill={'#ad5389'}
                                            style={`-rotate-90 transition-all duration-500 ease-in-out`}
                                        />
                                    </button>  
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Second container for even indexed solutions */}
                    <div className='w-1/2 2xl:w-2/5 flex flex-col space-y-12 '>
                        {solutions.filter((solution, index) => index % 2 === 0).map((solution: SolutionsProps) => (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className={`group h-[75vh] 2xl:h-[50vh] max-h-[30rem] rounded-xl shadow shadow-darkPurple flex flex-col items-center justify-center`}
                            >
                                <div className='relative w-full h-[50vh] max-h-[20rem] transition-all duration-300 ease-in-out '>
                                    <Image
                                        src={solution.img}
                                        alt={solution.title}
                                        fill
                                        priority
                                        quality={100}
                                        objectFit='cover'
                                        sizes="100vw"
                                        className="object-cover rounded-t-xl"
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full bg-darkPurple/15 '></div>
                                </div>
                                <div className='w-full h-[30vh] group-hover:h-[35vh] flex flex-col p-6 transition-all duration-300 ease-in-out'>
                                    <h4>{solution.title}</h4>
                                    <p className='p3 mt-2'>{solution.description}</p>
                                    <button className='translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 w-fit pt-2 flex items-center gap-x-2 rounded-xl transition-all duration-300 ease-in-out '>
                                        <span className='text-sm font-bold text-purple'>
                                            Dicover more
                                        </span>
                                        <Arrow 
                                            width={12}
                                            height={12}
                                            fill={'#ad5389'}
                                            style={`-rotate-90 transition-all duration-500 ease-in-out`}
                                        />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions
