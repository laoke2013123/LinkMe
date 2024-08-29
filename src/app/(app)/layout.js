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
        <main >
              {children}
        </main>
      </body>
    </html>
  );
}
