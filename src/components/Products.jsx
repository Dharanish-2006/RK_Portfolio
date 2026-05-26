import { useEffect, useRef } from 'react'
import service1 from '../assets/service1.png'
import ser2 from '../assets/ser2.png'
import service3 from '../assets/service3.png'

const SHIP_BG = 'https://lh3.googleusercontent.com/aida/ADBb0uiBdu9_Sw7BvCla_ScOIy9mEFO4KNtMLRIwX37AlIghyViWlZSzyJH9qbJzFD4e68_867BgLJ3k_3yWNoLU9Tu7stDhHjUa7L0_a9TDzEEKBxz59Z9MY8DWdIedoqw95S1MEVlDDltZaVeZvQtNmbCVvub0Fm1NkWPDduR6NCWXhgE7tWABhD3atYUORvhpX9b41L0YGyi-sDLPVhUtItVL8-yVEBTfuRzhCXmoVyqkB-VbjQdBQqrVPg'

const products = [
  { img: service1, cat: 'Category 01', name: 'Food Items', desc: 'Premium quality grains, spices, and processed food items meeting international safety standards and certifications.' },
  { img: ser2, cat: 'Category 02', name: 'Dress & Textiles', desc: 'Elegant garments and premium raw textile materials sourced from certified Indian manufacturers with export quality.' },
  { img: service3, cat: 'Category 03', name: 'Books & Stationery', desc: 'Educational materials and premium office supplies for institutions and enterprises worldwide, delivered on time.' },
]

export default function Products() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.parentElement.getBoundingClientRect()
      const progress = -rect.top / (rect.height + window.innerHeight)
      bgRef.current.style.transform = `translateY(${progress * 120}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = e => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" style={{ padding: '0 0 140px' }}>
      {/* Parallax banner */}
      <div style={{ position: 'relative', height: 'clamp(220px, 30vw, 320px)', overflow: 'hidden', marginBottom: 80, borderRadius: '0 0 32px 32px' }}>
        <div ref={bgRef} style={{ position: 'absolute', inset: '-20%', backgroundImage: `url(${SHIP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,0.82), rgba(0,89,187,0.6))', zIndex: 1 }}/>
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
          <div className="anim" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '5px 16px', marginBottom: 16 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase' }}>Our Portfolio</span>
          </div>
          <h2 className="anim d1" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 'clamp(24px,4vw,52px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.022em', lineHeight: 1.1 }}>
            Premium Goods,<br/>Global Standards
          </h2>
          <p className="anim d2" style={{ fontSize: 'clamp(13px, 2vw, 16px)', color: 'rgba(255,255,255,0.65)', maxWidth: 460, lineHeight: 1.65, marginTop: 12 }}>
            Export-ready goods meeting international quality benchmarks across every category.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }} className="products-wrap">
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {products.map((p, i) => (
            <div key={i} className="anim" style={{
              borderRadius: 24, overflow: 'hidden',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              animationDelay: `${i * 0.13}s`, cursor: 'pointer',
              transition: 'transform 0.4s cubic-bezier(0.32,0.72,0,1), box-shadow 0.4s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.015)'; e.currentTarget.style.boxShadow = '0 32px 72px var(--shadow-color), 0 0 0 1px rgba(0,89,187,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s cubic-bezier(0.32,0.72,0,1)' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}/>
              </div>
              <div style={{ padding: '24px 28px 30px' }}>
                <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--blue)', textTransform: 'uppercase', background: 'rgba(0,89,187,0.08)', borderRadius: 100, padding: '3px 12px', marginBottom: 10 }}>{p.cat}</div>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65 }}>{p.desc}</div>
                <a href="#contact" onClick={scrollToContact}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--blue)', marginTop: 18, textDecoration: 'none', transition: 'gap 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                  Enquire Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-wrap { padding: 0 20px !important; }
          .products-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .products-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
