"use-client"
import Image from 'next/image'
import React from 'react'
import Block from './Block'
import Link from 'next/link'

const Header1 = () => {
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center px-10 h-24'>
         <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-28 h-28'/>
         <div className='border-r-2 border-r-gray-300 h-full flex'>
            <Block title={'Become a member'} para={'Additional 10% off on stays.'} />
            <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'} />
            <Block title={'List your property'} para={'Start earning in 30 min.'} />
            <Block title={'1234567890'} para={'Call us to book now.'} />
            <div className='flex items-center px-3'>
               <Image src={'/demo.png'} alt="demo" width={500} height={200} className='w-10 h-10 rounded-full mr-5'/>
               <Link href={'/login'}>
               <h3 className='font-bold'>Login/Signup</h3>
               </Link>
            </div>
         </div>
    </div>
  ) 
}

export default Header1