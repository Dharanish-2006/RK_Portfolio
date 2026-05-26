const WAREHOUSE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD01CJntXbM4toGdzmyGcDbcB_BUCFvi99PMcSIMGjC7hAMZ2UYYF8cRFgs7Q74Wn2227EQ1VwjKqz4i3Kj03nJ1yZ6kwO3wuA7icwGZIHwV3PzRgE9_q7pAOh8KHH-4bncFUX8kJHPZuRmlzgJCvrHvIQwpj5dBs0VaUdkQNNYbYeGx9h8B632JkXef8faiCLUgYTuY8Ud8e4Vot7AtQUbVgO1x5yv7-amk-fB9dQyz7bor92gIoJsCis7--R9Q2aBk6GOCrJ-GVzI'
const HANDSHAKE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIOb5uQAFRtH7_8IW_aFF7T_1jLcMH3j5-VRS9aewU-MbW6hTBEdfeLMW7JCB1p6oP7R7c7u6zZtwuCDGeUYidde7lA9FVJf6r-hL_rDE2LnCatHH61rv10u33RUkTEN_N8Wj2caZqlZGYe0Y-gRDx1NyVxxXsHby04XLT5E6t9gXBOsj17KBWPq8UG9NSMmTWMrifLJwJFh5JmygFxbNrm6ahUij8lUKtC6DysNID6i_HcN1JB5vTIZ03qXzLfumndat4cqhn3oG'

const checks = [
  'ISO-certified quality processes at every stage',
  'Real-time shipment tracking and reporting',
  'Dedicated account management for every partner',
]

function WordReveal({ text, delay = 0 }) {
  return (
    <span>
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.28em', verticalAlign: 'bottom' }}>
          <span className="anim visible" style={{
            display: 'inline-block',
            animation: 'revealUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: `${delay + i * 0.07}s`,
          }}>{word}</span>
        </span>
      ))}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '0 0 140px' }}>
      <div className="about-grid" style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 64px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'
      }}>
        {/* Left */}
        <div>
          <div className="anim" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 2, background: 'var(--blue)', borderRadius: 1 }}/>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Our Story</span>
          </div>
          <h2 style={{
            fontFamily: 'Montserrat,sans-serif', fontSize: 'clamp(26px,4vw,50px)',
            fontWeight: 900, color: 'var(--navy)', letterSpacing: '-0.025em',
            lineHeight: 1.08, marginBottom: 28
          }}>
            <WordReveal text="We Move Goods." delay={0.1}/>
            <br/>
            <WordReveal text="We Build Bridges." delay={0.5}/>
          </h2>
          <p className="anim" style={{ fontSize: 16.5, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 500, marginBottom: 14 }}>
            RK Exports and Imports is a global leader in facilitating international commerce. We specialize in connecting markets through a robust logistics network designed for the modern age.
          </p>
          <p className="anim d1" style={{ fontSize: 16.5, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 500, marginBottom: 36 }}>
            Our commitment to reliability, transparency, and trust defines every interaction — we don't just move goods, we build lasting bridges between businesses across continents.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {checks.map((c, i) => (
              <div key={i} className="anim" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text-muted)', animationDelay: `${0.1 + i * 0.12}s` }}>
                <div style={{
                  width: 24, height: 24,
                  background: 'rgba(0,89,187,0.1)',
                  borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Right — images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="anim" style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '3/4' }}
            onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.07)'}
            onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}>
            <img src={WAREHOUSE_IMG} alt="Warehouse" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.32,0.72,0,1)', display: 'block' }}/>
          </div>
          <div className="anim d2" style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '3/4', marginTop: 40 }}
            onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.07)'}
            onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}>
            <img src={HANDSHAKE_IMG} alt="Partnership" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.32,0.72,0,1)', display: 'block' }}/>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
