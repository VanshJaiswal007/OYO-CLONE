import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
    return (
        <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
            <div className="flex">
                 <Image src={"https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA&pid=Api&P=0&h=180"} alt="hotel" width={200} height={200} className="w-96 h-60 mr-3"/>
            <div className="grid grid-rows-3">
                <Image src={"https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA&pid=Api&P=0&h=180"} alt="hotel" width={200} height={200} className="w-28"/>
                <Image src={"https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA&pid=Api&P=0&h=180"} alt="hotel" width={200} height={200} className="w-28"/>
                <Image src={"https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA&pid=Api&P=0&h=180"} alt="hotel" width={200} height={200} className="w-28"/>
                <Image src={"https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA&pid=Api&P=0&h=180"} alt="hotel" width={200} height={200} className="w-28"/>
            </div>
            <div className="ml-20">
                 <h2 className="font-bold text-2xl line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, adipisci?</h2>
                 <p className="text-justify my-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure nihil iusto cumque libero ea, magnam ipsa nemo. Earum minima ullam velit corrupti non dolore itaque eum voluptatibus? Ea, distinctio!</p>
                 <p className="text-2xl">
                    <span className="font-bold">Facilities :</span>
                    <span> Free wifi , Pet care , Swimming pool , Beaches , Resort</span>
                    <div className="flex items-center mt-4">
                        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price : 4500</button>
                        <Link href={'/hotels/2'} className="text-xl font-bold text-red-600 ml-10">See Details</Link>
                    </div>
                 </p>
            </div>
            </div>
        </div>
    );
}

export default Hotel;