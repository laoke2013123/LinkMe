
import { Page } from "@/models/Page";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function PreviewPage({page}){
    if(!page){
        return <div></div>
    }
    console.log('data',page)
    return(
        <div className=" max-w-60 mx-auto p-4 flex flex-col items-center justify-center">
            <div className={"flex justify-between flex-col grow max-h-1/3 w-64 border-l-2 my-24 p-6 rounded-2xl text-center shadow-md"}
                 style={{ backgroundColor: page.bgColor }}
            >
                <div className="mt-10">
                    {!page.profilePic ?
                    (
                        <div className="rounded-full border-spacing-1 shadow overflow-hidden aspect-square w-24 mx-auto bg-marble flex">
                        <FontAwesomeIcon icon={faUser} className="h-12 mx-auto mt-6 "/>            
                    </div>
                    ):(
                        <div className="rounded-full border-spacing-1 shadow overflow-hidden aspect-square w-24 mx-auto bg-marble flex">
                            <Image src={page.profilePic} width={256} height={256} className="h-24 mx-auto "/>            
                        </div>
                    )}
                    <div className="my-2">
                        {page.displayName}
                    </div>
                    <div className="my-1 text-xs">
                        {page.header}
                    </div>
                    {Array.isArray(page.links) && page.links.length > 0 && (
                        page.links.map((link, index) => (
                        <div key={index} className="flex gap-2 items-center justify-center flex-row my-3">
                            <a href={link.uri} target="_blank" rel="noopener noreferrer" className="text-white p-2 bg-black rounded-3xl w-full">
                                {link.label}
                            </a>              
                            </div>
                        ))
                    )}
                </div>
                <div className="text-xs">
                    LinkMe
                </div>
            </div>
        </div>
    )
}