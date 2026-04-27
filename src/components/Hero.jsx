import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add(styles.loaded), 100)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero" ref={heroRef}>
      <div className={styles.gridOverlay} />
      <div className={styles.glowRight} />
      <div className={styles.glowLeft} />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          UNIDAD DE PROTECCIÓN TÁCTICA
        </div>

        <h1 className={styles.title}>
          <span className={styles.white}>PROTEGE<br />TU RUTA,<br /></span>
          <span className={styles.green}>ASEGURA TU<br />FUTURO.</span>
        </h1>

        <p className={styles.subtitle}>
          Sistema inteligente de defensa contra la extorsión y el crimen organizado
          en el transporte público del Perú. Vigilancia 24/7 y respuesta táctica inmediata.
        </p>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('como-funciona')}>
            EMPEZAR AHORA →
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('features')}>
            VER CARACTERÍSTICAS
          </button>
        </div>

        <div className={styles.statsBar}>
          {[
            { value: '98%', label: 'Rutas Seguras Operativas' },
            { value: '+1000', label: 'Conductores Protegidos' },
            { value: '-40%', label: 'Reducción de Incidentes' },
          ].map((s, i) => (
            <div className={styles.statItem} key={i}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
