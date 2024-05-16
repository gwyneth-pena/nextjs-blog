"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post } from "./models";
import { ErrorMsgs } from "./errorEnums";

export const addPost = async (formData:any)=>{
    try{

        connectToDB();
        const data = Object.fromEntries(formData);
        const post = new Post({...data});
        
        revalidatePath("/blog");

    }catch(err){
        console.log(err);
        return {error: ErrorMsgs.RANDOM_ERROR};
    }
};

export const deletePost = async (formData:any)=>{
    try{

        connectToDB();
        const data = Object.fromEntries(formData);
        await Post.findByIdAndDelete(data);
        revalidatePath("/blog");

    }catch(err){
        console.log(err);
        return {error: ErrorMsgs.RANDOM_ERROR};
    }
};