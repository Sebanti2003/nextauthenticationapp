import { connectdb } from "@/dbconfig/dbconfig";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { User } from "@/models/usermodel";
connectdb().then(()=>console.log("database connected")).catch((err)=>console.log(`${err}`)
);

export async function POST(request:NextRequest){
    try {
        const reqbody= await request.json();
        const {username,email,password}=reqbody;
        const user=await User.findOne({email});
        if(user){
            NextResponse.json({message:"user already exists"},{status:400})

        }
        const newuser=await new User({username,email,password});
        const saved=await newuser.save();
        console.log(saved);
        
        NextResponse.json({message:"user created succesfully",success:"true"},{status:201});

        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }

}