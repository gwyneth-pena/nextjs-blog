'use client'
import styles from "@/app/contact/contact.module.css";
import { sendEmail } from "@/utils/sendEmail";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Circles } from "react-loader-spinner";


export type FormData = {
  name: string;
  email: string;
  message: string;
  phoneNumber?: string;
};


function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormData>();
  const { isSubmitting } = formState;


  const onSubmit = async (data: FormData)=>{
    const response = await fetch('/api/mail', {
      method: 'POST', 
      body: JSON.stringify(data)});

    response.json();
    reset();
  };

  return (
    
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="" fill className={styles.img} />
    </div>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" {...register("name", {required: true})} placeholder="Name and Surname" required/>
        <input type="text" {...register("email",{required: true})} placeholder="Email Address" required/>
        <input type="text" {...register("phoneNumber")} placeholder="Phone Number (Optional)" />
        <textarea
          {...register("message", {required: true})}
          cols={30}
          rows={10}
          placeholder="Message"
          required
        ></textarea>
        <button disabled={isSubmitting} type="submit">{!isSubmitting? 'Send': 
          <Circles
            height="30"
            width="30"
            color="#fff"
            ariaLabel="circles-loading"
            wrapperStyle={{display:"flex", justifyContent:"center"}}
            wrapperClass=""
            visible={true}
            />}
        </button>
      </form>
    </div>
  </div>
  )
}

export default Contact