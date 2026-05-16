import { about } from "@/data/portfolio";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">Building products with care</h2>
        <div className={styles.grid}>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className={styles.text}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
