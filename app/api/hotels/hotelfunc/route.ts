import connection from '../../../../db.js';
import { NextRequest, NextResponse } from 'next/server';
import Hotel from '../../../models/hotel-model.js';
export async function POST(req:NextRequest) {
    connection();
    // const{name,description,banner,gallery,price,facilities} = req.json();
    const newhotel = new Hotel(await req.json());
    const result = await newhotel.save();
    return NextResponse.json({msg:'Hotel added',result}); 
}

export async function GET(req:NextRequest) {
    connection();
    const { searchParams } = req.nextUrl;
    const location = searchParams.get('city');
    const hotels = await Hotel.find({location:location});
    if(hotels.length>0)
    return NextResponse.json({msg:"Good",hotels:hotels});
    const allhotels = await Hotel.find({});
    return NextResponse.json({msg:"Good",hotels:allhotels})
}
