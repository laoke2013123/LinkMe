'use client';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton(){
    return(
        <button onClick={()=>signOut()} className="flex items-center gap-2 rounded-3xl p-2 px-4 bg-gray-100 shadow-md">
            <span>Logout</span>
            <FontAwesomeIcon icon={faRightFromBracket} />            
        </button>
    )
}