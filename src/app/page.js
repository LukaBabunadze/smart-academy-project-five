"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkUser, checkLocalProducts } from "../helpers";

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const isUserLoggedIn = checkUser();
    if (!isUserLoggedIn) {
      router.push("/login");
    }

    const localProducts = checkLocalProducts();
    if (localProducts !== false) {
      setProducts(localProducts);
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("products", JSON.stringify(result));
          return setProducts(result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleGoToProductDetails = (id) => {
    router.push(`/productDetails/${id}`);
  };

  if (products === null) {
    return <div>იტვირთებაააააა...</div>;
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Featured products</p>
        <h1>Find something you love</h1>
        <p className={styles.subtitle}>
          A simple selection of everyday favorites.
        </p>
      </header>

      <main className={styles.products}>
        {products?.map((item) => (
          <article
            className={styles.card}
            key={item.id}
            onClick={() => handleGoToProductDetails(item.id)}
          >
            <div className={styles.imageWrap}>
              <img className={styles.image} src={item.image} alt={item.title} />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.category}>{item.category}</p>
              <h2>{item.title}</h2>
              <div className={styles.details}>
                <strong>${item.price.toFixed(2)}</strong>
                <span className={styles.rating}>★ {item.rating.rate}</span>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
