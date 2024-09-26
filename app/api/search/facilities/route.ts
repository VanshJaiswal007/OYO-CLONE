import { NextRequest, NextResponse } from "next/server";
import connection from "../../../../db";
import hotel from "../../../models/hotel-model";


export async function GET(req:NextRequest){
    connection();
    const facilities = await hotel.find({}).distinct('facilities.name');
    return NextResponse.json({msg:"good",facilities})
}