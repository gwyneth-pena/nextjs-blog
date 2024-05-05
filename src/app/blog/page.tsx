
import styles from '@/app/blog/blog.module.css';
import PostCard from '@/components/postCard/PostCard';

async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}});

  if(!res.ok){
    throw new Error("Something went wrong.");
  }
  return await res.json();
}

async function Blog() {
  const posts:any = await getData();

  return (
    <div className={styles.container}>
      {posts.length==0 && 
            <div style={{fontSize:'3rem', fontWeight:'bold', textAlign:'center', width:'100%'}}>No post/s.</div>
      }
      {
        posts.length>0 &&
        posts.map((post:any)=>{
          return(     
          <div className={styles.post}>
            <PostCard post={post} />
          </div>);
        })
      }
    </div>
  )
}

export default Blog