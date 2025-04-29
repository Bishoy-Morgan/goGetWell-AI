'use client'

import Image from 'next/image'
import React from 'react'
import user from '@/public/icons/user.svg'
import email from '@/public/icons/email.svg'
import message from '@/public/icons/message.svg'
import { motion } from 'framer-motion'

interface FormCompProps {
    formName: string
}

const FormComp: React.FC<FormCompProps> = ({ formName }) => {
    return (
        <motion.form
        id="formComp"
        name={formName}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="w-full lg:w-1/2 mt-16 lg:mt-0 lg:p-8 flex flex-col gap-y-6 rounded-xl bg-black/10"
        >
            {/* Name Input */}
            <div className="group relative w-full">
                <Image
                src={user}
                alt="User Icon"
                width={20}
                height={20}
                className="absolute -left-6 opacity-0 group-hover:opacity-100 group-hover:left-3 transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2"
                />
                <input
                className="inputStyle "
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                aria-label="Name"
                />
            </div>

            {/* Email Input */}
            <div className="group relative w-full">
                <Image
                src={email}
                alt="Email Icon"
                width={20}
                height={20}
                className="absolute -left-6 opacity-0 group-hover:opacity-100 group-hover:left-3 transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2"
                />
                <input
                className="inputStyle "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                aria-label="Email"
                />
            </div>

            {/* Message Textarea */}
            <div className="group relative w-full">
                <Image
                src={message}
                alt="Message Icon"
                width={20}
                height={20}
                className="absolute -left-6 opacity-0 group-hover:opacity-100 group-hover:left-3 transition-all duration-300 ease-in-out top-4"
                />
                <textarea
                className="inputStyle  pt-3"
                name="message"
                id="message"
                placeholder="Message"
                rows={5}
                required
                aria-label="Message"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="primary-btn max-w-32 mt-8 mb-4"
            >
                Submit
            </button>
        </motion.form>
    )
}

export default FormComp
