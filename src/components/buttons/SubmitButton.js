import { useFormStatus } from "react-dom";
export default function SubmitButton({children}){
    const{pending}= useFormStatus();
    return(
        <button
            className="bg-blue-500 flex text-white py-2 
            px-4 mx-auto w-full gap-2  items-center 
            justify-center disabled:bg-blue-300 disabled:text-gray-200" 
            type="submit"
            disabled={pending}
            >
            {children}
        </button>
    )
}