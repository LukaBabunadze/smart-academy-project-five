"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkUser } from "@/helpers";

const Navbar = ({ data, title, logo }) => {
  const cart = useAppSelector((state) => state.cart);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigateUser = (url) => {
    const isUserLoggedIn = checkUser();
    if (isUserLoggedIn || url === "/contact") {
      router.push(url);
    } else {
      router.push("/login");
    }
  };

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
              <div onClick={() => handleNavigateUser(item.url)}>
                <span>{item.name}</span>
                {item.url === "/cart" && cart.totalQuantity > 0 ? (
                  <span className={styles.cartBadge}>{cart.totalQuantity}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
