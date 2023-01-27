import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
const Hero = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='flex justify-center items-center p-3 max-w-[1240px] w-full h-full mx-auto'>
                <div>
                    <h1 className='  font-extrabold text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I am Dilkash</h1>
                    <h2 className='text-gray-600  py-3'>Frontend Developer</h2>
                    <div className='flex justify-between items-center m-auto max-w-[280px] py-4'>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>

                            <SiLeetcode />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>

                            <AiOutlineMail />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero