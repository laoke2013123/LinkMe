import { Inter } from "next/font/google";
import "../globals.css";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LinkMe",
  description: "Generated by create next app",
};

export default async function AppLayout({ children }) {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/')
    }
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen bg-marble ">
          <Navbar session={session}/>
          <div className="grow">
            <div className="bg-white p-4 rounded-2xl m-4 shadow-md">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
