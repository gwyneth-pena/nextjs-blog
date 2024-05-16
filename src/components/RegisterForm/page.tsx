"use client";

import styles from "@/components/RegisterForm/registerform.module.css";
import { register } from "@/utils/authActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

function RegisterForm() {

  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success ? router.push("/login"): null;
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" id="username" required/>
      <input type="email" placeholder="Email" name="email" id="email" required/>
      <input type="password" placeholder="Password" name="password" id="password" minLength={6} required/>
      <input type="password" placeholder="Confirm Password" name="confirmPassword" id="consfirmPassword" minLength={6} required/>
      {state?.error && <p>{state.error}</p>}
      <button type="submit">Register</button>
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm