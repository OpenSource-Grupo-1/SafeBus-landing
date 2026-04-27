import { useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'
import styles from './CTABand.module.css'

export default function CTABand() {
  const ref = useRef(null)
  useFadeUp(ref)

  return (
    <section className={styles.outer} id="apoyo">
      <div ref={ref} className={styles.band}>
        <div className={styles.glow} />
        <div className={styles.content}>
          <h2 className={styles.title}>
            PROTECCIÓN DE ÉLITE<br />
            <span className={styles.green}>PARA TU FLOTA</span>
          </h2>
          <p className={styles.sub}>
            No dejes la seguridad de tus conductores y pasajeros al azar.
            Implementa SafeBus hoy mismo y toma el control de tus rutas.
          </p>
        </div>
        <button className={styles.btn}>SOLICITAR AUDITORÍA DE SEGURIDAD</button>
      </div>
    </section>
  )
}
