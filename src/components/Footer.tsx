import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from '@/public/icons/twitter.svg'
import linkedin from '@/public/icons/linkedin.svg'


const Footer: React.FC = () => {
    return (
        <footer className='w-full pt-20 pb-10 '>
            <div className='container flex flex-col justify-center items-center'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <h4 className='text-center'>
                        Reach Out to Us
                    </h4>
                    <ul className='w-1/3 mt-10 mb-20 flex items-center justify-center gap-x-10'>
                        <Link 
                        href={`https://x.com/gogetwellai`}
                        target='_blank'
                        className='hover:-translate-y-1 hover:scale-105 transition-all duration-200 ease-in-out'
                        >
                            <Image 
                            src={twitter}
                            alt='Twitter X'
                            width={30}
                            height={30}
                            quality={100}
                            priority
                            />
                        </Link>
                        <Link 
                        href={`https://www.linkedin.com/company/gogetwellai/`}
                        target='_blank'
                        className='hover:-translate-y-1 hover:scale-105 transition-all duration-200 ease-in-out'
                        >
                            <Image 
                            src={linkedin}
                            alt='LinkedIn'
                            width={30}
                            height={30}
                            quality={100}
                            priority
                            />
                        </Link>
                    </ul>
                    <ul className='w-full mb-8 text-sm flex items-center justify-between'>
                        <Link 
                        href={`#`}
                        className='text-gray hover:text-white'
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                        href={`#`}
                        className='text-gray hover:text-white'
                        >
                            Terms of Service
                        </Link>
                        <Link 
                        href={`#`}
                        className='text-gray hover:text-white'
                        >
                            Pricing Policy
                        </Link>
                        <Link 
                        href={`#`}
                        className='text-gray hover:text-white'
                        >
                            Editor Policy
                        </Link>
                    </ul>
                    <span className='text-white/30 text-xs'>©2025 gogetwell.ai</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
