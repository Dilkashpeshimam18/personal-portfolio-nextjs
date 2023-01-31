import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import mingo from '../public/assets/mingo.png'
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
          src={mingo}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Mingo Chat App</h2>
          <h3>React JS / Typescript / Redux / Firebase / Material UI</h3>
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
            Mingo is group chat application where user can create group & have chat with multiple users. It is build using React Js, Typescript,
            Redux, Firebase Real-time Database , Firebase Authentication, Google Authentication & Material UI .
            I build this project
            to demonstrate knowledge working in React JS, Typescript, Redux & Firebase .
            User can sign-up & login using email & password or with google authentication. Users can update their profile.
            Users can create new group, delete & update the group.Users can view members of a group. User can send & received chat . And have chat with multiple users in a group.
          </p>
          <div className='mt-10 mb-5'>
            <p className='font-bold mb-2 '>
              Functionalties:-
            </p>
            <li>Login / Logout & Sign-up Authentication.</li>
            <li>Google Authentication.</li>
            <li>Update user name,bio & profile pic.</li>
            <li>Create new group.</li>
            <li>Update & delete group.</li>
            <li>View all groups.</li>
            <li>View all members in a group.</li>
            <li>View all messages of users in a group.</li>
            <li>Send & received message in a group.</li>
            <li>Have chat with multiple users.</li>
            <li>Users specific</li>
            <li>Persistent data</li>


          </div>
          <Link
            href='https://github.com/Dilkashpeshimam18/mingo-chatapplication'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
          <Link
            href='https://mingo-chatapp.web.app/'
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
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase Real-time Database
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase Authentication
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase Google Authentication
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
                <RiRadioButtonFill className='pr-1' /> Axios
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

export default Mingo