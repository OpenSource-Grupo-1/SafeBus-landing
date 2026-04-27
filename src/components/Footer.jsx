import styles from './Footer.module.css'

const LINKS = ['Privacidad', 'Seguridad', 'Contacto', 'Sistema']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.logo}>UrbanGuard</div>
        <div className={styles.copy}>© 2026 UrbanGuard Grupo 1 · UPC</div>
      </div>
      <nav>
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l}><a href="#" className={styles.link}>{l}</a></li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
