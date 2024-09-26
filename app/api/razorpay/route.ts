import { NextRequest, NextResponse } from "next/server";
import connection from "../../../db";
import Razorpay from "razorpay";
import shortid from 'shortid'
import Hotel from "../../models/hotel-model";
export async function POST(req:NextRequest) {
    connection()
    const razorpay = new Razorpay({
        key_id:process.env.RAZORPAY_KEY,
        key_secret:process.env.RAZORPAY_SECRET,
    });
  
    const {searchParams} = req.nextUrl;
    const id = searchParams.get("id");
    const hotel = await Hotel.findOne({_id:id});
    const amount = hotel.price;
    const options = {
        amount:(amount*100).toString(),
        currency:"INR",
        receipt:shortid.generate(),
        payment_capture:1.
}

  try {
    const result = await razorpay.orders.create(options);
    console.log(result)
    return NextResponse.json({
        id:result.id,
        currency:result.currency,
        amount:result.amount,
    })
  } catch (error) {
      console.log(error);
  }

}