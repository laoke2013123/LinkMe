'use client';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutSideButton(){
    return(
        <button onClick={()=>signOut()} className="flex items-center gap-3 p-4 hover:bg-marble rounded-2xl" >
            <FontAwesomeIcon icon={faRightFromBracket} className="h-6"/>
            <span className="text-lg">Logout</span>
        </button>
    )
}