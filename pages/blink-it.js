import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import blinkImg from '../public/assets/store.png'
import { motion } from 'framer-motion';

const Mingo = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={blinkImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Blink It - Ecommerce Application</h2>
                    <h3>React JS / React Context API / Firestore /Material UI / Lazy Loading</h3>
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
                        Blink It is an ecommerce web application where you can blackpink t-shirt, album & accessories. It is build using React, React Context API,
                        Firebase Firestore, Firebase Rest Authentication, Material UI, React-Image-Magnify, React-elastic-carousel & React lazy loading. I build
                        this project to demonstrate my knowledge in React, React Context API, Firestore database, API Integration & React lazy loading.User can sign-up & login using email & password.
                        User can add to cart/remove from cart product, increase quantity, remove product , remove all product & add a review for the product.
                        User can  view cart, search for the product,filter by category & can see magnify image of the product .
                    </p>
                    <div className='mt-10 mb-5'>
                        <p className='font-bold mb-2 '>
                            Functionalties:-
                        </p>
                        <li>Login / Logout & Sign-up Authentication.</li>
                        <li>Add to cart & remove from cart.</li>
                        <li>Increase & decrease quantity.</li>
                        <li>Remove all product.</li>
                        <li>Add review.</li>
                        <li>View all review.</li>
                        <li>Search product.</li>
                        <li>Filter by category.</li>
                        <li>See magnify image of product.</li>
                        <li>Pagination.</li>
                        <li>Carousel.</li>
                        <li>View Cart</li>
                        <li>View total amount.</li>
                        <li>Persistent data.</li>
                        <li>Users specific</li>
                    </div>
                    <Link
                        href='https://github.com/Dilkashpeshimam18/react-ecommerce'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </Link>
                    <Link
                        href='https://blinkit-ecommerce-dcfe7.web.app/'
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
                                <RiRadioButtonFill className='pr-1' /> React Context API
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase Firestore
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase Rest Authentication
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React Lazy Loading
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-Image-Magnify
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-Elastic-Carousel
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-Hooks
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-Router-Dom
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> API Integration
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Axios
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Local Storage
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Material UI
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> CSS
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                >
                    <Link href='/#projects'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}

export default Mingo