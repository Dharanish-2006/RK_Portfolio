import { useState, useRef, useEffect } from 'react'

const SHIP_BG = 'https://lh3.googleusercontent.com/aida/ADBb0uiBdu9_Sw7BvCla_ScOIy9mEFO4KNtMLRIwX37AlIghyViWlZSzyJH9qbJzFD4e68_867BgLJ3k_3yWNoLU9Tu7stDhHjUa7L0_a9TDzEEKBxz59Z9MY8DWdIedoqw95S1MEVlDDltZaVeZvQtNmbCVvub0Fm1NkWPDduR6NCWXhgE7tWABhD3atYUORvhpX9b41L0YGyi-sDLPVhUtItVL8-yVEBTfuRzhCXmoVyqkB-VbjQdBQqrVPg'
const API = import.meta.env.VITE_API_URL || ''
const EMPTY = { name: '', email: '', company: '', phone: '', message: '' }

export default function Contact() {
  const [form,   setForm]   = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [banner, setBanner] = useState('')
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const rect = bgRef.current.parentElement.getBoundingClientRect()
      bgRef.current.style.transform =
        `translateY(${(-rect.top / (rect.height + window.innerHeight)) * 100}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const set = f => e => setForm(p => ({ ...p, [f]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    setBanner('')
    try {
      const res  = await fetch(`${API}/api/contact`, {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify(form),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        setBanner(data.message)
        setForm(EMPTY)
      } else {
        setStatus('error')
        setBanner(data.errors?.join(' ') || data.message || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setBanner('Cannot reach the server. Please try again later.')
    }
  }

  const inputS = {
    width: '100%', padding: '13px 16px',
    background: 'var(--input-bg, #f7f9fb)',
    border: '1.5px solid var(--outline)',
    borderRadius: 10, fontSize: 14.5,
    color: 'var(--text)', fontFamily: 'Inter,sans-serif',
    outline: 'none',
    transition: 'border-color .25s, box-shadow .25s, background .25s',
  }
  const onF = e => {
    e.target.style.borderColor = 'var(--blue)'
    e.target.style.boxShadow   = '0 0 0 3px rgba(0,89,187,.1)'
    e.target.style.background  = 'var(--white)'
  }
  const onB = e => {
    e.target.style.borderColor = 'var(--outline)'
    e.target.style.boxShadow   = 'none'
    e.target.style.background  = 'var(--input-bg, #f7f9fb)'
  }
  const lbl = {
    display: 'block', fontSize: 10.5, fontWeight: 700,
    letterSpacing: '.12em', color: 'var(--text-muted)',
    textTransform: 'uppercase', marginBottom: 7,
  }

  return (
    <section id="contact" style={{ padding: '0 0 140px', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position:'absolute', top:0, left:0, right:0, height:'55%', overflow:'hidden', zIndex:0 }}>
        <div ref={bgRef} style={{
          position:'absolute', inset:'-30%',
          backgroundImage:`url(${SHIP_BG})`,
          backgroundSize:'cover', backgroundPosition:'center', willChange:'transform',
        }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(10,22,40,.9),rgba(0,89,187,.6))' }}/>
      </div>

      <div style={{
        maxWidth:1280, margin:'0 auto', padding:'0 64px',
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:48,
        position:'relative', zIndex:10,
      }} className="contact-grid">

        <div style={{ paddingTop:64 }}>
          <div className="anim" style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:16 }}>
            <div style={{ width:28, height:2, background:'var(--gold)', borderRadius:1 }}/>
            <span style={{ fontSize:10, fontWeight:700, letterSpacing:'.2em', color:'var(--gold)', textTransform:'uppercase' }}>Let's Connect</span>
          </div>

          <h2 className="anim d1" style={{
            fontFamily:'Montserrat,sans-serif',
            fontSize:'clamp(28px,4vw,48px)', fontWeight:900,
            color:'#fff', letterSpacing:'-.022em', lineHeight:1.1, marginBottom:16,
          }}>
            Ready to Trade<br/>Globally?
          </h2>

          <p className="anim d2" style={{ fontSize:16, color:'rgba(255,255,255,.6)', lineHeight:1.7, marginBottom:48 }}>
            Contact our expert trade advisors. We read every message and respond within&nbsp;24&nbsp;business hours.
          </p>

          {[
            { svg:<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, label:'Headquarters', val:'RK Exports Hub, Metro Center' },
            { svg:<><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></>,          label:'Email',        val:'rkexportsandimports2023@gmail.com' },
            { svg:<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>, label:'Phone', val:'99402 01218 / 91235 28079' },
          ].map((r, i) => (
            <div key={i} className="anim" style={{ display:'flex', alignItems:'flex-start', gap:16, marginBottom:24, animationDelay:`${.1+i*.1}s` }}>
              <div style={{ width:44, height:44, background:'rgba(255,255,255,.1)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.7" strokeLinecap="round">{r.svg}</svg>
              </div>
              <div>
                <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.12em', color:'var(--gold)', textTransform:'uppercase', marginBottom:3 }}>{r.label}</div>
                <div style={{ fontSize:15, color:'rgba(255,255,255,.75)' }}>{r.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: form ── */}
        <div className="anim" style={{
          background:'var(--white)', border:'1px solid var(--outline)',
          borderRadius:28, padding:'44px 40px', marginTop:40,
        }}>
          <h3 style={{ fontFamily:'Montserrat,sans-serif', fontSize:22, fontWeight:800, color:'var(--text)', marginBottom:5 }}>
            Send a Request
          </h3>
          <p style={{ fontSize:13.5, color:'var(--text-muted)', marginBottom:28 }}>
            Fill in the details and our team will reach out.
          </p>

          {/* ── Banners ── */}
          {status === 'success' && (
            <div style={{ background:'rgba(34,197,94,.08)', border:'1px solid rgba(34,197,94,.3)', borderRadius:11, padding:'13px 16px', marginBottom:22, display:'flex', alignItems:'center', gap:10 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span style={{ fontSize:14, color:'#15803d', fontWeight:500 }}>{banner}</span>
            </div>
          )}
          {status === 'error' && (
            <div style={{ background:'rgba(239,68,68,.08)', border:'1px solid rgba(239,68,68,.3)', borderRadius:11, padding:'13px 16px', marginBottom:22, display:'flex', alignItems:'center', gap:10 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span style={{ fontSize:14, color:'#991b1b', fontWeight:500 }}>{banner}</span>
            </div>
          )}

          <form onSubmit={submit} noValidate>
            {/* Row 1: Name + Email */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:16 }} className="form-row">
              <div>
                <label style={lbl}>Full Name *</label>
                <input type="text" placeholder="John Doe" value={form.name} required
                  style={inputS} onChange={set('name')} onFocus={onF} onBlur={onB}/>
              </div>
              <div>
                <label style={lbl}>Email Address *</label>
                <input type="email" placeholder="john@company.com" value={form.email} required
                  style={inputS} onChange={set('email')} onFocus={onF} onBlur={onB}/>
              </div>
            </div>

            {/* Row 2: Company + Phone */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:16 }} className="form-row">
              <div>
                <label style={lbl}>Company <span style={{ opacity:.5, fontWeight:400, fontSize:10 }}>(optional)</span></label>
                <input type="text" placeholder="Acme Corp" value={form.company}
                  style={inputS} onChange={set('company')} onFocus={onF} onBlur={onB}/>
              </div>
              <div>
                <label style={lbl}>Phone <span style={{ opacity:.5, fontWeight:400, fontSize:10 }}>(optional)</span></label>
                <input type="tel" placeholder="+91 98765 43210" value={form.phone}
                  style={inputS} onChange={set('phone')} onFocus={onF} onBlur={onB}/>
              </div>
            </div>

            <div style={{ marginBottom:24 }}>
              <label style={lbl}>Message *</label>
              <textarea rows="4" placeholder="Tell us about your trade requirements — product, quantity, destination country…"
                value={form.message} required
                style={{ ...inputS, resize:'none' }}
                onChange={set('message')} onFocus={onF} onBlur={onB}/>
            </div>

            <button type="submit" disabled={status === 'loading'}
              style={{
                width:'100%', padding:'15px', borderRadius:12, border:'none',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                fontFamily:'Inter,sans-serif', fontSize:14, fontWeight:700,
                letterSpacing:'.04em',
                background: status === 'success' ? '#22c55e' : 'var(--blue)',
                color:'#fff', opacity: status === 'loading' ? .7 : 1,
                display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                transition:'all .35s cubic-bezier(.32,.72,0,1)',
                boxShadow: status === 'idle' ? '0 4px 18px rgba(0,89,187,.2)' : 'none',
              }}
              onMouseEnter={e => { if (status === 'idle') { e.currentTarget.style.background='var(--navy)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(0,89,187,.28)' } }}
              onMouseLeave={e => { if (status === 'idle') { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 4px 18px rgba(0,89,187,.2)' } }}>

              {status === 'loading' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" style={{ animation:'spin .8s linear infinite' }}>
                  <path d="M21 12a9 9 0 1 1-6.2-8.56"/>
                </svg>
              )}

              {status === 'idle'    && 'Send Enquiry'}
              {status === 'loading' && 'Sending…'}
              {status === 'success' && '✓ Enquiry Sent!'}
              {status === 'error'   && 'Retry'}
            </button>

            <p style={{ fontSize:11.5, color:'var(--text-muted)', textAlign:'center', marginTop:14, lineHeight:1.6 }}>
              By submitting you agree that your details will be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
          }
          .contact-grid > div:first-child { padding-top: 40px !important; }
          .contact-grid > div:last-child  { margin-top: 0 !important; padding: 28px 22px !important; }
        }

        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
