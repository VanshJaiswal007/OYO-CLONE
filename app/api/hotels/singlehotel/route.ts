import connection from '../../../../db.js';
import { NextRequest, NextResponse } from 'next/server';
import Hotel from '../../../models/hotel-model.js';

export async function GET(req:NextRequest) {
      connection();
      const { searchParams } = req.nextUrl;
      const id = searchParams.get('id');
      if(id){
        const hotel = await Hotel.findById(id);
        return NextResponse.json({msg:"Good", hotel})
      }
}