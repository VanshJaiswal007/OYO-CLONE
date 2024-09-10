import Image from "next/image"



const page = () => {
    return (
        <div className="w-7/12 mx-auto my-10">
            <Image src={"https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA&pid=Api&P=0&h=180"} alt="hotel" width={2000} height={2000} className="w-full h-laarge-box my-5 mx-auto" />
            <div className="">
                <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nam laboriosam quasi, autem qui dolor!</h3>
                <p className="text-xl my-5 text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque doloribus deleniti ipsum perspiciatis doloremque. Ratione harum corrupti tenetur praesentium tempora. Porro ad ex, error amet, voluptatem, culpa inventore excepturi ipsum impedit corrupti ducimus eum libero facilis. Aliquam modi quos accusantium, fugiat, cupiditate consequuntur nobis soluta, dolorem at illo sequi dolore?
                </p>
                <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price : 4500</button>
                <p className="text-3xl font-bold my-5">Facilities : </p>
                <ul className="flex text-xl justify-between">
                    <li>Swimming Pool</li>
                    <li>Dogs</li>
                    <li>Garden</li>
                    <li>Loundry</li>
                    <li>Cricket</li>
                </ul>
                <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">Book Now</button>
            </div>
        </div>
    )
}

export default page