"use client"
import axios from "axios";
import Image from "next/image"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import Link from "next/link";


const Page = () => {
  const [auth,setAuth] = useState(false);
  useEffect(()=>{
    const cookie = Cookies.get("user");
    if(cookie){
        setAuth(true);
        return;
    }
  },[])
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log(id);
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        console.log("running");
        setLoading(true);
        const response = await axios.get(`/api/hotels/singlehotel?id=${id}`);
        console.log(response.data.hotel); // Log full response to inspect
        setHotel(response.data.hotel); // Correct way to set hotels
      } catch (err) {
        setError('Failed to fetch hotels');
      } finally {
        setLoading(false);
      }
    };
    if(id)
      fetchHotels();
  }, [id]);

    return (
        <div className="w-7/12 mx-auto my-10">
            <Image src={hotel.banner} alt="hotel" width={2000} height={2000} className="w-full h-laarge-box my-5 mx-auto" />
            <div className="">
                <h3 className="text-3xl font-bold">{hotel.name}</h3>
                <p className="text-xl my-5 text-justify">
                   {hotel.description}
                </p>
                <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price : {hotel.price}</button>
                <p className="text-3xl font-bold my-5">Facilities : </p>
                <ul className="flex text-xl justify-between">
                    {
                        hotel.facilities?.map((ele)=>{
                            return(
                                <li key={ele.name} className="mr-10 mb-3">
                                         <li className="flex items-center">
                                            <span>
                                                <Image src={ele.img} alt="e" width={200} height={200} className="w-8 h-8 rounded-full"/>
                                            </span>
                                            <span className="ml-5">{ele.name}</span></li>
                                        </li>
                            )
                        })
                    }
                </ul>
                {
                    auth ?  (<button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
                        <Link href={`/payment?id=${hotel._id}`}>Book Now</Link>
                    </button>) : (<span className="text-2xl">Please <Link href={'/login'} className="text-blue-500">Login</Link> to get offers </span>
                )}
                
            </div>
        </div>
    )
}


export default Page