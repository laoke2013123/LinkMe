import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
        const res = await request.json();
        const uri = res.uri; 
        console.log('uri',uri);
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            const session = await getServerSession(authOptions);
            const owner = session?.user?.email;
            await Page.updateOne(
                { owner: owner },
                { $pull: { links: { uri:uri } } }
            );

            return Response.json({status:'200',message:"deleted link"})
        } catch (error) {
            console.error('Failed to delete the link:', error);
            return Response.error(error)
        }
}