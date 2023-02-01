import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { CiMail } from 'react-icons/ci'
import { BsHeadset } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'


export default function Footer() {
  return (
    <section className=" bg-gray-100 ">
    <div className='container mx-auto px-14 py-14 '>
    
      <div className='flex items-center space-x-4 text-gray-500 font-medium'>
      <IoLocationOutline className="h-5 w-6" />
      <h3>1485 Pacific St, Brooklyn, NY 11216 USA</h3>
      </div>
      <div className='flex justify-end space-x-8'>
      <AiOutlineInstagram className='h-8 w-8 text-gray-500  hover:text-pink-400' />
      <AiOutlineTwitter className='h-8 w-8 text-gray-500  hover:text-pink-400' />
      <FiFacebook className='h-8 w-8 text-gray-500   hover:text-pink-400'/>
      </div>
      <div className='flex items-center space-x-4 text-gray-500 font-medium'>
      <CiMail className="h-5 w-6 " />
      <h3><a className='hover:text-pink-400' href="harpreet@erharpreet.com">harpreet@erharpreet.com</a></h3>
      <BsHeadset className="h-5 w-6" />
      <h3>+91 9999-888-777</h3>
      </div>
    </div>
    <div className='text-center bg-white py-10 text-gray-500'>
        <h3>COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY COLORLIB</h3>
        <div className='space-x-4 pt-4 text-gray-500 text-xs font-medium'>
        <a className=' hover:underline  hover:text-pink-400' href="" >PRESS </a>
        <a className=' hover:underline  hover:text-pink-400' href="" >TERMS </a>
        <a className=' hover:underline  hover:text-pink-400' href="" >PRIVACY </a>
        </div>
        
      </div>
    </section>
  )
}
