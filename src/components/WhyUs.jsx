import { useRef } from 'react'

const cards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.7" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    iconBg: 'rgba(0,89,187,0.1)',
    title: 'Quality Assurance',
    text: 'Stringent quality control measures at every stage of the supply chain. ISO-certified processes and independent third-party auditing ensure zero compromise.',
    tag: '01',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dim)" strokeWidth="1.7" strokeLinecap="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    iconBg: 'rgba(233,193,118,0.15)',
    title: 'Wide Product Range',
    text: 'A diverse portfolio spanning food, textiles, jewelry, and stationery — all sourced from verified suppliers with consistent quality benchmarks.',
    tag: '02',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    iconBg: 'rgba(0,89,187,0.08)',
    title: 'Timely Delivery',
    text: 'Optimized global logistics network guaranteeing shipments arrive exactly as promised. Real-time tracking, customs expertise, and last-mile solutions.',
    tag: '03',
  },
]

export default function WhyUs() {
  const tiltRefs = useRef([])

  const onMove = (e, i) => {
    const card = tiltRefs.current[i]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03) translateY(-6px)`
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 60px rgba(13,28,50,0.1), 0 24px 60px rgba(13,28,50,0.09)`
    card.style.transition = 'transform 0.05s, box-shadow 0.05s'
  }
  const onLeave = (_, i) => {
    const card = tiltRefs.current[i]
    if (!card) return
    card.style.transform = ''
    card.style.boxShadow = ''
    card.style.transition = 'transform 0.5s cubic-bezier(0.32,0.72,0,1), box-shadow 0.5s'
  }

  const addRipple = (e, i) => {
    const card = tiltRefs.current[i]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2.2
    const el = document.createElement('span')
    el.style.cssText = `position:absolute;border-radius:50%;background:rgba(0,89,187,0.14);width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;transform:scale(0);animation:rippleFade 0.7s cubic-bezier(0.32,0.72,0,1) forwards;pointer-events:none;`
    card.appendChild(el)
    setTimeout(() => el.remove(), 750)
  }

  return (
    <section id="why-us" style={{ padding: '0 0 140px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }} className="whyus-wrap">
        <div className="anim" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 28, height: 2, background: 'var(--blue)', borderRadius: 1 }}/>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Why Choose Us</span>
        </div>
        <h2 className="anim d1" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 'clamp(24px,3.5vw,46px)', fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.022em', lineHeight: 1.1, marginBottom: 0 }}>
          The RK Difference
        </h2>
        <p className="anim d2" style={{ fontSize: 17, color: 'var(--text-muted)', maxWidth: 420, lineHeight: 1.65, marginTop: 12, marginBottom: 60 }}>
          Three pillars that set us apart in global trade.
        </p>

        <div className="whyus-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {cards.map((c, i) => (
            <div key={i} className="anim" ref={el => tiltRefs.current[i] = el}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: 24, padding: '40px 36px',
                position: 'relative', overflow: 'hidden', cursor: 'default',
                animationDelay: `${0.1 + i * 0.12}s`,
                transition: 'transform 0.5s cubic-bezier(0.32,0.72,0,1), box-shadow 0.5s',
              }}
              onMouseMove={e => onMove(e, i)}
              onMouseLeave={e => onLeave(e, i)}
              onClick={e => addRipple(e, i)}>
              <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: 'Montserrat,sans-serif', fontSize: 56, fontWeight: 900, color: 'rgba(0,89,187,0.05)', lineHeight: 1 }}>
                {c.tag}
              </div>
              <div style={{
                width: 54, height: 54, borderRadius: 16, background: c.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
                transition: 'transform 0.35s cubic-bezier(0.32,0.72,0,1)',
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{c.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .whyus-wrap { padding: 0 20px !important; }
          .whyus-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .whyus-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
