// "use client"
// import axios from "axios"
// import { useSearchParams } from "next/navigation"
// import Script from "next/script"
// import Razorpay from "razorpay"
// import { useEffect } from "react"

// const Page = () => {

//    const searchParams = useSearchParams();
//    const id = searchParams.get("id");
  

//   useEffect(()=>{
//     const makePayment = async () => {
//         const {data} = await axios.post(`/api/razorpay?id=${id}`);
//         console.log(data);
//         const options = {
//            key:process.env.RAZORPAY_KEY,
//            name:"Vansh",
//            currency:data.currency,
//            amount:data.amount,
//            order_id:data.id,
//            desciption:"Thank You",
//            handler:function(response){},
//            prefill:{
//               name:"Vansh",
//               email:"vanshjaiswalofficial7@gmail.com",
//               contact:9343504982,
//            }
//         }
  
//         const paymentObj = new window.Razorpay(options);
//         paymentObj.open();
//     }
//       makePayment();
//   },[id])

//   return (
//        <>
//     <Script src="http://checkout.razorpay.com/v1/checkout.js" />
//        </>
//   )
// }

// export default Page

"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, Suspense } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const makePayment = async () => {
      try {
        const { data } = await axios.post(`/api/razorpay?id=${id}`);
        console.log(data);

        const options = {
          key: process.env.RAZORPAY_KEY,
          name: "Vansh",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thank You",
          handler: function (response) {
            console.log("Payment Successful", response);
          },
          prefill: {
            name: "Vansh",
            email: "vanshjaiswalofficial7@gmail.com",
            contact: "9343504982",
          },
        };

        const paymentObj = new window.Razorpay(options);
        paymentObj.open();
      } catch (error) {
        console.error("Payment initiation failed", error);
      }
    };

    if (id) {
      makePayment();
    }
  }, [id]);

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* You can display some loading or static message here */}
    </>
  );
};

// Wrapping the whole component with Suspense
const WrappedPage = () => (
  <Suspense fallback={<div>Loading payment...</div>}>
    <Page />
  </Suspense>
);

export default WrappedPage;
