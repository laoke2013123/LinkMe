'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroForm({user}){
    const router =useRouter();
    useEffect(()=>{
        if('localStorage' in window && window.localStorage.getItem('desiredUsername')){
            const username = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem('desiredUsername');
            router.push(`/account?desiredUsername=${username}`);
        }
    },[])
    const [username, setUsername] = useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(username.length > 0)
        {
            if(user){
                router.push('/account?desiredUsername='+username);
            }else{
                window.localStorage.setItem('desiredUsername', username);
                await signIn('google')
            }
        }
       
    }
    return(
        <div>
            <form className="inline-flex items-center shawdow-gray-400/20" 
                onSubmit={handleSubmit}
            >
                <span className="bg-white py-4 pl-4" >
                    LinkMe.to/
                </span>
                <input type="text" className="py-4" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}>
                </input>
                <button type="submit" className="bg-blue-500 text-white py-4 px-6 ml-2 rounded-lg">
                    Join for free
                </button>
            </form>
        </div>
    )
}