
// export async function POST(req,res){
//     res.json("chico");
// }
import connection from '../../../../db.js';
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../models/user-model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req:NextRequest)
{
    connection();
    const {name,email,password} = await req.json();
    if(!name || !email || !password){
        return NextResponse.json({msg:"all fields are mandatory"});
    }
    const Emailexists = await User.findOne({email:email});
    if(Emailexists){
        return NextResponse.json({msg:"User already registered"});
    }

    const hashedpassword = await bcrypt.hash(password,10);

    const Newuser = new User({
        name,
        email,
        password:hashedpassword
    });
    const result = await Newuser.save();
    const token = jwt.sign({token:result._id},process.env.JWT_SECRET,{expiresIn:'30d'});
    return NextResponse.json({
        status:201,
        message:"registered successfully",
        token,
    })
}
