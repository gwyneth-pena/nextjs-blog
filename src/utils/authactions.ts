"use server"


import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { User } from "./models";
import { ErrorMsgs } from "./errorEnums";
import { connectToDB } from "./connectToDB";

export const handleLoginViaGithub = async ()=>{
    await signIn("github");
}

export const handleLogout= async ()=>{
    await signOut();
}

export const register = async(previousState:any, data: any)=>{
    try{
        connectToDB();
        let {
            username,
            password,
            confirmPassword,
            email
        } = Object.fromEntries(data);

        let user = await User.findOne({email});

        if(user){
            return {error: "User already exists."};
        }

        if(password!=confirmPassword){
            return {error: "Passwords do not match."};
        }

        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            username,
            email,
            password
        });
        
        await newUser.save();
        return {success: true};

    }catch(error){
        console.log(error);
        return {error: ErrorMsgs.RANDOM_ERROR};
    }
}

export const handleLoginWithCreds = async(previousState:any,data:any)=>{
    try {
        const { username, password } = Object.fromEntries(data);
        await signIn("credentials",{username, password});
        return {success: true};
    } catch (error:any) {
        if (error.message.includes("NEXT_REDIRECT")) {
            throw error;
        }

        return {error: 'Invalid credentials.'};
    }
};