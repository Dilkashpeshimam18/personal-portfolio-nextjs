import React from 'react'
import ProjectItem from './ProjectItem'
import mingoImg from '../../public/assets/mingo.png'
import blinkImg from '../../public/assets/store.png'
import expensoImg from '../../public/assets/expenso.png'
import mailImg from '../../public/assets/mail.png'
const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    Projects
                </p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Mingo Chat Application'
                        projectUrl='/mingo'
                        backgroundImg={mingoImg}
                        desc='Mingo is group chat application where user can create group & have chat with multiple users.'
                        tech='React JS, Typscript, Redux, Firebase Real-time Database, Google Authentication & Material UI.'
                    />
                    <ProjectItem
                        title='Blink IT Ecommerce Application'
                        projectUrl='/blinkIt'
                        backgroundImg={blinkImg}
                        desc='Blink IT is an ecommerce application where users can buy blackpink products.'
                        tech=' React JS, React Context API, Firebase Firestore , Rest Authentication, Material UI & React-Image-Magnify.'

                    />
                    <ProjectItem
                        title='Expenso'
                        projectUrl='/expenso'
                        backgroundImg={expensoImg}
                        desc='Expenso is a expense tracker where users can login/sign-up, add,update ,delete expense & view  chart based on expense.'
                        tech='React Js , Redux/Thunk, Chart Js , Firebase Rest Auth & Realtime database & Material UI.'

                    />
                    <ProjectItem
                        title='Mail-Box Client'
                        projectUrl='/mailbox-client'
                        backgroundImg={mailImg}
                        desc='In mailbox client users can compose mail to anyone, view all received, sent &  unread mail.'
                        tech='React, Redux, Custom Hooks, Firebase Rest Auth , Real-time database, Bootstrap, React-Quill & EmailJS.'

                    />
                </div>
            </div>
        </div>
    )
}

export default Projects