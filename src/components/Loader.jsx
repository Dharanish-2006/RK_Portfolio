export default function Loader({ out }) {
  return (
    <div className={`loader${out ? ' out' : ''}`}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"
            stroke="rgba(233,193,118,0.8)" strokeWidth="1.5" fill="none"/>
        </svg>
        <span className="loader-wordmark">RK EXPORTS</span>
      </div>
      <div className="loader-bar"><div className="loader-fill"/></div>
      <p style={{ fontSize:11, color:'rgba(255,255,255,0.35)', letterSpacing:'0.15em', textTransform:'uppercase' }}>
        Loading Global Trade Authority
      </p>
    </div>
  )
}
