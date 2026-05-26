import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rx = useRef(0), ry = useRef(0)
  const mx = useRef(0), my = useRef(0)

  useEffect(() => {
    const onMove = e => { mx.current = e.clientX; my.current = e.clientY }
    document.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      rx.current += (mx.current - rx.current) * 0.1
      ry.current += (my.current - ry.current) * 0.1
      if (dotRef.current) {
        dotRef.current.style.left = mx.current + 'px'
        dotRef.current.style.top = my.current + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top = ry.current + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onEnter = () => {
      if (dotRef.current) { dotRef.current.style.width = '18px'; dotRef.current.style.height = '18px'; dotRef.current.style.background = 'var(--gold)' }
      if (ringRef.current) { ringRef.current.style.width = '56px'; ringRef.current.style.height = '56px'; ringRef.current.style.borderColor = 'rgba(233,193,118,0.5)' }
    }
    const onLeave = () => {
      if (dotRef.current) { dotRef.current.style.width = '10px'; dotRef.current.style.height = '10px'; dotRef.current.style.background = 'var(--blue)' }
      if (ringRef.current) { ringRef.current.style.width = '40px'; ringRef.current.style.height = '40px'; ringRef.current.style.borderColor = 'rgba(0,89,187,0.45)' }
    }

    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} style={{ transition: 'width 0.25s, height 0.25s, border-color 0.25s' }} />
    </>
  )
}
