"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

const page = () => {
  const router = useRouter();
  const inputRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("m38rmF$");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsernameError(null);
    setPasswordError(null);

    if (username.length === 0) {
      return setUsernameError("Username is required");
    }

    if (password.length === 0) {
      return setPasswordError("Password is required");
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (result.token) {
        localStorage.setItem("user", JSON.stringify(result.token));
        router.push("/");
      } else {
        return alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      return alert(
        "An error occurred while signing in. Please try again later.",
      );
    }
  };

  const handleSeePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.pageShell}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Welcome back</span>
          <h3>Sign In</h3>
          <p>Please sign in to access the market.</p>
        </div>
        <div className={styles.fieldGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            ref={inputRef}
          />
          {usernameError && <p className={styles.error}>{usernameError}</p>}
          <input
            className={styles.input}
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError ? (
            <p className={styles.error}>{passwordError}</p>
          ) : null}
        </div>
        <p className={styles.passwordToggle} onClick={handleSeePassword}>
          See password
        </p>
        <button className={styles.submitButton} type="submit">
          Sign In
        </button>
      </form>

      <Link href="/register" className={styles.registerLink}>
        Don't have an account? <span>Sign Up</span>
      </Link>
    </div>
  );
};

export default page;
