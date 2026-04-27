import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'CARACTERÍSTICAS', target: 'features' },
  { label: 'CÓMO FUNCIONA', target: 'como-funciona' },
  { label: 'ESTADÍSTICA', target: 'estadistica' },
  { label: 'APOYO', target: 'apoyo' },
]

export default function Navbar() {
  const [active, setActive] = useState('CARACTERÍSTICAS')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id, label) => {
    setActive(label)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>SafeBus</div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ label, target }) => (
          <li key={label}>
            <button
              className={`${styles.link} ${active === label ? styles.activeLink : ''}`}
              onClick={() => scrollTo(target, label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button className={styles.btnIngresar}>INGRESAR</button>

      <button className={styles.hamburger} onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
      </button>
    </nav>
  )
}
