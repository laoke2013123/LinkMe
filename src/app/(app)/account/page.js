import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import DatabaseConnError from "@/components/errorPage/DataBaseConnError";

export default async function AccountPage(req) {
    const session = await getServerSession(authOptions);
    const desiredUsername = req.searchParams?.desiredUsername;
    if(!session){
        redirect('/');
    }
    try{
        mongoose.connect(process.env.MONGODB_URI);
        const page = await Page.findOne({owner: session?.user?.email});
        if(page){
            return <div>your page is {page.uri}</div>
        }
    }catch(error){
        console.error(error);
    return <DatabaseConnError/>;
}
    return(
        <div>
            <UsernameForm desiredUsername={desiredUsername}/>
        </div>
    )
}