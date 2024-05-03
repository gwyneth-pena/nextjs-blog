import styles from "@/components/Footer/footer.module.css";

function Footer() {
  return <div className={styles.container}>
    <div className={styles.logo}>
        Blog
    </div>
    <div className={styles.text}>
      Blog &copy; All rights reserved.
    </div>
  </div>;
}

export default Footer