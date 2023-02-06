import React from 'react'
import ProjectItem from './ProjectItem'
import mingoImg from '../../public/assets/mingo.png'
import blinkImg from '../../public/assets/store.png'
import expensoImg from '../../public/assets/expenso.png'
import mailImg from '../../public/assets/mail.png'
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Projects
                    </p>
                    <h2 className='py-4'>What I&apos;ve Built</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem
                        title='Blink IT Ecommerce Application'
                        projectUrl='/blink-it'
                        backgroundImg={blinkImg}
                        desc='Blink IT is an ecommerce application where users can buy blackpink products.'
                        tech=' React JS, React Context API, Firebase Firestore , Rest Authentication, Material UI & React-Image-Magnify.'
                        sourceLink='https://github.com/Dilkashpeshimam18/react-ecommerce'
                        demoLink='https://blinkit-ecommerce-dcfe7.web.app/'

                    />
                    <ProjectItem
                        title='Mingo Chat Application'
                        projectUrl='/mingo'
                        backgroundImg={mingoImg}
                        desc='Mingo is group chat application where user can create group & have chat with multiple users.'
                        tech='React JS, Typscript, Redux, Firebase Real-time Database, Google Authentication & Material UI.'
                        sourceLink='https://github.com/Dilkashpeshimam18/mingo-chatapplication'
                        demoLink='https://mingo-chatapp.web.app/'
                    />
                    <ProjectItem
                        title='Expenso'
                        projectUrl='/expenso'
                        backgroundImg={expensoImg}
                        desc='Expenso is a expense tracker where users can login/sign-up, add,update ,delete expense & view  chart based on expense.'
                        tech='React Js , Redux/Thunk, Chart Js , Firebase Rest Auth & Realtime database & Material UI.'
                        sourceLink='https://github.com/Dilkashpeshimam18/expenso-react'
                        demoLink='https://expenso-898b3.web.app/'

                    />
                    <ProjectItem
                        title='Mail-Box Client'
                        projectUrl='/mailbox-client'
                        backgroundImg={mailImg}
                        desc='In mailbox client users can compose mail to anyone, view all received, sent &  unread mail.'
                        tech='React, Redux, Custom Hooks, Firebase Rest Auth , Real-time database, Bootstrap, React-Quill & EmailJS.'
                        sourceLink='https://github.com/Dilkashpeshimam18/mailBoxClient-react'
                        demoLink='https://mail-box-client-react.vercel.app/'

                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Projects