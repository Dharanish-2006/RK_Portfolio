import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 50, suffix: '+', label: 'Countries Served' },
  { num: 80, suffix: '+', label: 'Shipments Completed' },
  { num: 2, suffix: '+', label: 'Years of Excellence' },
  { num: 100, suffix: '+', label: 'Global Partners' },
]

function Counter({ target }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let cur = 0
        const step = target / 55
        const t = setInterval(() => {
          cur += step
          if (cur >= target) { setVal(target); clearInterval(t) }
          else setVal(Math.floor(cur))
        }, 22)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{val}</span>
}

export default function StatsBand() {
  return (
    <section style={{ margin: '0 64px 140px', position: 'relative', zIndex: 10 }} className="stats-section">
      <div className="stats-band-inner" style={{
        background: 'var(--navy)',
        borderRadius: 24,
        padding: '60px 80px',
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative glows */}
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,89,187,0.38), transparent 65%)', top: '-30%', left: '10%', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,193,118,0.1), transparent 65%)', bottom: '-20%', right: '10%', pointerEvents: 'none' }}/>

        {stats.map((s, i) => (
          <div key={i} className="anim" style={{ textAlign: 'center', position: 'relative', animationDelay: `${i * 0.12}s` }}>
            {i > 0 && <div style={{ position: 'absolute', left: 0, top: '8%', height: '84%', width: 1, background: 'rgba(255,255,255,0.09)' }}/>}
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 'clamp(32px,4.5vw,58px)', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>
              <Counter target={s.num}/><span style={{ color: 'var(--gold)' }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-section { margin: 0 20px 80px !important; }
          .stats-band-inner { padding: 40px 24px !important; grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .stats-band-inner { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
