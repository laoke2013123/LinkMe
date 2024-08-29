import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { Page } from "@/models/Page";

export async function POST(request){
    const res = await request.json()
    const displayName = res.displayName;
    const location = res.location;
    const header = res.header;
    const bgColor = res.color;
    const links = res.links;
    console.log('links',links)
    const Mod = {
        displayName: displayName||undefined,
        bgColor: bgColor||undefined,
        location: location||undefined,
        header: header||undefined,
        links: links||undefined,
    };
    try{
        mongoose.connect(process.env.MONGODB_URI);
        const session = await getServerSession(authOptions);
        const owner = {owner:session?.user?.email};
        if(Mod.links){
            const res = await Page.findOneAndUpdate(owner,{$push:{links:links}});
        }else{
            const res = await Page.findOneAndUpdate(owner,Mod)
        }
        console.log('Received:', session)
        return Response.json( res )

    }catch(error){
        console.error('Error:', error)
        return Response.status(500).json({ error: 'An error occurred while processing your request.' })
    }
    
}
export async function GET(request){
    
    mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    const owner = {owner:session?.user?.email};
    const res = await Page.findOne(owner);
    console.log('res',res);

}