"use client";

import { useState } from "react";
import styles from "./links.module.css";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink/NavLink";
import { auth } from "@/utils/auth";
import { handleLogout } from "@/utils/authActions";

interface Link{
    title: string,
    path: string
  }

const links: Link[]= [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = async ({}) => {

  const [open, setOpen] = useState(false);

  let session:any = await auth();
  let isAdmin = session?.user?.isAdmin;


  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link: Link) => {
            return <NavLink title={link.title} path={link.path} key={link.title}/>;
        })}
        {
            session ? 
             <>
                {isAdmin &&  <NavLink title="Admin" path="/admin" key={"Login"}></NavLink>}
                <form action={handleLogout}>
                  <button type="submit" className={styles.logout}>Logout</button>
                </form>
             </>
            :
            <NavLink title="Login" path="/login" key={"Login"}></NavLink>
        }
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen(() => !open)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink path={link.path} title={link.title} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export {Links, Link};