import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import expensoImg from '../public/assets/expenso.png'
import { motion } from 'framer-motion';


const Expenso = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={expensoImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Expenso - Expense Tracker</h2>
                    <h3>React JS / Redux / Chart JS / Firebase / Material UI</h3>
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
                        Expenso is an expense tracker built using React JS, Redux/ Redux thunk, Chart JS , Firebase & Material UI . I build this project
                        to demonstrate knowledge working in React JS & Redux . User can sign-up & login using email & password. User can add their income & their expenses. User can view their remaining balance
                        and  view line chart of all expenses, pie chart of income vs expense vs remaining balance & bar chart of expenses by category.
                        User can verify their email, update their profile & password. User can also update & delete the expense & can download the csv file of all expense if they want to.
                    </p>
                    <div className='mt-10 mb-5'>
                        <p className='font-bold mb-2 '>
                            Functionalties:-
                        </p>
                        <li>Login / Logout & Sign-up Authentication.</li>
                        <li>Forget password, verify email & update profile functionality.</li>
                        <li>Add, update & delete expense.</li>
                        <li>Add & update income, view total expense & total remaining balance</li>
                        <li>View all expense line chart.</li>
                        <li>View total expense by category bar chart.</li>
                        <li>View income vs expense vs remaining balance pie chart.</li>
                        <li>Download csv file of all expense.</li>
                        <li>Light & dark theme functionality.</li>
                        <li>Users specific</li>
                        <li>Persistent data</li>
                        <li>Responsive dashboard</li>

                    </div>

                    <Link
                        href='https://github.com/Dilkashpeshimam18/expenso-react'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </Link>
                    <Link
                        href='https://expenso-898b3.web.app/'
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
                                <RiRadioButtonFill className='pr-1' /> React JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Redux
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Redux Thunk
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Chart JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase Real-time Database
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase REST Authentication
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-csv
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Material UI
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Axios
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> API Integration
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React Hooks
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-router-dom
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Local storage
                            </p>

                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> CSS
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

export default Expenso