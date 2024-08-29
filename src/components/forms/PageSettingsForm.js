import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import PageAddButton from "../buttons/PageAddButton";

export default function PageSettingsForm() {
    
    
    return(
        <div>
            <div>
                <div className="h-32 min-h-32">
                    <div className="overflow-auto bg-gray-200 self-stretch p-4 rounded-t-lg ">
                        <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto bg-marble flex mt-20 mb-4 border-spacing-1 shadow">
                            <FontAwesomeIcon icon={faUser} className="h-12 mx-auto mt-6 "/>            
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col mt-8 gap-4 ">
                                <PageAddButton title={'Change color'}icon={faPalette} color={'bg-marble '} />
                                <PageAddButton title={'New Profile'}icon={faUser} color={'bg-cyan-400 '}/>
                                <PageAddButton title={'Add Link'}icon={faPlus} color={'bg-purple text-white '} />
                                <PageAddButton title={'Add Header'}icon={faPlus} color={'bg-gray-300 '} />
                                <PageAddButton title={'Display name'}icon={faPlus} color={'bg-gray-300 '} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}