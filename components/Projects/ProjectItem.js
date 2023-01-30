import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const ProjectItem = ({ title, backgroundImg, tech, projectUrl, desc, sourceLink, demoLink }) => {
    return (
        <div className='flex  justify-center h-[520px] max-w-[530px] min-w-fit my-1 shadow-xl shadow-gray-400 rounded-xl group cursor-pointer hover:scale-105 ease-in duration-300'>
            <div className='my-0 py-0'>
                <Link href={projectUrl}>
                    <div className=' my-3'>
                        <Image src={backgroundImg} width={532} height={350} />

                    </div>
                    <div className='px-6  text-center '>
                        <h6 className='text-1xl text-black tracking-wider text-center '>{title}</h6>
                        <p className='text-[14px] text-center text-gray-600 mb-2 max-w-[485px]  '>{desc}</p>
                        <p className='pb-2 pt-2 text-black text-center text-[13px] font-semibold  max-w-[485px]'> Tech Stack :{tech}</p>
                    </div>
                </Link>

                <div className=' flex justify-center items-center '>
                    <Link href={demoLink} target={'_blank'}
                        rel={"noreferrer"}
                    >
                        <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5 w-[155px]'>
                            View live
                        </button>
                    </Link>

                    <Link href={sourceLink} target={"_blank"}
                        rel={"noreferrer"}>
                        <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5 w-[155px]'>
                            Source Code
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default ProjectItem