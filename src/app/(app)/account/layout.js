import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/Navbar";
import PreviewPage from "@/components/preview/PreviewPage";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function AccountLayout({ children }) {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/')
    }
   
        mongoose.connect(process.env.MONGODB_URI);
        const page = await Page.findOne({owner: session?.user?.email});
    return <section>
        <div className="">
        <main className="flex min-h-screen bg-marble gap-2">
            <Navbar session={session}/>
            <div className="bg-white p-4 rounded-xl my-4 mx-6 shadow-md grow max-w-screen-xl">
                {children} 
            </div> 
            <PreviewPage page={page}/>
        </main>
        </div> 
        
        </section>
  }