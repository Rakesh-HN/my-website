import { projects } from "@/data/portfolio";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Selected work</h2>
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.title}>
              <article className={`card ${styles.card}`}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <ul className={styles.tech}>
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Source →
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Live demo →
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
