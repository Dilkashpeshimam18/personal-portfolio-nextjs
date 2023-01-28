import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, desc }) => {
    return (
        <div className='flex  justify-center h-[460px] w-[430px] py-0 shadow-xl shadow-gray-400 rounded-xl group cursor-pointer hover:scale-105 ease-in duration-300'>
            <div className='my-0 py-0'>
                <div className=' my-3'>
                    <Image src={backgroundImg} width={430} height={380} />

                </div>
                <div className='px-6 '>
                    <h6 className='text-1xl text-black tracking-wider text-center '>{title}</h6>
                    <p className='text-[13px] text-center text-gray-600 mb-2 max-w-[380px]  '>{desc}</p>
                    <p className='pb-2 pt-2 text-black text-center text-[13px] font-semibold  max-w-[380px]'> Tech Stack :{tech}</p>
                </div>
                <div className=' flex justify-center items-center '>
                    <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5 w-[145px]'>
                        View live
                    </button>
                    <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5 w-[145px]'>
                        Source Code
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProjectItem