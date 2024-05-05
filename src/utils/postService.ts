import { connectToDB } from "./connectToDB";
import { Post } from "./models";

connectToDB();

export async function getPost(slug?:string){
    try{

        let response:any[] = [];
        
        if(!slug) response = await Post.find();
        else  response = await Post.find({slug});
        return response;

    }catch(err:any){
        console.log(err);
        throw new Error("Failed to fetch post/s.");
    }
}