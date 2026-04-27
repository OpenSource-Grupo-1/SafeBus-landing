import { useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'
import styles from './Features.module.css'

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M14 14h1v1m4 0v1m0 4h-1v-1m-4 1v-1m0-4h4v4h-4z"/>
      </svg>
    ),
    name: 'Verificación QR',
    desc: 'Control estricto de tripulación mediante autenticación biométrica y digital antes de cada despacho.',
    panic: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      </svg>
    ),
    name: 'Botón de Pánico',
    desc: 'Activación silenciosa de protocolos de seguridad ante amenazas directas con enlace a la PNP.',
    panic: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    name: 'Conteo de Pasajeros',
    desc: 'Análisis de flujo en tiempo real mediante IA para detectar irregularidades o paradas no autorizadas.',
    panic: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1" fill="currentColor"/>
        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    name: 'Monitoreo Real',
    desc: 'Geolocalización satelital precisa con telemetría de ruta para cada unidad en circulación.',
    panic: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
      </svg>
    ),
    name: 'Alertas Inteligentes',
    desc: 'Notificaciones proactivas ante desvíos de ruta, excesos de velocidad o zonas de alto riesgo.',
    panic: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91A16 16 0 0015.1 17.91l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18.92z"/>
      </svg>
    ),
    name: 'Soporte 24/7',
    desc: 'Equipo humano especializado operando desde nuestro centro de comando táctico sin interrupciones.',
    panic: false,
  },
]

export default function Features() {
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  useFadeUp(titleRef)
  useFadeUp(gridRef, 0.1)

  return (
    <section className={styles.section} id="features">
      <div ref={titleRef} className={styles.header}>
        <div className={styles.eyebrow}>Características</div>
        <h2 className={styles.title}>
          SEGURIDAD TOTAL<br />
          <span className={styles.green}>EN CADA KILÓMETRO</span>
        </h2>
        <p className={styles.subtitle}>
          Tecnología de grado militar adaptada a las necesidades críticas del transporte público limeño.
        </p>
      </div>

      <div ref={gridRef} className={styles.grid}>
        {FEATURES.map((f) => (
          <div key={f.name} className={`${styles.card} ${f.panic ? styles.panic : ''}`}>
            <div className={styles.icon}>{f.icon}</div>
            <div className={styles.cardName}>{f.name}</div>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
