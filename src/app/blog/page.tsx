
import styles from '@/app/blog/blog.module.css';
import PostCard from '@/components/postCard/PostCard';
import { getPost } from '@/utils/postService';


async function Blog() {
  const posts:any = await getPost();

  return (
    <div className={styles.container}>
      {posts.length==0 && 
            <div style={{fontSize:'3rem', fontWeight:'bold', textAlign:'center', width:'100%'}}>No post/s.</div>
      }
      {
        posts.length>0 &&
        posts.map((post:any)=>{
          return(     
          <div key={post.id} className={styles.post}>
            <PostCard post={post} key={post.id}/>
          </div>);
        })
      }
    </div>
  )
}

export default Blog