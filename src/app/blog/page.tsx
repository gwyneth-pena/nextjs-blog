
import styles from '@/app/blog/blog.module.css';
import PostCard from '@/components/postCard/PostCard';


function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard/>
      </div>
      <div className={styles.post}>
        <PostCard/>
      </div>
      <div className={styles.post}>
        <PostCard/>
      </div>
    </div>
  )
}

export default Blog