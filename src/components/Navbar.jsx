import { useState } from "react";

const links = ["Home", "About", "Why Us", "Products", "Contact"];

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar({ scrollY, scrollPct, isDark, setIsDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 60;

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: scrolled ? 0 : 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: scrolled ? "80%" : "min(92%, 1140px)",
          background: scrolled ? "var(--nav-bg)" : "var(--nav-pill-bg)",
          backdropFilter: "blur(50px) saturate(160%)",
          WebkitBackdropFilter: "blur(22px) saturate(160%)",
          border: scrolled ? "none" : "1px solid var(--glass-border)",
          borderRadius: scrolled ? 0 : 100,
          boxShadow: isDark
            ? "0 8px 40px rgba(0,0,0,0.3)"
            : "0 8px 40px rgba(0,89,187,0.09), inset 0 1px 0 rgba(255,255,255,0.85)",
          zIndex: 1000,
          padding: "0 20px",
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.5s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              background: isDark ? "rgba(77,154,255,0.2)" : "var(--navy)",
              border: isDark ? "1px solid rgba(77,154,255,0.3)" : "none",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
              />
              <path
                d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"
                stroke="rgba(233,193,118,0.85)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 800,
              fontSize: 14,
              color: "var(--navy)",
              letterSpacing: "0.06em",
            }}
          >
            RK EXPORTS
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: 2, alignItems: "center" }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--text-muted)",
                padding: "7px 14px",
                borderRadius: 100,
                transition: "all 0.25s",
                fontFamily: "Inter,sans-serif",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isDark
                  ? "rgba(77,154,255,0.12)"
                  : "rgba(0,89,187,0.08)";
                e.target.style.color = "var(--blue)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.color = "var(--text-muted)";
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          {/* Dark mode toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
 
            {/* Theme toggle icon */}
            <button
              onClick={() => setIsDark((d) => !d)}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 6,
                borderRadius: "50%",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--blue)";
                e.currentTarget.style.transform = "rotate(20deg) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "var(--navy)",
              color: isDark ? "#0d1420" : "#fff",
              fontSize: 13,
              fontWeight: 600,
              padding: "9px 22px",
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              fontFamily: "Inter,sans-serif",
              letterSpacing: "0.02em",
              transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--blue)";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,89,187,0.3)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--navy)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.color = isDark ? "#0d1420" : "#fff";
            }}
            className="nav-cta"
          >
            Get a Quote
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
            }}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "var(--navy)",
                  borderRadius: 2,
                  transition: "all 0.4s cubic-bezier(0.32,0.72,0,1)",
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px,-5px)"
                        : "scaleX(0)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Scroll progress line */}
        <div
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            height: 2,
            background: "linear-gradient(90deg, var(--blue), var(--gold))",
            width: scrollPct + "%",
            borderRadius: "0 0 1px 1px",
            transition: "width 0.08s linear",
          }}
        />
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 900,
          background: "rgba(10,22,40,0.97)",
          backdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transition: "opacity 0.4s cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {links.map((l, i) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Montserrat,sans-serif",
              fontSize: "clamp(24px,8vw,36px)",
              fontWeight: 700,
              color: mobileOpen ? "rgba(255,255,255,0.85)" : "transparent",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transition: `all 0.5s cubic-bezier(0.32,0.72,0,1) ${i * 0.07}s`,
              padding: "8px 0",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255,255,255,0.85)")
            }
          >
            {l}
          </button>
        ))}

        {/* Mobile theme toggle inside overlay */}
        
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .nav-cta { display: none !important; }
        }
        @media (max-width: 480px) {
          .theme-toggle { display: none; }
        }
      `}</style>
    </>
  );
}
