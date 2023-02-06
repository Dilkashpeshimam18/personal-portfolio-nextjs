import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const ProjectItem = ({ title, backgroundImg, tech, projectUrl, desc, sourceLink, demoLink }) => {
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }} className='flex  justify-center h-[540px] max-w-[530px] min-w-full my-1 shadow-xl shadow-gray-400 rounded-xl group cursor-pointer hover:scale-105 ease-in duration-300'>
            <div className='my-0 py-0 min-w-full'>
                <Link href={projectUrl}>
                    <div className=' my-3'>
                        <Image src={backgroundImg} height={350} />

                    </div>
                    <div className='px-8  text-center '>
                        <h6 className='text-1xl text-black tracking-wider text-center '>{title}</h6>
                        <p className='text-[14px] text-center text-gray-600 mb-2 max-w-[485px] ml-6 '>{desc}</p>
                        <p className='pb-2 pt-2 text-black text-center text-[14px] font-semibold  max-w-[485px] ml-6'> Tech Stack :{tech}</p>
                    </div>
                </Link>

                <div className=' flex justify-center items-center min-w-full '>
                    <Link href={demoLink} target={'_blank'}
                        rel={"noreferrer"}
                    >
                        <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5 w-[170px] min-[320px]:w-[100px] '>
                            View live
                        </button>
                    </Link>

                    <Link href={sourceLink} target={"_blank"}
                        rel={"noreferrer"}>
                        <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5  max-[500px]:w-[120px] min-[320px]:text-sm '>
                            Source Code
                        </button>
                    </Link>

                </div>
            </div>

        </motion.div>
    )
}

export default ProjectItem