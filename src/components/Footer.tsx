import { site } from "@/data/portfolio";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {site.name}. Built with Next.js.
        </p>
        <a href="#contact" className={styles.top}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
