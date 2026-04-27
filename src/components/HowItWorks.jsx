import { useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '1',
    title: 'Inicio de Turno',
    desc: 'Validación obligatoria mediante escaneo QR y reconocimiento de identidad en base.',
  },
  {
    num: '2',
    title: 'Monitoreo Constante',
    desc: 'Sensores y cámaras de IA supervisan el trayecto y el comportamiento de la unidad.',
  },
  {
    num: '3',
    title: 'Alerta Inmediata',
    desc: 'Detección de amenazas externas o anomalías activando el cerco digital táctico.',
    alert: true,
  },
  {
    num: '4',
    title: 'Intervención',
    desc: 'Coordinación directa con patrullaje cercano y equipos de respuesta rápida SafeBus.',
  },
]

export default function HowItWorks() {
  const titleRef = useRef(null)
  const stepsRef = useRef(null)
  useFadeUp(titleRef)
  useFadeUp(stepsRef, 0.1)

  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.inner}>
        <div ref={titleRef} className={styles.header}>
          <div className={styles.eyebrow}>Proceso</div>
          <h2 className={styles.title}>
            ¿CÓMO FUNCIONA<br />
            <span className={styles.green}>SAFEBUS?</span>
          </h2>
          <p className={styles.subtitle}>
            Un flujo diseñado para la máxima eficiencia operativa y seguridad total.
          </p>
        </div>

        <div ref={stepsRef} className={styles.stepsGrid}>
          {STEPS.map((s) => (
            <div key={s.num} className={`${styles.step} ${s.alert ? styles.alertStep : ''}`}>
              <div className={styles.stepNumBg}>0{s.num}</div>
              <div className={`${styles.badge} ${s.alert ? styles.badgeAlert : ''}`}>{s.num}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
