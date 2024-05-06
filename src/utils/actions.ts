"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post } from "./models";

export const addPost = async (formData:any)=>{
    try{

        connectToDB();
        const data = Object.fromEntries(formData);
        const post = new Post({...data});
        
        revalidatePath("/blog");

    }catch(err){
        console.log(err);
        return {error: "Something went wrong."};
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
        return {error: "Something went wrong."};
    }
};