import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                <div className='w-full h-screen text-center'>
                    <div

                        className='flex justify-center items-center p-3 max-w-[1240px] w-full h-full mx-auto'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ y: [-50, 0], opacity: 3 }}
                        >
                            <h1 className='  font-extrabold text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I am Dilkash</h1>
                            <h2 className='text-gray-600  py-3'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {

                                        typewriter

                                            .typeString("A Frontend Developer")

                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to code.")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to learn new technologies.")

                                            .start();
                                    }}
                                />
                            </h2>

                            {/* <h2 className='text-gray-600  py-3'>Frontend Developer</h2> */}
                            <div className='flex justify-between items-center m-auto max-w-[280px] py-5'>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a
                                        href='https://github.com/Dilkashpeshimam18'
                                        target={"_blank"}
                                        rel={"noreferrer"}

                                    ><FaGithub /></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a
                                        href='https://www.linkedin.com/in/dilkash-peshimam-80730b1a8/'
                                        target={"_blank"}
                                        rel={"noreferrer"}>
                                        <FaLinkedinIn />


                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a
                                        href='https://leetcode.com/DilkashPeshimam/'
                                        target={"_blank"}
                                        rel={"noreferrer"}>
                                        <SiLeetcode />

                                    </a>
                                </div>
                                <div onClick={() => window.location.href = 'mailto:dilkashpeshimam@gmail.com'} className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>

                                    <AiOutlineMail />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </motion.div>
        </>



    )
}

export default Hero