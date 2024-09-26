import { NextRequest, NextResponse } from "next/server";
import connection from "../../../../db";
import Hotel from "../../../models/hotel-model";

export async function GET(req:NextRequest) {
     connection();
     const {searchParams} = req.nextUrl;
     const key = searchParams.get('val');
     const hotels = (await Hotel.find({'facilities.name':{$in:key}}));
     return NextResponse.json({msg:"good",hotels})
}