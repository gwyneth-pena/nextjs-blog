import styles from "@/app/blog/[slug]/singlepost.module.css";
import Image from "next/image";

function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>TEST</h1>
        <div className={styles.detail}>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              12.12.2012s
            </span>
          </div>
        </div>
        <div className={styles.content}>desc</div>
      </div>
    </div>
  )
}

export default SinglePost