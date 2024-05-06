"use server"


import { signIn, signOut } from "./auth";

export const handleLogin = async ()=>{
    await signIn("github");
}

export const handleLogout= async ()=>{
    await signOut();
}