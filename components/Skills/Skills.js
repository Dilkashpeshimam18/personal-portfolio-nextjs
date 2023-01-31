import React from 'react'
import Image from 'next/image'
import html from '../../public/assets/html.png'
import css from '../../public/assets/css3.png'
import js from '../../public/assets/javascript.png'
import react from '../../public/assets/react.png'
import redux from '../../public/assets/redux.png'
import typescript from '../../public/assets/typescript.png'
import firebase from '../../public/assets/firebase.png'
import next from '../../public/assets/nextjs.png'
import bootstrap from '../../public/assets/bootstrap.png'
import tailwind from '../../public/assets/tailwind.png'
import github from '../../public/assets/github.png'
import vscode from '../../public/assets/vscode.png'
import material from '../../public/assets/material.png'
import dsa from '../../public/assets/data-structure.png'
import web3 from '../../public/assets/Web3.png'
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Skills
                    </p>
                    <h2 className='py-4'>What I Can Do</h2>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }} className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={react} width='35' height='35' alt='/' />
                            </div>

                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Redux</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={redux} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-sm'> Context API</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={react} width='35' height='35' alt='/' />
                            </div>

                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Typescript</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={typescript} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Web3.js</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={web3} width='50' height='50' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={firebase} width='25' height='25' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next Js</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={next} width='40' height='40' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML5</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={html} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS3</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={css} width='41' height='41' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={js} width='61' height='61' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Material UI</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={material} width='34' height='34' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Bootstrap</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={bootstrap} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind CSS</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={tailwind} width='35' height='35' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>DSA</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={dsa} width='28' height='28' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Git/Github</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={github} width='40' height='40' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Visual Studio</h3>
                            </div>
                            <div className='m-auto'>
                                <Image src={vscode} width='32' height='32' alt='/' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills