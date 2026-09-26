import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = ({ data, title, logo }) => {
  return (
    <nav className={styles.header}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <span className={styles.logoMark}>{logo}</span>
          <span>{title}</span>
        </Link>
        <div className={styles.navbarMenu}>
          {data.map((item) => (
            <div className={styles.navbarItem} key={item.id}>
              <Link href={item.url}>{item.name}</Link>
            </div>
          ))}
        </div>
        <Link href="/" className={styles.navbarLogo}>
          <span className={styles.logoMark}>{logo}4</span>
          <span>{title}3</span>
        </Link>
        <Link href="/" className={styles.navbarLogo}>
          <span className={styles.logoMark}>{logo}5</span>
        </Link>
        <span>{title}7</span>
        <span>{title}8</span>
      </div>
    </nav>
  );
};

export default Navbar;
