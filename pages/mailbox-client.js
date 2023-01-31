import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import mailbox from '../public/assets/mail.png'
import { motion } from 'framer-motion';

const MailboxClient = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={mailbox}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Mail-Box Client</h2>
                    <h3>React JS / Redux / Custom Hooks / Bootstrap / React-Quill / Email JS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Mailbox-client is used to compose email to anyone. It is build using React, Redux, Custom Hooks , Bootstrap , React Quill & Email JS.
                        I build this project to demonstrate knowledge working in React, Redux , Custom Hooks & Bootstrap. User can sign-up & login using email & password. User can send email to anyone using the text editor build using React-Quill & email is send using Email JS.
                        User can view all received, sent & unread mail.

                    </p>
                    <div className='mt-10 mb-7'>
                        <p className='font-bold mb-2 '>
                            Functionalties:-
                        </p>
                        <li>Login / Logout & Sign-up Authentication.</li>
                        <li>Send mail using mailbox text editor.</li>
                        <li>View all received mail. </li>
                        <li>View all unread mail.</li>
                        <li>View all sent mail.</li>
                        <li>View single mail.</li>
                        <li>Real-time mail received</li>
                        <li>Blue dot icon on unread mail</li>
                        <li>Persistent data</li>
                        <li>Users specific</li>

                    </div>
                    <Link
                        href='https://github.com/Dilkashpeshimam18/mailBoxClient-react'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>

                    </Link>


                    <Link
                        href='https://mail-box-client-react.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </Link>

                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 '>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Redux
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Custom Hooks</p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Email JS</p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-Quill</p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase Real-time Database
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase Rest Authentication
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Bootstrap
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> API Integration
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />React Hooks
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-router
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />Axios
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />Local storage
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}>
                    <Link href='/#projects'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}

export default MailboxClient