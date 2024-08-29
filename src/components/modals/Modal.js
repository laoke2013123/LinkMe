'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function Modal({ show, onClose, title }){
        if (!show) return null;
        const router = useRouter();

        if(title==='Change color'){
            
            const [color, setColor] = useColor("hex", "#FFFFFF");
            const [formData, setFormData] = useState({color:'#FFFFFF'});
            const onChangeComplete = (color) =>{
                setFormData({color:color.hex});
            }
            const handalSubmit= async()=>{
                try{
                    const res = await fetch('/api/page',{
                        method:'POST',
                        body: JSON.stringify(formData)
                    });
                    if(!res.ok){
                        throw new Error('Failed to save color');
                    }else if(res.ok){
                        alert('Color saved successfully');
                    }
                }catch(error){
                    console.error('Error:', error);
                }finally{
                    onClose();
                    router.refresh()
                }
                
            }
            console.log('Changing color',formData);

        return(
            <div className="mx-12 h-18 justify-start items-center border rounded-xl shadow font-bold">
                <div className="flex flex-col items-center gap-2 p-4">
                    <div>{title}</div>
                    <div>
                        <div>
                        <ColorPicker width={64} height={64}
                            hideInput={["rgb", "hsv"]}
                            color={color}
                            onChange={setColor} 
                            onChangeComplete={onChangeComplete}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={onClose} className="text-white  rounded-lg p-2 m-2 bg-black hover:text-black hover:bg-gray-600">
                        close
                    </button>
                    <button onClick={()=>handalSubmit()} className="text-white  rounded-lg p-2 m-2 bg-blue-400 hover:text-gray-900">
                        save
                    </button>
                </div>
                
            </div>
        )
        }else if(title==='New Profile'){
            const[file, setFile] = useState(null);
            const handleChange = (e) => {
                setFile(e.target.files[0]);
            }
            console.log(file)
            const handalSubmit= async()=>{
                const formData = new FormData();
                formData.append('file', file);
                try{
                    const res = await fetch('api/uploadImage',{
                        method:'POST',
                        body: formData
                    });
                    if(!res.ok){
                        throw new Error('Failed to save image');
                    }else if(res.ok){
                        alert('image saved successfully');
                    }
                }catch(error){
                    console.error('Error:', error);
                }finally{
                    onClose();
                    router.refresh()

                }
                
            }
        return(
            <div className="mx-12 h-18 justify-start items-center border rounded-xl shadow font-bold">
                <div className="flex flex-col items-center gap-2 p-4">
                    <div>{title}</div>
                    <input type="file" onChange={handleChange}/>
                </div>
                <div className="flex justify-between">
                    <button onClick={onClose} className="text-white  rounded-lg p-2 m-2 bg-black hover:text-black hover:bg-gray-600">
                            close
                    </button>                    
                    <button type="submit"onClick={handalSubmit} className="text-white  rounded-lg p-2 m-2 bg-blue-400 hover:text-gray-900">
                            save
                    </button>
                </div>
                
            </div>
        )
        }else if(title==='Add Link'){
            const [formData,setFormData] = useState({links:{label:'',uri:''}
            });
            const handleChange = (e)=>{
                var {name,value} = e.target;
                if ((name!== "label") &&!value.startsWith("http://") && !value.startsWith("https://")) {
                    value = "https://" + value;
                  }
                setFormData(prevState=>({
                    ...prevState,
                    links:{
                        ...prevState.links,
                        [name]:value
                    }
                })
                );
            }
            const handalSubmit= async()=>{
                try{
                    const res = await fetch('/api/page',{
                        method:'POST',
                        body: JSON.stringify(formData)
                    });
                    if(!res.ok){
                        throw new Error('Failed to save link');
                    }else if(res.ok){
                        alert('Uri saved successfully');
                    }
                }catch(error){
                    console.error('Error:', error);
                }finally{
                    onClose();
                    router.refresh()

                }
                
            }
            console.log(formData);

            return(
                <div className="mx-12 h-18 justify-start items-center border rounded-xl shadow font-bold">
                    <div className="flex flex-col items-center gap-2 p-4 justify-start">
                        <div>{title}</div>
                        <div className="flex flex-col items-center">
                            <div className="flex gap-2 p-2">
                                <span>label</span>
                                <input type="text" name='label'value={formData.label} onChange={handleChange}
                                className="bg-gray-200 rounded-md p-2">
                                </input>
                            </div>
                            <div className="flex gap-2 p-2">
                                <span>uri</span>
                                <input type="text" name='uri' value={formData.uri} onChange={handleChange}
                                className="bg-gray-200 rounded-md p-2">
                                </input>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-between">
                        <button onClick={onClose} className="text-white  rounded-lg p-2 m-2 bg-black hover:text-black hover:bg-gray-600">
                                close
                        </button>  
                        <button onClick={handalSubmit} className="text-white  rounded-lg p-2 m-2 bg-blue-400 hover:text-gray-900">
                                save
                        </button>
                    </div>
                    
                </div>
            )
            }else if(title==='Add Header'){

                const [formData,setFormData] = useState({header:''});
                const handleChange = (e)=>{
                    const {value} = e.target;
                    setFormData({header:value}
                    );
                }
                const handalSubmit= async()=>{
                    try{
                        const res = await fetch('/api/page',{
                            method:'POST',
                            body: JSON.stringify(formData)
                        });
                        if(!res.ok){
                            throw new Error('Failed to save Header');
                        }else if(res.ok){
                            alert('Header saved successfully');
                        }
                    }catch(error){
                        console.error('Error:', error);
                    }finally{
                        onClose();
                        router.refresh()

                    }
                    
                }
                console.log(formData);
                return(
                    <div className="mx-12 h-18 justify-start items-center border rounded-xl shadow font-bold">
                        <div className="flex flex-col items-center gap-2 p-4">
                            <div>{title}</div>
                            <div className="flex gap-2 items-center">
                                <span>Header</span>
                                <input type="text" name="header"value={formData.header} 
                                onChange={handleChange} className="bg-gray-200 rounded-md p-2">
                                </input>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button onClick={onClose} className="text-white  rounded-lg p-2 m-2 bg-black hover:text-black hover:bg-gray-600">
                                close
                            </button>  
                            <button onClick={handalSubmit} className="text-white  rounded-lg p-2 m-2 bg-blue-400 hover:text-gray-900">
                                    save
                            </button>
                        </div>
                        
                    </div>
                )
                }else if(title==='Display name'){
                    const [formData,setFormData] = useState({displayName:''});
                const handleChange = (e)=>{
                    const {value} = e.target;
                    setFormData({displayName:value}
                    );
                }
                const handalSubmit= async()=>{
                    try{
                        const res = await fetch('/api/page',{
                            method:'POST',
                            body: JSON.stringify(formData)
                        });
                        if(!res.ok){
                            throw new Error('Failed to save DisplayName');
                        }else if(res.ok){
                            alert('DisplayName saved successfully');
                        }
                    }catch(error){
                        console.error('Error:', error);
                    }finally{
                        
                        onClose();
                        router.refresh()

                    }
                    
                }
                console.log(formData);
                    return(
                        <div className="mx-12 h-18 justify-start items-center border rounded-xl shadow font-bold">
                            <div className="flex flex-col items-center gap-2 p-4">
                                <div>{title}</div>
                                    <div>
                                        <input type="text" name="displayName" 
                                        value={formData.displayName} 
                                        onChange={handleChange}
                                        className="bg-gray-200 rounded-md p-2">
                                        </input>
                                    </div>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={onClose} className="text-white  rounded-lg p-2 m-2 bg-black hover:text-black hover:bg-gray-600">
                                    close
                                </button>  
                                <button onClick={handalSubmit} className="text-white  rounded-lg p-2 m-2 bg-blue-400 hover:text-gray-900">
                                    save
                                </button>
                            </div>
                            
                        </div>
                    )
                    }
        
    

        
}