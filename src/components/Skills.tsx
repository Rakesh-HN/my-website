import { skills } from "@/data/portfolio";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Tools I work with</h2>
        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill} className={styles.item}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
