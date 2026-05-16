import { site } from "@/data/portfolio";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.inner}`}>
        <span className="section-label">Contact</span>
        <h2 className={styles.title}>Let&apos;s build something together</h2>
        <p className={styles.sub}>
          Open to internships and entry-level roles in web development or software
          programming. Keen to talk tech, projects, or collaborate.
        </p>
        <div className={styles.actions}>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          {site.email ? (
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              Email me
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
