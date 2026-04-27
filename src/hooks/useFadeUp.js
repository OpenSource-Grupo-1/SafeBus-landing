import { useEffect } from 'react'

const fadeStyle = `
  .fade-up-target {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .fade-up-target.fade-visible {
    opacity: 1;
    transform: translateY(0);
  }
`

let styleInjected = false
function injectStyle() {
  if (styleInjected) return
  styleInjected = true
  const el = document.createElement('style')
  el.textContent = fadeStyle
  document.head.appendChild(el)
}

export default function useFadeUp(ref, delayExtra = 0) {
  useEffect(() => {
    injectStyle()
    const el = ref.current
    if (!el) return
    el.classList.add('fade-up-target')
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('fade-visible'), delayExtra * 1000)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, delayExtra])
}
