'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/images/logo.png'
import Link from 'next/link'
import menu from '@/public/icons/menu.svg'
import { motion, AnimatePresence } from 'framer-motion'



const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="fixed top-0 left-0 w-full h-16 2xl:h-20 z-50 flex items-center justify-center backdrop-blur-3xl">
            <div className='container h-full flex items-center justify-between'>
                {/* Logo */}
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

                {/* Hamburger Icon for mobile */}
                <div className="block lg:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none"
                    >
                        <Image 
                        src={menu}
                        alt='Menu'
                        width={46}
                        height={46}
                        />
                    </button>
                </div>

                {/* Menu items for Desktop */}
                <ul className='hidden lg:flex w-1/3 items-center justify-center gap-x-8'>
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

                {/* Login & Get Started buttons for Desktop */}
                <div className='hidden w-1/3 lg:flex items-center justify-end gap-4'>
                    <Link 
                        href={`/login`} 
                        className='text-sm text-gray hover:text-white'
                    >
                        Login
                    </Link>
                    <button className='primary-btn'>Get Started</button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden absolute z-50 top-16 left-0 w-full h-svh purple-gradient-leftBottom text-gray py-4"
                    >
                        <ul className="flex flex-col items-center gap-4">
                            <li 
                                onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
                                className='text-sm mt-8'
                            >
                                About Us
                            </li>
                            <li 
                                onClick={() => { scrollToSection('faqs'); setIsMenuOpen(false); }} 
                                className='text-sm '
                            >
                                FAQs
                            </li>
                            <li 
                                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
                                className='text-sm '
                            >
                                Contact
                            </li>
                            <li className="text-sm mt-20">
                                <Link href="/login">Login</Link>
                            </li>
                            <li className="text-sm ">
                                <button className='primary-btn'>Get Started</button>
                            </li>
                        </ul>
                    </motion.div>
                )}
                </AnimatePresence>

        </div>
    )
}

export default Navbar
