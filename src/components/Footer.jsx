export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', padding: '80px 64px 40px', position: 'relative', overflow: 'hidden', zIndex: 20 }}>
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,89,187,0.2), transparent 65%)', top: '-20%', left: '5%', pointerEvents: 'none' }}/>

      <div className="footer-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, position: 'relative' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 34, height: 34, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" stroke="rgba(233,193,118,0.75)" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 14, color: '#fff', letterSpacing: '0.07em' }}>RK EXPORTS</span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--footer-text)', lineHeight: 1.75, maxWidth: 240 }}>Global trade excellence since 2022. Bridging borders through innovative logistics and trusted partnerships.</p>
        </div>

        {[
          { title: 'Quick Links', links: ['About Us', 'Why Us', 'Products', 'Contact'] },
          { title: 'Trade', links: ['Global Network', 'Sustainability', 'Certifications', 'Partnerships'] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</div>
            {col.links.map(l => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--footer-link)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--footer-link)'}>{l}</a>
            ))}
          </div>
        ))}

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 20 }}>Newsletter</div>
          <p style={{ fontSize: 13, color: 'var(--footer-text)', lineHeight: 1.65, marginBottom: 16 }}>Trade opportunities and market insights, weekly.</p>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--footer-input-border)', paddingBottom: 2 }}>
            <input type="email" placeholder="Enter your email" style={{ background: 'none', border: 'none', color: 'var(--footer-input)', fontSize: 14, fontFamily: 'Inter,sans-serif', outline: 'none', flex: 1, padding: '8px 0' }}/>
            <button style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 8, transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '52px auto 0', paddingTop: 24, borderTop: '1px solid var(--footer-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontSize: 12, color: 'var(--footer-copyright)' }}>© 2024 RK Exports and Imports. All Rights Reserved.</span>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
            <><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></>,
            <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
          ].map((icon, i) => (
            <a key={i} href="#" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.06)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,89,187,0.6)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round">{icon}</svg>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          footer { padding: 60px 20px 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}