import styles from "@/app/blog/[slug]/singlepost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import Image from "next/image";
import { Suspense } from "react";


async function getData(slug:string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next: {revalidate: 3600}});

  if(!res.ok){
    throw new Error("Something went wrong.");
  }
  return await res.json();
}

async function SinglePost({params}:any) {

  const post:any = await getData(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
        {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              12.12.2012s
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePost