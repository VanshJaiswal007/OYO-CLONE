"use client"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import Razorpay from "razorpay"
import { useEffect } from "react"

const Page = () => {

   const searchParams = useSearchParams();
   const id = searchParams.get("id");
  const makePayment = async () => {
      const {data} = await axios.post(`/api/razorpay?id=${id}`);
      console.log(data);
      const options = {
         key:process.env.RAZORPAY_KEY,
         name:"Vansh",
         currency:data.currency,
         amount:data.amount,
         order_id:data.id,
         desciption:"Thank You",
         handler:function(response){},
         prefill:{
            name:"Vansh",
            email:"vanshjaiswalofficial7@gmail.com",
            contact:9343504982,
         }
      }

      const paymentObj = new window.Razorpay(options);
      paymentObj.open();
  }

  useEffect(()=>{
      makePayment();
  },[])

  return (
       <>
    <Script src="http://checkout.razorpay.com/v1/checkout.js" />
       </>
  )
}

export default Page