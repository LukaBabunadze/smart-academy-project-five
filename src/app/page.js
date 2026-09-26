import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";

const navbarItems = [
  { id: 1, name: "Home", url: "/home" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Contact", url: "/contact" },
];

const footerItems = [
  { id: 1, name: "Privacy Policy" },
  { id: 2, name: "Terms of Service" },
  { id: 3, name: "Contact" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar data={navbarItems} title={"My First Website"} logo={"M"} /> 
      <div>main page content</div>
      <button>this is button</button>
      <Footer list={footerItems} />
    </div>
  );
}
