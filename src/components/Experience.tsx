import { experience } from "@/data/portfolio";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <ol className={styles.list}>
          {experience.map((job) => (
            <li key={job.company} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.role}>{job.role}</h3>
                <span className={styles.period}>{job.period}</span>
              </div>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.summary}>{job.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
