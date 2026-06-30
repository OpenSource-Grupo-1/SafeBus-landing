import { useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'
import styles from './AboutProduct.module.css'

export default function AboutProduct() {
  const headerRef = useRef(null)
  const videoRef = useRef(null)
  useFadeUp(headerRef)
  useFadeUp(videoRef, 0.1)

  return (
    <section className={styles.section} id="about-product">
      <div ref={headerRef} className={styles.header}>
        <div className={styles.eyebrow}>Demo</div>
        <h2 className={styles.title}>
          ABOUT THE<br />
          <span className={styles.green}>PRODUCT</span>
        </h2>
        <p className={styles.subtitle}>
          Una vista directa de SafeBus en acción: monitoreo, alertas y control operativo para rutas más seguras.
        </p>
      </div>

      <div ref={videoRef} className={styles.videoShell}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/vaL66r8K1ck"
          title="About the product SafeBus"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  )
}
