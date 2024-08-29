'use client';
import { faChartLine, faCircleArrowRight, faFileLines, faLink, faUser } from "@fortawesome/free-solid-svg-icons";
import ProfileIcon from "../icons/ProfileIcon";
import LogoutSideButton from "../buttons/LogoutSideButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({session}){
     const pathName = usePathname();
    return(
        <aside className="bg-white w-62 p-4 rounded-2xl m-4 shadow-md ">
              <div className="mt-8">
                {session.user.image &&(
                  <ProfileIcon image={session?.user?.image}/>
                )}
                {!session.user.image &&(
                  <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto bg-marble flex">
                    <FontAwesomeIcon icon={faUser} className="h-12 mx-auto mt-6 "/>            
                  </div>
                )}
                <nav className="flex flex-col text-center mt-12	ml-7 gap-2 font-semibold	">
                  <Link href={'/account'} className={"flex items-center gap-3 p-4 " 
                  +(pathName === '/account' ? 'bg-marble rounded-2xl text-purple':'hover:bg-marble rounded-2xl')
                    }>
                    <FontAwesomeIcon icon={faFileLines} className="h-7"></FontAwesomeIcon>
                    <span className="text-lg">My Page</span>
                  </Link>
                  <Link href={'analytics'} className={"flex items-center gap-3 p-4 " 
                  +(pathName === '/analytics' ? 'bg-marble rounded-2xl text-purple':'hover:bg-marble rounded-2xl')
                    }>
                    <FontAwesomeIcon icon={faChartLine} className="h-6"></FontAwesomeIcon>
                    <span className="text-lg">Analytics</span>
                  </Link>
                  <Link href={'/manage'} className={"flex items-center gap-3 p-4 " 
                  +(pathName === '/manage' ? 'bg-marble rounded-2xl text-purple':'hover:bg-marble rounded-2xl')
                    }>
                    <FontAwesomeIcon icon={faLink} className="h-5"></FontAwesomeIcon>
                    <span className="text-lg">Manage Links</span>
                  </Link>
                  <LogoutSideButton />
                  <Link href={'/'} className="flex items-center gap-3 p-4 hover:bg-marble rounded-2xl">
                    <FontAwesomeIcon icon={faCircleArrowRight} className="h-6"/>
                    <span className="text-lg">Back to Website</span>
                  </Link>
                  
                </nav>
              </div>
            </aside>
    )
}