'use client';
import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

export default function UsernameForm({desiredUsername}){
    const router = useRouter();
    const [formResult, setFormResult] = useState(null);
    const handleFormSubmit = async(formData)=>{
        try{
            const result = await grabUsername(formData);
            console.log('result:',result);
            if(result && !result.status){
                setFormResult(result);
            }else{
                setFormResult(result);
                router.refresh();
            }
        }catch(error){
            console.error(error.message)
        }
        
    }
    return(
    <form action={handleFormSubmit}>
        <h1 className="text-4xl font-bold text-center gap-2 mb-2">
            Grab your Username
        </h1>
        <p className='text-center mb-6 text-gray-500'>
            Choose your Username
        </p>
        <div className="flex-col max-w-xs mx-auto ">
            <input 
                name="username"
                type="text" placeholder="username" 
                className="block p-2 mx-auto border w-full mb-2 text-center"
                defaultValue={desiredUsername}
                required
            ></input>
            {formResult && !formResult.status &&(
                <div className="bg-red-200 border border-red-600 p-2 mb-2">
                Taken username
            </div>
            )}
            <SubmitButton >
                <span>Claim your username</span>
                <RightIcon/>
            </SubmitButton>
        </div>
        
    </form>)
}