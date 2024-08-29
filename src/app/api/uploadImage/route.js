import axios from "axios";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { Page } from "@/models/Page";

export async function POST(request) {
    const formData = await request.formData()
    const file = formData.get('file')
    const session = await getServerSession(authOptions);
    const owner = {owner:session?.user?.email};
    console.log("owner",owner)
    if(!file){
        return Response.json({status:"404",Error:"no file"})
    }
    try{
        const cloudinaryData = new FormData();
        cloudinaryData.append("upload_preset", "testing");
        cloudinaryData.append("file", file);
        cloudinaryData.append("api_key", "lKfZ_ir21qNNpmdzPHtCdklAdac");
        console.log('formdata:', formData)

        const instance = axios.create();
        const response = await instance.post(
            `https://api.cloudinary.com/v1_1/dcad8p8il/image/upload`,
            cloudinaryData);
            const receivedData = await response.data;
            console.log('receivedData: ', receivedData);
            const imageUrls = receivedData.secure_url;
            console.log('link: ', imageUrls);
            if(imageUrls){
                mongoose.connect(process.env.MONGODB_URI);
                const res = await Page.findOneAndUpdate(owner,{profilePic:imageUrls})
                console.log("res",res)
                return Response.json({status:"200",Message:"image successfully updated"})
            }
            
            return Response.json({imageUrl:imageUrls});
          }catch(error){
            console.error('Error uploading image', error)
            return Response.error(error)
          }
          return Response.json({file:"null"})

    
  }