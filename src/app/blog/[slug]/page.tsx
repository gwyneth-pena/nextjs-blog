import styles from "@/app/blog/[slug]/singlepost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import { convertDate } from "@/utils/date";
import { getPost } from "@/utils/postService";
import Image from "next/image";
import { Suspense } from "react";


export const generateMetadata = async ({params}:any)=>{
  const post:any = await getPost(params.slug);
  let  metadata = {
    title: "Something went wrong",
    description: ""
  };

  if(post.length>0){
    metadata =   {
      title: post[0].title,
      description: post[0].desc
    }
  }
  return metadata;
};


async function SinglePost({params}:any) {
  const post:any = await getPost(params.slug);

  return (
    <div className={styles.container}>
      {
        post.length>0 &&
        <>
          <div className={styles.imgContainer}>
            <Image src={post[0]?.img?post[0]?.img:'/about.png'} alt={post[0]?.title} fill className={styles.img} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{post[0]?.title}</h1>
            <div className={styles.detail}>
            {post && (
                <Suspense fallback={<div>Loading...</div>}>
                  <PostUser userId={post[0]?.userId} />
                </Suspense>
              )}
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>
                  {convertDate(post[0]?.createdAt)}
                </span>
              </div>
            </div>
            <div className={styles.content}>{post[0]?.desc}</div>
          </div>
        </>
      }
      {
        post.length==0 &&
        <div style={{fontSize:'3rem', fontWeight:'bold', textAlign:'center', width:"100%"}}>Post not found.</div>
      }
    </div>
  )
}

export default SinglePost