import Image from "next/image"
import styles from "@/app/about/about.module.css";

function About() {
  return (
    <div>
        <div className={styles.imgContainer}>
            <Image src="/about.png" alt="About us" width={0} height={0} sizes="100vw" className={styles.img}/>
        </div>
    </div>
  )
}

export default About