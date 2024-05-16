"use client"

import { addPost } from "@/utils/actions";
import styles from "./adminpostform.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}:any) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image" />
      <textarea name="desc" placeholder="Desc" rows={10} />
      <button type="submit">Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;