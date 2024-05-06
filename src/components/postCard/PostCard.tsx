import styles from '@/components/postCard/postcard.module.css';
import { convertDate } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

function PostCard({post}:any) {

  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={post.img!=""?post.img:'/about.png'} alt={post.title} fill className={styles.img}/>
            </div>
            <span className={styles.date}>{convertDate(post.createdAt)}</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
            <Link href={`/blog/${post.slug}`}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard