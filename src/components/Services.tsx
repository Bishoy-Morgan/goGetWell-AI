"use client";

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import chat from '@/public/icons/chat.gif'
import modern from '@/public/icons/modern.gif'
import ai from '@/public/icons/ai.gif'
import time from '@/public/icons/time.gif'
import layer from '@/public/icons/layer.gif'
import health from '@/public/icons/health.gif'

interface ServicesProps {
    id: number;
    title: string;
    description: string;
    icon: StaticImageData;
}

const Services: React.FC = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 4, 
            spacing: 30,
        },
        loop: true,
        renderMode: "performance",
        drag: true,
        created(slider) {
            setInterval(() => {
                slider.next()
            }, 5000) 
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: { perView: 1.5, spacing: 20 }, 
            },
        }
    });

    const services: ServicesProps[] = [
        {
            id: 1,
            title: "Modern Solutions",
            description: "Leveraging AI technology for healthcare",
            icon: modern
        },
        {
            id: 2,
            title: "Patient-Centric",
            description: "Personalized healthcare experiences",
            icon: health
        },
        {
            id: 3,
            title: "AI-Powered Solutions",
            description: "Optimizing operations with advanced technology",
            icon: ai
        },
        {
            id: 4,
            title: "Growth Focus",
            description: "Maximizing revenue and opportunities",
            icon: layer
        },
        {
            id: 5,
            title: "Efficient Operations",
            description: "Streamlined booking and management",
            icon: time
        },
        {
            id: 6,
            title: "Enhanced Support",
            description: "Improved patient communication",
            icon: chat
        }
    ];

    return (
        <section className="container mx-auto lg:pt-32">
            <div ref={sliderRef} className="keen-slider">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className="keen-slider__slide flex flex-col py-6"
                    >
                        <Image 
                            src={service.icon}
                            alt={service.title}
                            width={64}
                            height={64}
                            className="object-cover object-center mb-4"
                            priority
                        />
                        <span className="p2 mb-2 inline-block font-bold border-l-2 border-purple px-4 text-white">{service.title}</span>
                        <p className="text-sm text-gray px-4">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
