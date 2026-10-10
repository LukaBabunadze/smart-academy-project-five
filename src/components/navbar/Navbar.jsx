"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = ({ data, title, logo }) => {
  const pathname = usePathname();
  return (
    <nav className={styles.header}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <span className={styles.logoMark}>{logo}</span>
          <span>{title}</span>
        </Link>
        <div className={styles.navbarMenu}>
          {data.map((item) => (
            <div
              className={`${styles.navbarItem} ${pathname === item.url ? styles.activeItem : null}`}
              key={item.id}
            >
              <Link href={item.url}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
