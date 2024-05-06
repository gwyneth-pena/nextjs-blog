import { handleLogin } from "@/utils/authActions"

async function Login() {

  return (
    <div>
        <form action={handleLogin}>
            <button type="submit">Login with Github</button>
        </form>
    </div>
  )
}

export default Login