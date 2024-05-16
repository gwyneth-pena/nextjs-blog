"use client";

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { handleLoginWithCreds } from "@/utils/authActions";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLoginWithCreds, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;