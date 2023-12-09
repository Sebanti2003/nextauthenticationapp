import { connectdb } from "@/dbconfig/dbconfig";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { User } from "@/models/usermodel";
import bcryptjs from 'bcryptjs'
connectdb();

export async function POST(request:NextRequest){
    try {
        const reqbody= await request.json();
        const {username,email,password}=reqbody;
        const user=await User.findOne({email});
        if(user){
            NextResponse.json({message:"user already exists"},{status:400})

        }
        const hashedPassword = await bcryptjs.hashSync(password, 10);
        const newuser=await new User({username,email,password:hashedPassword});
        const saved=await newuser.save();
        console.log(saved);
        
        NextResponse.json({message:"user created succesfully",success:"true"},{status:201});

        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }

}