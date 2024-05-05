import styles from "@/components/PostUser/postuser.module.css";
import { getUser } from "@/utils/userService";
import Image from "next/image";


async function PostUser({userId}:any) {

  const user:any = await getUser(userId);

  return (
    <div className={styles.container}>
          <Image
            className={styles.avatar}
            src={user.img ? user.img : "/noavatar.png"}
            alt={user.username}
            width={50}
            height={50}
          />
          <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
          </div>
        </div>

  )
}

export default PostUser