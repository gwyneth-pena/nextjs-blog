import styles from '@/components/postCard/postcard.module.css';
import Image from 'next/image';
import Link from 'next/link';

function PostCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="Post" fill className={styles.img}/>
            </div>
            <span className={styles.date}>03.02.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <Link href="/blog/post">READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard