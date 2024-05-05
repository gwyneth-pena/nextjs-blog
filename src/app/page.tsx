
import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Home() {
  return  (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Innovative Ideas</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Banner" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg} unoptimized/>
      </div>
    </div>
  );;
}
