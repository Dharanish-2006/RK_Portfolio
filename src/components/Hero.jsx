import { useEffect, useRef } from 'react'
import hero from '../assets/hero.png'

const SHIP_IMG = hero
const marqueeItems = ['Global Logistics Excellence', 'RK Exports & Imports', 'Certified Quality Assurance', '24/7 Customer Support', 'Trusted Partners Since 2022']

function SplitText({ text, style, delay = 0 }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', ...style }}>
      {text.split('').map((c, i) => (
        <span key={i} className="anim visible" style={{
          display: 'inline-block',
          animation: 'charReveal 0.65s cubic-bezier(0.16,1,0.3,1) both',
          animationDelay: `${delay + i * 0.032}s`,
          whiteSpace: c === ' ' ? 'pre' : 'normal',
        }}>{c === ' ' ? '\u00a0' : c}</span>
      ))}
    </span>
  )
}

export default function Hero({ scrollY }) {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = e => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProducts = e => {
    e.preventDefault()
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Marquee */}
      <div style={{ background: 'var(--navy)', overflow: 'hidden', whiteSpace: 'nowrap', padding: '9px 0', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'inline-flex', animation: 'marqueeRun 26s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 24, paddingRight: 24 }}>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>{item}</span>
              <span style={{ width: 4, height: 4, background: 'var(--gold)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}/>
            </span>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '60px 64px 80px', maxWidth: 1280, margin: '0 auto', width: '100%', gap: 80 }} className="hero-inner">
        {/* Left */}
        <div style={{ flex: 1 }}>
          <div className="anim visible" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,89,187,0.07)', border: '1px solid rgba(0,89,187,0.18)',
            borderRadius: 100, padding: '5px 14px', marginBottom: 28,
            animation: 'revealUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both',
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--blue)', borderRadius: '50%', animation: 'pulse 2s ease-in-out infinite' }}/>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--blue)', textTransform: 'uppercase' }}>Global Trade Authority</span>
          </div>

          <h1 style={{
            fontFamily: 'Montserrat,sans-serif', fontWeight: 900,
            fontSize: 'clamp(32px, 5.5vw, 70px)', lineHeight: 1.0,
            letterSpacing: '-0.025em', color: 'var(--navy)', marginBottom: 20,
          }}>
            <div><SplitText text="Bridging" delay={0.5}/></div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <SplitText text="Borders," delay={0.8}/>
            </div>
            <div style={{ color: 'var(--blue)', position: 'relative', display: 'inline-block' }}>
              <SplitText text="Building" delay={1.1}/>
              {' '}
              <SplitText text="Business" delay={1.35}/>
              <div style={{
                position: 'absolute', bottom: -4, left: 0, height: 4, borderRadius: 2,
                background: 'linear-gradient(90deg, var(--blue), var(--gold))',
                animation: 'drawLine 1s cubic-bezier(0.32,0.72,0,1) 2.2s both',
                width: '100%',
              }}/>
            </div>
          </h1>

          <p className="anim visible" style={{
            fontSize: 'clamp(14px, 2vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.7,
            maxWidth: 480, marginBottom: 44,
            animation: 'revealUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.6s both',
          }}>
            RK Exports and Imports connects markets across 50+ countries through robust logistics infrastructure and trusted partnerships built on transparency.
          </p>

          <div className="anim visible" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52, animation: 'revealUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.8s both' }}>
            <a href="#contact" onClick={scrollToContact} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--blue)', color: '#fff',
              fontSize: 14, fontWeight: 600, padding: '13px 26px', borderRadius: 100,
              textDecoration: 'none', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,89,187,0.28)',
              transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(13,28,50,0.22)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,89,187,0.28)' }}>
              Get a Quote
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </a>
            <a href="#products" onClick={scrollToProducts} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'var(--navy)',
              fontSize: 14, fontWeight: 600, padding: '13px 26px', borderRadius: 100,
              textDecoration: 'none', border: '1.5px solid var(--outline)', cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)'; e.currentTarget.style.borderColor = 'var(--outline)'; e.currentTarget.style.transform = 'none' }}>
              Explore Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="anim visible" style={{ display: 'flex', gap: 'clamp(20px, 4vw, 36px)', flexWrap: 'wrap', animation: 'revealUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.0s both' }}>
            {[['50+', 'Countries'], ['80+', 'Daily Shipments'], ['100+', 'Partners']].map(([num, label], i) => (
              <div key={i} style={{ position: 'relative' }}>
                {i > 0 && <div style={{ position: 'absolute', left: -18, top: '10%', height: '80%', width: 1, background: 'var(--outline)' }}/>}
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: 5 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 48, animation: 'fadeScale 1s ease 3s both' }}>
            <div style={{ width: 22, height: 36, border: '2px solid var(--outline)', borderRadius: 11, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 5 }}>
              <div style={{ width: 3, height: 8, background: 'var(--blue)', borderRadius: 2, animation: 'scrollWheel 2s ease-in-out infinite' }}/>
            </div>
            <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll to explore</span>
          </div>
        </div>

        {/* Right — Parallax image */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', maxWidth: 580, opacity: 0, animation: 'revealRight 1s cubic-bezier(0.16,1,0.3,1) 0.8s both' }}>
          <div style={{
            position: 'relative', width: '100%', borderRadius: 28, overflow: 'hidden',
            aspectRatio: '4/3',
            boxShadow: '0 40px 100px var(--shadow-color), 0 0 0 1px var(--glass-border)',
          }}>
            <div ref={parallaxRef} style={{ position: 'absolute', inset: '-18% 0', height: '136%' }}>
              <img src={SHIP_IMG} alt="Global cargo ship" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(10,22,40,0.55))', zIndex: 1 }}/>
            <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', marginBottom: 4 }}>Est. 2022</div>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Global Trade<br/>Excellence</div>
            </div>
          </div>

          <div style={{
            position: 'absolute', bottom: -24, left: -28, zIndex: 10,
            background: 'var(--card-bg)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--card-border)',
            borderRadius: 18, padding: '18px 24px',
            boxShadow: '0 16px 48px var(--shadow-color)',
            animation: 'floatY 4s ease-in-out infinite',
          }}>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 30, fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>80+</div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>Shipments Daily</div>
          </div>

          <div style={{
            position: 'absolute', top: -20, right: -20, zIndex: 10,
            background: 'var(--navy)', borderRadius: 16, padding: '14px 20px',
            boxShadow: '0 12px 36px var(--shadow-color)',
            animation: 'floatY 4.5s ease-in-out 0.8s infinite',
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Certified</div>
            <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 18, fontWeight: 800, color: '#fff', marginTop: 2 }}>ISO 9001</div>
          </div>

          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: '110%', height: '110%', borderRadius: 32,
            border: '1px solid rgba(0,89,187,0.08)',
            animation: 'glowPulse 4s ease-in-out infinite',
            pointerEvents: 'none', zIndex: 0,
          }}/>
        </div>
      </div>

      <style>{`
        .hero-inner { flex-direction: row; }
        @keyframes charReveal { from { opacity:0; transform: translateY(100%) rotateX(-70deg); } to { opacity:1; transform: translateY(0) rotateX(0deg); } }
        @keyframes revealRight { from { opacity:0; transform: translateX(48px); } to { opacity:1; transform: translateX(0); } }
        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column !important;
            padding: 32px 20px 60px !important;
            gap: 40px !important;
          }
          .hero-inner > div:last-child { max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
