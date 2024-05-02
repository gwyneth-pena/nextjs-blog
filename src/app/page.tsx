
import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Home() {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Innovative Ideas</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure totam ea ut nihil! Expedita ducimus obcaecati quidem est dolores, libero quibusdam suscipit magni ad, cupiditate voluptate, placeat reprehenderit maxime perferendis!</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="Brands" fill/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg}/>
    </div>
  </div>;
}
