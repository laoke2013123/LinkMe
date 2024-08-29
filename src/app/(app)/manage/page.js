'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ManageLinksButton from "@/components/buttons/ManageLinksButton";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ManageLinks(){
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/');
    }
    mongoose.connect(process.env.MONGODB_URI);
    const page = await Page.findOne({owner: session?.user?.email});
    
    return(
        <div>
            <h1 className="text-2xl center p-4 mx-auto">Manage Links</h1>
            <hr/>
            <div className="m-12 max-w-screen-md">
            {Array.isArray(page.links) && page.links.length > 0 && (
                        page.links.map((link, index) => (
                        <div key={index} className="flex gap-2 items-center justify-between flex-row my-3 ">
                            <div className="text-black p-4 flex gap-6 bg-gray-400 rounded-xl ">
                                <div className="">
                                    {link.label}
                                </div>
                                <div>
                                    {link.uri}
                                </div>
                            </div>  
                            <ManageLinksButton link={link} ownerEmail={session?.user?.email}/>          
                        </div>
                        ))
                )}
               </div>
        </div>
    )
}