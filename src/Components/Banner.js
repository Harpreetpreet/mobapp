import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

export default function Banner() {
  return (
   <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '>
    <Navbar/>
    <div className="max-h-screen overflow-hidden text-center md:w-4/5   mx-auto text-white  ">
    <h1 className="md:text-6xl text-4xl p-2 md:mt-0 mt-10">
        Mobile App Landing Page Template
    </h1>
  
    <p className="md:text-2xl text-xl py-10 md:px-32 px-4 ">The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go.</p>
    <div className="flex justify-center">
    <Image src="/images/iphonex.png.webp" alt="" width={400} height={50} className=""></Image>
    </div>
    </div>
   </div>
   
  )
}
