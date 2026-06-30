import { useRef, useState } from 'react'
import useFadeUp from '../hooks/useFadeUp'
import styles from './AboutProduct.module.css'

const VIDEOS = [
  {
    label: 'Product',
    title: 'PRODUCT',
    eyebrow: 'Demo',
    subtitle: 'Una vista directa de SafeBus en acción: monitoreo, alertas y control operativo para rutas más seguras.',
    src: 'https://www.youtube.com/embed/vaL66r8K1ck',
    iframeTitle: 'About the product SafeBus',
  },
  {
    label: 'Team',
    title: 'TEAM',
    eyebrow: 'Equipo',
    subtitle: 'Conoce al equipo detrás de SafeBus y la visión que impulsa una operación de transporte más segura.',
    src: 'https://www.youtube.com/embed/I53Clp5sgiY',
    iframeTitle: 'About the team SafeBus',
  },
]

export default function AboutProduct() {
  const [activeIndex, setActiveIndex] = useState(0)
  const headerRef = useRef(null)
  const videoRef = useRef(null)
  useFadeUp(headerRef)
  useFadeUp(videoRef, 0.1)

  const activeVideo = VIDEOS[activeIndex]
  const move = (direction) => {
    setActiveIndex((current) => (current + direction + VIDEOS.length) % VIDEOS.length)
  }

  return (
    <section className={styles.section} id="about-product">
      <div ref={headerRef} className={styles.header}>
        <div className={styles.eyebrow}>{activeVideo.eyebrow}</div>
        <h2 className={styles.title}>
          ABOUT THE<br />
          <span className={styles.green}>{activeVideo.title}</span>
        </h2>
        <p className={styles.subtitle}>{activeVideo.subtitle}</p>
      </div>

      <div ref={videoRef} className={styles.videoShowcase}>
        <button className={`${styles.arrow} ${styles.prev}`} onClick={() => move(-1)} aria-label="Video anterior">
          <span aria-hidden="true">‹</span>
        </button>

        <div className={styles.videoShell}>
          <iframe
            key={activeVideo.src}
            className={styles.video}
            src={activeVideo.src}
            title={activeVideo.iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className={styles.caption}>
            <span>{activeVideo.label}</span>
            <span>
              {activeIndex + 1}/{VIDEOS.length}
            </span>
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.next}`} onClick={() => move(1)} aria-label="Video siguiente">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  )
}
