import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full shadow-xl h-20 z-[100]'>
            <div className='flex justify-end items-center w-full h-full px-2 2xl:px-16'>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Project</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 uppercase text-sm hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>

            </div>
            <div className={
                nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }>
                <div className={
                    nav
                        ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-end'>

                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose size={10} />
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    About
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Skills
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Projects
                                </li>
                            </Link>
                            <Link href='/resume'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Resume
                                </li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex items-center justify-between my-5 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/fireclint'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='/#contact'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='/resume'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Navbar