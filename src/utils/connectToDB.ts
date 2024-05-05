import mongoose from "mongoose";

const connection:any = {};


export async function connectToDB(){
    try {
        if(!connection.isConnected){
            const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB||"");
            connection.isConnected = db.connections[0].readyState;
        }
    } catch (error:any) {
        console.log(error);
        throw new Error(error);
    }
}