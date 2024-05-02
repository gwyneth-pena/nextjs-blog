import Link from "next/link";
import styles from "./Navbar.module.css";
import {Links} from "./Links/Links";


function Navbar() {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Blog</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar