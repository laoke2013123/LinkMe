'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../modals/Modal";

export default function PageAddButton({icon, title,color}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal =()=>{
        setIsModalOpen(true);
    }
    const closeModal =()=>{
        setIsModalOpen(false);
    }
    if(isModalOpen===true){
        return <Modal show={isModalOpen} onClose={closeModal} title={title}/>
    }
    return(
        <button 
            className={"mx-12 flex flex-col gap-2 justify-center items-center border rounded-2xl shadow font-bold "+color+"hover:shadow-lg"}
            onClick={openModal}
        >
            <div className="flex items-center gap-2 p-4">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                <span>{title}</span>
            </div>
        </button>
    )
}