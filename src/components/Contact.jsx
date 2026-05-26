import { useState, useRef, useEffect } from 'react'

const SHIP_BG = 'https://lh3.googleusercontent.com/aida/ADBb0uiBdu9_Sw7BvCla_ScOIy9mEFO4KNtMLRIwX37AlIghyViWlZSzyJH9qbJzFD4e68_867BgLJ3k_3yWNoLU9Tu7stDhHjUa7L0_a9TDzEEKBxz59Z9MY8DWdIedoqw95S1MEVlDDltZaVeZvQtNmbCVvub0Fm1NkWPDduR6NCWXhgE7tWABhD3atYUORvhpX9b41L0YGyi-sDLPVhUtItVL8-yVEBTfuRzhCXmoVyqkB-VbjQdBQqrVPg'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.parentElement.getBoundingClientRect()
      const progress = -rect.top / (rect.height + window.innerHeight)
      bgRef.current.style.transform = `translateY(${progress * 100}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('done')
      setState({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setStatus('idle'), 3500)
    }, 1600)
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    background: 'var(--input-bg)',
    border: '1.5px solid var(--outline)',
    borderRadius: 10, fontSize: 14.5,
    color: 'var(--text)',
    fontFamily: 'Inter,sans-serif', outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
  }
  const labelStyle = {
    display: 'block', fontSize: 10.5, fontWeight: 700,
    letterSpacing: '0.12em', color: 'var(--text-muted)',
    textTransform: 'uppercase', marginBottom: 7
  }

  const onFocus = e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,89,187,0.1)'; e.target.style.background = 'var(--card-bg)' }
  const onBlur = e => { e.target.style.borderColor = 'var(--outline)'; e.target.style.boxShadow = 'none' }

  return (
    <section id="contact" style={{ padding: '0 0 140px', position: 'relative', overflow: 'hidden' }}>
      {/* Parallax background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '75%', overflow: 'hidden', zIndex: 0 }}>
        <div ref={bgRef} style={{ position: 'absolute', inset: '-30%', backgroundImage: `url(${SHIP_BG})`, backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,22,40,0.88), rgba(0,89,187,0.65))' }}/>
      </div>

      <div className="contact-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, position: 'relative', zIndex: 10 }}>
        {/* Left info */}
        <div style={{ paddingTop: 64  }}>
          <div className="anim" style={{ display: 'inline-flex' , alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 2, background: 'var(--gold)', borderRadius: 1 }}/>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Let's Connect</span>
          </div>
          <h2 className="anim d1" style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 'clamp(24px,4vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.022em', lineHeight: 1.1, marginBottom: 16 }}>
            Ready to Trade<br/>Globally?
          </h2>
          <p className="anim d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 48 }}>
            Contact our expert trade advisors and get a tailored consultation for your import or export requirements.
          </p>
          {[
            { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, label: 'Headquarters', val: 'RK Exports Hub, Metro Center' },
            { icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></>, label: 'Email', val: 'trade@rkexports.com' },
            { icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>, label: 'Phone', val: '+1 (555) TRADE-RK' },
          ].map((info, i) => (
            <div key={i} className="anim" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24, animationDelay: `${0.1 + i * 0.1}s` }}>
              <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.7" strokeLinecap="round">{info.icon}</svg>
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 3 }}>{info.label}</div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>{info.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div className="anim from-right contact-form-inner" style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: 28, padding: '48px 44px', marginTop: 40,
        }}>
          <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 24, fontWeight: 800, color: 'var(--navy)', marginBottom: 6 }}>Send a Request</h3>
          <p style={{ fontSize: 13.5, color: 'var(--text-muted)', marginBottom: 32 }}>We respond within 24 business hours.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
              {[['Full Name', 'name', 'John Doe', 'text'], ['Email Address', 'email', 'john@co.com', 'email']].map(([label, field, ph, type]) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input type={type} placeholder={ph} value={state[field]} required
                    style={inputStyle}
                    onChange={e => setState(s => ({ ...s, [field]: e.target.value }))}
                    onFocus={onFocus} onBlur={onBlur}/>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Company</label>
              <input type="text" placeholder="Your company name" value={state.company}
                style={inputStyle}
                onChange={e => setState(s => ({ ...s, company: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur}/>
            </div>
            <div style={{ marginBottom: 26 }}>
              <label style={labelStyle}>Message</label>
              <textarea rows="4" placeholder="Tell us about your trade requirements..." value={state.message} required
                style={{ ...inputStyle, resize: 'none' }}
                onChange={e => setState(s => ({ ...s, message: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur}/>
            </div>
            <button type="submit" style={{
              width: '100%', padding: '15px', borderRadius: 12, border: 'none', cursor: 'pointer',
              fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 700, letterSpacing: '0.05em',
              background: status === 'done' ? '#22c55e' : 'var(--blue)', color: '#fff',
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
              opacity: status === 'loading' ? 0.7 : 1,
            }}
            onMouseEnter={e => { if (status === 'idle') { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,89,187,0.25)' } }}
            onMouseLeave={e => { if (status === 'idle') { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' } }}>
              {status === 'loading' ? 'Sending...' : status === 'done' ? '✓ Request Sent!' : 'Send Request'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
          }
          .contact-form-inner { margin-top: 0 !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
          .contact-form-inner { padding: 32px 20px !important; }
        }
      `}</style>
    </section>
  )
}
