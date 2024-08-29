import {model, models, Schema} from "mongoose";


const PageSchema = new Schema({
    uri:{type:String,required:true,min:1,unique: true},
    owner:{type:String, required:true},
    displayName: {type: String, default: ''},
    profilePic : {type: String, default: ''},
    header: {type: String, default: ''},
    bgColor: {type: String, default: '#FFFFFF'},
    links: {type: Object, default: []},
},{timestamps:true});

export const Page = models?.Page || model('Page', PageSchema);