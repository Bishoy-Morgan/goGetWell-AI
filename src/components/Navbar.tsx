'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo.png'
import Link from 'next/link'

const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

const Navbar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-16 2xl:h-20 z-50 flex items-center justify-center backdrop-blur-3xl">
            <div className='container h-full flex items-center justify-between'>
                <Link 
                href={`/`}
                className='w-1/3 flex items-center justify-start'
                >
                    <Image 
                        src={logo}
                        alt='Logo'
                        width={160}
                        height={80}
                        priority
                        quality={100}
                    />
                </Link>
                <ul className='w-1/3 flex items-center justify-center gap-x-8'>
                    <li 
                    onClick={() => scrollToSection('about')} 
                    className='group flex items-center justify-center gap-2 text-sm text-gray hover:text-white cursor-pointer'
                    >
                        <span className='inline-block'>About Us</span>
                    </li>
                    <li 
                    onClick={() => scrollToSection('faqs')} 
                    className='group flex items-center justify-center gap-2 text-sm text-gray hover:text-white cursor-pointer'
                    >
                        <span className='inline-block'>FAQs</span>
                    </li>
                    <li 
                    onClick={() => scrollToSection('contact')} 
                    className='group flex items-center justify-center gap-2 text-sm text-gray hover:text-white cursor-pointer'
                    >
                        <span className='inline-block'>Contact</span>
                    </li>
                </ul>
                <div className='w-1/3 flex items-center justify-end gap-4'>
                    <Link 
                    href={`/login`} 
                    className='text-sm text-gray hover:text-white'
                    >
                        Login
                    </Link>
                    <button className='primary-btn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
