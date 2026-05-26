import { useEffect, useRef } from 'react'

export default function ParticleCanvas({ scrollY, isDark }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({ particles: [], mouse: { x: 0, y: 0 }, W: 0, H: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const s = stateRef.current

    const resize = () => {
      s.W = canvas.width = window.innerWidth
      s.H = canvas.height = window.innerHeight
    }

    const mkP = () => ({
      x: Math.random() * s.W,
      y: Math.random() * s.H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.2 + 0.4,
      opacity: Math.random() * 0.3 + 0.05,
      color: Math.random() > 0.72 ? [233, 193, 118] : [0, 89, 187],
      life: 1
    })

    resize()
    s.particles = Array.from({ length: 110 }, mkP)

    const onMove = e => { s.mouse.x = e.clientX; s.mouse.y = e.clientY }
    document.addEventListener('mousemove', onMove)

    const onClick = e => {
      for (let i = 0; i < 18; i++) {
        const burst = mkP()
        burst.x = e.clientX; burst.y = e.clientY
        burst.vx = (Math.random() - 0.5) * 9
        burst.vy = (Math.random() - 0.5) * 9
        burst.opacity = 0.85; burst.r = Math.random() * 3 + 1
        burst.burst = true; burst.bLife = 80
        s.particles.push(burst)
      }
    }
    document.addEventListener('click', onClick)

    let raf
    const loop = () => {
      ctx.clearRect(0, 0, s.W, s.H)

      const root = document.documentElement
      const dark = root.getAttribute('data-theme') === 'dark'

      if (dark) {
        ctx.fillStyle = '#0d1420'
        ctx.fillRect(0, 0, s.W, s.H)
      } else {
        const grad = ctx.createLinearGradient(0, 0, s.W, s.H)
        grad.addColorStop(0, '#f4f7fb')
        grad.addColorStop(0.5, '#eef2f8')
        grad.addColorStop(1, '#e8edf5')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, s.W, s.H)
      }

      const lineColor = dark ? 'rgba(77,154,255,' : 'rgba(0,89,187,'

      for (let i = 0; i < s.particles.length; i++) {
        for (let j = i + 1; j < s.particles.length; j++) {
          const a = s.particles[i], b = s.particles[j]
          if (a.burst || b.burst) continue
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `${lineColor}${(1 - d / 130) * (dark ? 0.1 : 0.065)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      s.particles = s.particles.filter(p => {
        if (p.burst) { p.bLife--; if (p.bLife <= 0) return false; p.opacity = p.bLife / 80 * 0.8 }
        const dx = s.mouse.x - p.x, dy = s.mouse.y - p.y
        const d = Math.hypot(dx, dy)
        if (d < 220 && !p.burst) { p.vx += (dx / d) * 0.018; p.vy += (dy / d) * 0.018 }
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > 1.6) { p.vx *= 0.88; p.vy *= 0.88 }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = s.W; if (p.x > s.W) p.x = 0
        if (p.y < 0) p.y = s.H; if (p.y > s.H) p.y = 0

        const particleColor = dark
          ? (p.color[0] === 233 ? [233, 193, 118] : [77, 154, 255])
          : p.color

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor.join(',')},${p.opacity * (dark ? 1.8 : 1)})`
        ctx.fill()
        return true
      })

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click', onClick)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="bg-canvas" />
}
