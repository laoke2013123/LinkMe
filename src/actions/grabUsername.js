'use server';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function grabUsername(formdata){
    const username = formdata.get('username');
    mongoose.connect(process.env.MONGODB_URI);
    try{
        const session = await getServerSession(authOptions);
        await Page.create({
            uri:username,
            owner:session?.user?.email,
        });
        return {status:true, message:'Successfully claimed your username',username:username};
    }catch(error){
        console.error(error);
        if(error.code === 11000){
            return{status:false,error: 'Username already taken'};
        }
    }

}