import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Link from "next/link"
import LogoutButton from "./buttons/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header(){
    const session = await getServerSession(authOptions);
    return(
      <header className="bg-white border-b py-4">
        <div className="max-w-6xl flex justify-between mx-auto px-6">
          <div className="flex gap-4 items-center">
            <Link href={'/'} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLink} className="text-blue-500"></FontAwesomeIcon>
              <span className="text-xl font-bold">LinkMe</span>
            </Link>
            <nav className="flex gap-4 text-slate-500 text-sm ">
              <Link href={'/about'}>About</Link>
              <Link href={'/pricing'}>Pricing</Link>
              <Link href={'/contact'}>Contact</Link>
            </nav>
          </div>
          <div className="text-slate-500 items-center">
            {session &&(
              <div className="flex items-center gap-4">
                <Link href={'/account'}> 
                  Hello, {session?.user?.name}
                </Link>
                <LogoutButton/>
              </div>
            )}
            {!session &&(
              <div className="flex gap-4 text-sm ">
                <Link href={'/login'}>Sign In</Link>
                <Link href={'/login'}>Create Account</Link>
              </div>
            )}
          </div>
        </div>
        
      </header>
    )
}