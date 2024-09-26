import Image from "next/image";
import Link from "next/link";

const Hotel = ({e}) => {
    return (
        <div className="border-2 border-red-500 rounded-lg h-80 w-full mb-5 p-5">
            <div className="flex">
                 <Image src={e.banner} alt="hotel" width={200} height={200} className="w-96 h-60 mr-3" priority/>
            <div className="flex flex-col justify-between">
                {
                    e.gallery.map((ele)=>{
                        return(
                            <Image key={ele} src={ele} alt="hotel" width={200} height={200} className="w-28 h-14" priority/>
                        )
                    })
                }
            </div>
            <div className="ml-20">
                 <h2 className="font-bold text-2xl line-clamp-1">{e.name}</h2>
                 <p className="text-justify my-5 text-lg">{e.description}</p>
                 <p className="text-2xl">
                    <span className="font-bold">Facilities :</span>
                    <ul className="flex">
                        {
                            e.facilities.map((ele)=>{
                                return(
                                      <li key={ele.name} className="mr-10 mb-3">
                                         <li className="flex items-center">
                                            <span>
                                                <Image src={ele.img} width={200} height={200} className="w-8 h-8 rounded-full"/>
                                            </span>
                                            <span className="ml-5">{ele.name}</span></li>
                                        </li>
                                )
                            })
                        }
                    </ul>
                    
                    <div className="flex items-center mt-4">
                        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price : {e.price}</button>
                        <Link href={`/hotels/singlehotel?id=${e._id}`} className="text-xl font-bold text-red-600 ml-10">See Details</Link>
                    </div>
                 </p>
            </div>
            </div>
        </div>
    );
}

export default Hotel;