'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'
import img1 from '@/public/images/2.jpg'
import img2 from '@/public/images/3.jpg'
import img3 from '@/public/images/4.jpg'
import { motion } from 'framer-motion'

type MainStat = {
    number: string;
    title: string;
}

interface StatsProps {
    mainStats: MainStat[]
    img: StaticImageData
    imgSubtitle: string
}

function MissionAndChallenge() {
    const stats: StatsProps[] = [
    { 
        mainStats: [
        { number: '2100+', title: 'Qualified Doctors' },
        { number: '30%', title: 'Growth' },
        { number: '95%', title: 'Satisfaction' }
        ],
        img: img1,
        imgSubtitle: 'Top-rated specialists offering expertise and care worldwide.'
    },
    { 
        mainStats: [
        { number: '1000+', title: 'Hospitals' },
        { number: '0.1%', title: 'Mistake Rate' },
        { number: '85%', title: 'Coverage' }
        ],
        img: img2,
        imgSubtitle: 'Partnered with world-class hospitals for high-quality treatment.'
    },
    { 
        mainStats: [
        { number: '800+', title: 'Treatment Plans' },
        { number: '98%', title: 'Approval' },
        { number: '12%', title: 'Annual Increase' }
        ],
        img: img3,
        imgSubtitle: 'Customized care plans for optimal patient outcomes.'
    }
    ]


    const [textSliderRef, textSlider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
        },
        drag: false,
        renderMode: 'performance',
    })

    const [imageSliderRef, imageSlider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
        },
        drag: false,
        renderMode: 'performance',
    })

    // Text autoplay (3s)
    useEffect(() => {
        const interval = setInterval(() => {
            textSlider.current?.next()
        }, 10005)
        return () => clearInterval(interval)
    }, [textSlider])

    // Image autoplay (5s)
    useEffect(() => {
        const interval = setInterval(() => {
            imageSlider.current?.next()
        }, 10000)
        return () => clearInterval(interval)
    }, [imageSlider])

    return (
        <section className="purple-gradient-rightTop w-full flex flex-col gap-y-28 items-center pb-16">
            <div className="container flex flex-col items-start">
                <motion.span 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="p2 font-bold text-purple"
                >
                    Our Commitment to a Better Future
                </motion.span>
                <motion.h2 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: .5 }}
                className="my-10 text-white"
                >
                    Driving Innovation
                    <br />
                    with Purpose
                </motion.h2>
                <motion.p 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: .8 }}
                className="p2 text-gray max-w-3xl"
                >
                    Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
                </motion.p>
                <motion.p 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: .8 }}
                className="p2 mt-4 text-gray max-w-3xl"
                >
                    We strive to become the leading platform for healthcare tourism management and digital transformation.
                </motion.p>
            </div>

            {/* Two separate sliders */}
            <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="container w-full flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-start "
            >
                {/* Text Slider */}
                <div 
                ref={textSliderRef} 
                className="keen-slider transition-all duration-1000 ease-in-out w-full lg:!w-1/3 lg:h-[60vh] !max-h-[40rem] "
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="keen-slider__slide w-full h-full flex flex-col gap-y-8 lg:gap-y-0 justify-between">
                            {stat.mainStats.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-start lg:gap-y-4">
                                    <h3 className="px-4 font-bold tracking-wide border-l-2 lg:pt-1 border-purple text-white">
                                        {item.number}
                                    </h3>
                                    <p className="p2 pl-4 text-gray tracking-widest">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>

                {/* Image Slider */}
                <motion.div
                ref={imageSliderRef}
                className="keen-slider transition-all duration-1000 ease-in-out w-full lg:!w-2/3 relative h-[30vh] lg:h-[70vh] !max-h-[40rem]"
                >
                    {stats.map((stat, index) => {
                        const gradientColors = [
                            'from-orange-500',
                            'from-sky-800',
                            'from-neutral-800',
                        ]
                        return (
                        <div key={index} className="keen-slider__slide relative h-full ">
                            <Image
                            src={stat.img}
                            alt="state Images"
                            fill
                            className="object-cover rounded-xl"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors[index]} to-transparent rounded-xl`}>
                                <h4 className='absolute bottom-[5%] left-[3%] font-bold max-w-md '>
                                    {stat.imgSubtitle}
                                </h4>
                            </div>
                        </div>
                        )
                    })}
                </motion.div>

            </motion.div>
        </section>
    )
}

export default MissionAndChallenge
