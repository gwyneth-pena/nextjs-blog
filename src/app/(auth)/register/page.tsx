import styles from "@/app/(auth)/register/register.module.css";
import RegisterForm from "@/components/RegisterForm/page";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register