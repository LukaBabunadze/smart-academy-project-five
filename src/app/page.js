import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <p>გამარჯობა, როგორ ხართ?</p>
      <Footer />
    </div>
  );
}
