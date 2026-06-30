import { useRef, useState } from 'react'
import useFadeUp from '../hooks/useFadeUp'
import alertLogs from '../assets/images/alertLogs.jpg'
import controlCenter from '../assets/images/ControlCenter.jpg'
import dashboard from '../assets/images/dashboard.jpg'
import panicSignal from '../assets/images/panicSignal.jpg'
import passengerCounter from '../assets/images/passengerCounter.jpg'
import styles from './ImageShowcase.module.css'

const IMAGES = [
  { src: controlCenter, alt: 'Centro de control SafeBus', label: 'Control Center' },
  { src: dashboard, alt: 'Dashboard operativo SafeBus', label: 'Dashboard' },
  { src: passengerCounter, alt: 'Conteo de pasajeros SafeBus', label: 'Passenger Counter' },
  { src: alertLogs, alt: 'Registro de alertas SafeBus', label: 'Alert Logs' },
  { src: panicSignal, alt: 'Señal de pánico SafeBus', label: 'Panic Signal' },
]

export default function ImageShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const headerRef = useRef(null)
  const showcaseRef = useRef(null)
  useFadeUp(headerRef)
  useFadeUp(showcaseRef, 0.1)

  const activeImage = IMAGES[activeIndex]
  const move = (direction) => {
    setActiveIndex((current) => (current + direction + IMAGES.length) % IMAGES.length)
  }

  return (
    <section className={styles.section} id="product-gallery">
      <div ref={headerRef} className={styles.header}>
        <div className={styles.eyebrow}>Interfaz</div>
        <h2 className={styles.title}>
          PRODUCT<br />
          <span className={styles.green}>GALLERY</span>
        </h2>
        <p className={styles.subtitle}>
          Pantallas clave para entender cómo se visualiza la operación diaria de SafeBus.
        </p>
      </div>

      <div ref={showcaseRef} className={styles.showcase}>
        <button className={`${styles.arrow} ${styles.prev}`} onClick={() => move(-1)} aria-label="Imagen anterior">
          <span aria-hidden="true">‹</span>
        </button>

        <div className={styles.imageFrame}>
          <img className={styles.image} src={activeImage.src} alt={activeImage.alt} />
          <div className={styles.caption}>
            <span>{activeImage.label}</span>
            <span>
              {activeIndex + 1}/{IMAGES.length}
            </span>
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.next}`} onClick={() => move(1)} aria-label="Imagen siguiente">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  )
}
