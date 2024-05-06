"use client"

import { addPost } from "@/utils/actions"
import { useRef } from "react";

function page() {

  const form = useRef<HTMLFormElement>(null);

  return (
    <form ref={form} action={async(formdata:any)=>{
      await addPost(formdata);
      form.current?.reset();
    }}>
        <input type="text" name="title" id="title" required/>
        <input type="text" name="desc" id="desc" required/>
        <input type="text" name="slug" id="slug" required/>
        <input type="text" name="img" id="img"/>
        <input type="text" name="userId" id="userId" required/>
        <button type="submit">Create</button>
    </form>
  )
}

export default page