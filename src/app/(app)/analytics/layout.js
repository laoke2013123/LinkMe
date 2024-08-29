import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";

export default async function AccountLayout({ children }) {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/')
    }
    return <section>
        <div className="">
        <main className="flex min-h-screen bg-marble">
            <Navbar session={session}/>
            <div className="bg-white p-4 rounded-xl my-4 mx-6 shadow-md grow max-w-screen-xl">
                {children} 
            </div> 
        </main>
        </div> 
        
        </section>
  }