import connection from '../../../../db.js';
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../models/user-model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req:NextRequest){
      connection();
      const {email,password} =await req.json();
      if(!email){
         return NextResponse.json({msg:"Email and password are required"})
      }
      const Emailexists = await User.findOne({email:email});
      if(!email){
        return NextResponse.json({msg:"please register first"})
      }
      const passwordmatched = bcrypt.compare(password,Emailexists.password);
      if(!passwordmatched){
        return NextResponse.json({msg:"invalid credentials"})
      }
      const token = jwt.sign({token:Emailexists._id},process.env.JWT_SECRET,{expiresIn:'30d'});
      return NextResponse.json({msg:'logged in successful',token});
}