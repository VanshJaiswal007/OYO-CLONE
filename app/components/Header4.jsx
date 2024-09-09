"use-client"

import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-gray-300 p-5 border-2 rounded-lg px-5 py-2">
       <div className="flex items-center">
         <Image src={'/fire.jpg'} alt="fire" width={200} height={200} className="w-20 h-20 rounded-full"/>
       <div className="text-xl">
           <p className="font-bold">Get access to exclusive deals</p>
           <p >Only the best deals reach your inbox</p>
       </div>
    </div>
     <div className="flex">
          <input type="email" className="px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-600" placeholder="e.g. john@gmail.com"/>
          <button type="submit" className="w-48 rounded-lg bg-red-500 text-xl cursor-pointer text-white">Notify</button>
     </div>
    </div>
  )
}

export default Header4