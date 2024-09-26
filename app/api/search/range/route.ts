import { NextRequest, NextResponse } from "next/server";
import connection from "../../../../db";
import Hotel from "../../../models/hotel-model";

export async function GET(req:NextRequest) {
    connection();
    const {searchParams} = req.nextUrl;
    const price = searchParams.get("price");
    const hotels = await Hotel.find({price:{$lte:price}});
    return NextResponse.json({msg:"Range filter",hotels});
}