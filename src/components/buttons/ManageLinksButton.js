'use client'

import { useRouter } from "next/navigation"

export default function ManageLinksButton({link}){
    const router = useRouter();
    const handleSubmit = async(link)=>{
        try {
            const res = await fetch('/api/deletelink',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(link)
            })
            if(res.formData.status==="200"){
                alert(`Link with uri ${link.uri} deleted successfully`)
            }
            // Optionally, reload the page or update the state to reflect the deletion
        } catch (error) {
            alert('Failed to delete the link')
        }finally{
            router.refresh();
        }
    }
    return(
        <button onClick={()=>handleSubmit(link)} className="p-4 bg-red-500 text-white rounded-md">
                delete    
        </button>
    )
}