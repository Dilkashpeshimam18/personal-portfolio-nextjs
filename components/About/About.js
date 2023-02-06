import React from 'react'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';



const About = () => {
    return (

        <div id='about' className='w-full md:h-screen p-2 flex items-center '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div

                    className='col-span-2'>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            About
                        </p>
                        <h2 className='py-4'>Who I Am</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='py-2 text-gray-600'>

                            I am a Frontend Developer {" who's "} passionate & ethusiastic about creating web application. I am into web developement from past 2 years and I have experience working on serveral real world end-to-end project
                            using HTML, CSS, Javascript, React JS, Typescript, Redux,  Web3.js ,React Context API & Firebase .
                            I have done my graduation in Bachelors of Science in Information Technology. And I have internships experience as a React Developer in Blockchain Technology.

                        </p>
                        <p className='py-2 text-gray-600'>
                            I am a quick learner & have a good problem solving mindset.
                            I am a result oriented person and have a always learning attitude.
                            I love to learn new technologies & keep upgrading my skills!🚀
                        </p>
                        <a download href='/DilkashResume .pdf'
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300'>
                                Download Resume
                            </button>
                        </a>

                    </motion.div>


                </div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='w-full h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

                    <Avatar sx={{ width: 260, height: 260 }}
                        alt="Dilkash" src="https://media.licdn.com/dms/image/C4E03AQGwpnw8uZZhfw/profile-displayphoto-shrink_800_800/0/1648976595819?e=1680134400&v=beta&t=OK1osu_97KgKOv1UESMKeWSBn1pMSJ8s4mXsA_HxIz8" />



                </motion.div>
            </div >
        </div>

    )
}

export default About