import {Link as LinkType} from "@/components/Navbar/Links/Links";
import Link from "next/link";
import styles from "@/components/Navbar/Links/NavLink/navlink.module.css";
import { usePathname } from "next/navigation";

function NavLink({title, path}: LinkType) {

  const pathName = usePathname();
  
  return <Link 
            href={path}
            className={`${styles.container} ${
                pathName === path && styles.active
              }`}
        >
            {title}
        </Link>;
}

export default NavLink