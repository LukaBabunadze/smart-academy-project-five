"use client";
import { useAppSelector } from "@/lib/hooks";
import styles from "./page.module.css";
import { useAppDispatch } from "@/lib/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/lib/slices/cartSlice";

function CartPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const hasProducts = cart.cartProducts.length > 0;

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <main className={styles.page}>
      <div className={styles.cart}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Order summary</p>
            <h1 className={styles.title}>Your cart</h1>
          </div>
          <span className={styles.itemCount}>
            {cart.totalQuantity} {cart.totalQuantity === 1 ? "item" : "items"}
          </span>
        </header>

        {hasProducts ? (
          <>
            <ul className={styles.products}>
              {cart.cartProducts.map((product) => (
                <li className={styles.product} key={product.id}>
                  <div className={styles.imageWrap}>
                    <img className={styles.image} src={product.image} alt="" />
                  </div>
                  <div className={styles.productInfo}>
                    <h2>{product.title}</h2>
                    <p>
                      ${product.price.toFixed(2)}{" "}
                      <span aria-hidden="true">·</span> Quantity{" "}
                      <button
                        className={styles.quantityButton}
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        Decrease quantity
                      </button>
                      {product.quantity}
                      <button
                        className={styles.quantityButton}
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        Increase quantity
                      </button>
                      <button
                        className={styles.removeButton}
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Remove
                      </button>
                    </p>
                  </div>
                  <strong className={styles.productTotal}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </strong>
                </li>
              ))}
            </ul>

            <footer className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total quantity</span>
                <strong>{cart.totalQuantity}</strong>
              </div>
              <div className={styles.totalRow}>
                <span>Total price</span>
                <strong>${cart.totalPrice.toFixed(2)}</strong>
              </div>
            </footer>
          </>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyIcon} aria-hidden="true">
              ♡
            </span>
            <h2>Your cart is empty</h2>
            <p>Add a few favorites and they will appear here.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default CartPage;
