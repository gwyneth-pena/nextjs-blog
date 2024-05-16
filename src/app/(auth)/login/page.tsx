import LoginForm from "@/components/LoginForm/LoginForm"
import { handleLoginViaGithub, handleLoginWithCreds } from "@/utils/authActions"
import styles from './login.module.css'

async function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleLoginViaGithub}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login