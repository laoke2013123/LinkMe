'use client';
import {signIn} from "next-auth/react"
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LoginWithGoogleButton(){
    
    return(
        <div>
            <button className="bg-white shawdow w-full text-center 
                py-4 flex justify-center items-center gap-3"
                onClick={async ()=>await signIn('google')}>
                <FontAwesomeIcon icon={faGoogle} className='h-6'/>                    
                <span>                    
                    Sign In with Google
                </span>
            </button>
        </div>
        
    )
}