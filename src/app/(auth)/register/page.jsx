"use client";
import Link from "next/link";
import styles from "./page.module.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const userSchema = yup.object().shape({
  username: yup
    .string()
    .required("სახელის ველის შევსება აუცილებელია")
    .min(4, "სახელის ველი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს")
    .max(20, "სახელის ველი უნდა შეიცავდეს მაქსიმუმ 20 სიმბოლოს"),
  email: yup
    .string()
    .required("მეილის შევსება აუცილებელია")
    .email("გთხოვთ, შეიყვანოთ ვალიდური ელ.ფოსტის მისამართი"),
  password: yup
    .string()
    .required("პაროლის ველის შევსება აუცილებელია")
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
    .max(20, "პაროლი უნდა შეიცავდეს მაქსიმუმ 20 სიმბოლოს"),
});

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  const handleUserRegistration = async (data) => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.id) {
        router.push("/");
        reset();
      }
    } catch (error) {
      return alert(
        "რეგისტრაციის პროცესში მოხდა შეცდომა. გთხოვთ, სცადოთ მოგვიანებით.",
      );
    }
  };

  return (
    <div className={styles.pageShell}>
      <div className={styles.formCard}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Create your account</span>
          <h2>Register Page</h2>
          <p>Join the market and start exploring.</p>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleUserRegistration)}
        >
          <div className={styles.fieldGroup}>
            <label htmlFor="username">Username:</label>
            <input
              className={styles.input}
              type="text"
              {...register("username")}
            />
            {errors.username && (
              <p className={styles.error}>{errors.username.message}</p>
            )}

            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              className={styles.input}
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <button className={styles.submitButton} type="submit">
            Register
          </button>
        </form>
        <Link className={styles.loginLink} href="/login">
          Already have an account? <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
