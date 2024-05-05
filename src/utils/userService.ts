import { connectToDB } from "./connectToDB";
import { User } from "./models";


connectToDB();

export async function getUser(userId:any){
    try{
        
        let response:any[] | null = [];
        if(userId) response = await User.findById(userId);
        else  response = await User.find();

        return response;
        
    }catch(err:any){
        console.log(err);
        throw new Error("Failed to fetch user/s.");
    }
}