import { site } from "@/data/portfolio";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.greeting}>
          <span className={styles.pulse} aria-hidden />
          Open to internships
        </p>

        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>{site.name}</span>
          <br />
          <span className={styles.role}>{site.title}</span>
        </h1>

        <p className={styles.tagline}>{site.tagline}</p>

        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <dl className={styles.stats}>
          <div>
            <dt>Location</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Java &amp; Web</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>Java / SQL / HTML</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
