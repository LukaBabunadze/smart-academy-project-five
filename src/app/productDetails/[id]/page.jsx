"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

function page() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    setProduct(result);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.id) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (product === null) {
    return <div>loading....</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.product}>
        <div className={styles.imagePanel}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.details}>
          <p className={styles.category}>{product.category}</p>
          <h2>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.meta}>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.rating}>{product.rating.rate} / 5 rating</p>
          </div>
          <button className={styles.button} onClick={handleDeleteProduct}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
