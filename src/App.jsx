import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'
import Cursor from './components/Cursor'
import Loader from './components/Loader'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollPct, setScrollPct] = useState(0)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rk-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('rk-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('rk-theme', 'light')
    }
  }, [isDark])

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollY(sy)
      setScrollPct((sy / total) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.anim').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  return (
    <>
      <Loader out={loaded} />
      <div id="grain" />
      <div id="scroll-bar" style={{ width: scrollPct + '%' }} />
      <ParticleCanvas scrollY={scrollY} isDark={isDark} />
      <Cursor />
      <Navbar scrollY={scrollY} scrollPct={scrollPct} isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero scrollY={scrollY} />
        <StatsBand />
        <About />
        <WhyUs />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
