import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (name != '' && email != '' && message != '') {
                let data = {
                    name: name,
                    email: email,
                    message: message
                }
                const response = await axios.post('https://portfolio-1e3c0-default-rtdb.firebaseio.com/contact.json', data)
                    .then((res) => {
                        console.log(res)
                        setName('')
                        setMessage('')
                        setEmail('')
                        alert('Your response is submiited. Will get back to you soon!')
                    })



            } else {
                alert('Please enter the value of all the fields!')

            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px]  m-auto px-2 py-16 w-full '>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Contact
                    </p>
                    <h2 className='py-4'>Get In Touch</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className=' grid  lg:grid-cols-5  gap-8 mt-3'>

                    <div className='col-span-4  w-full h-[500px] shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows='4'
                                        name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </motion.div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='#db2777'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact