"use-client"

import Link from "next/link"
import { useState } from "react"

             
const Header3 = () => {
  const[city,setCity] = useState(' ');
  return (   
    <div className='bg-gradient-to-r from-red-600 to-red-400 h-60'>
          <div className='mx-10 p-5'>
              <h2 className='text-4xl text-white text-bold text-center'>Over 157,000 hotels and hours across 35 countries</h2>
              <div className='grid grid-cols-5 my-5 mx-20'>
                  <input type="text" placeholder='Search...' className='h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2' onChange={(e)=>setCity(e.target.value)}/>
                  <input type="date" placeholder='Search...' className='h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1'/>
                  <input type="date" placeholder='Search...' className='h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1'/>
                  <Link href={`/hotels?city=${city}`}>
                  <button type='submit' className='h-16 px-3 py-2 col-span-1 bg-green-400 hover:bg-green-600 text-white text-xl'>Search</button>
                  </Link>
              </div>
              <div className='flex mx-20 my-5'>
                 <button type='submit' className='h-16 px-3 py-2 col-span-1  hover:cursor-pointer text-white text-xl mr-5'>Continue your Search</  button>
                 <button type='submit' className='h-16 px-3 py-2 col-span-1  hover:cursor-pointer text-white text-xl mr-5 border2 border-white mr -5 hover:bg-gray-500 rounded-xl'>Homestay in India hotels</button>
              </div>
          </div>
    </div>
  )
}

export default Header3