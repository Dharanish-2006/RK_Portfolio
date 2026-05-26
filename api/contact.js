const nodemailer = require('nodemailer')

let _transporter = null
function getTransporter() {
  if (_transporter) return _transporter
  _transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
  return _transporter
}

function esc(str = '') {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
}

function validate({ name, email, message }) {
  const errs = []
  if (!name    || name.trim().length    < 2)  errs.push('Name must be at least 2 characters.')
  if (!email   || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.push('A valid email is required.')
  if (!message || message.trim().length < 10) errs.push('Message must be at least 10 characters.')
  return errs
}

function buildEmail({ name, email, company, phone, message }) {
  const co  = company || '—'
  const ph  = phone   || '—'
  const now = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short',
  })

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#eef2f8;font-family:'Helvetica Neue',Arial,sans-serif}
.shell{max-width:620px;margin:32px auto;border-radius:18px;overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,.10)}
.hd{background:linear-gradient(135deg,#0a1628 0%,#0059bb 100%);padding:44px 44px 36px}
.logo{display:flex;align-items:center;gap:10px;margin-bottom:28px}
.logo-box{width:38px;height:38px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:11px;display:flex;align-items:center;justify-content:center}
.logo-name{font-size:13px;font-weight:800;letter-spacing:.1em;color:#fff}
.badge{display:inline-block;background:rgba(233,193,118,.18);border:1px solid rgba(233,193,118,.35);border-radius:100px;padding:4px 14px;font-size:11px;font-weight:700;letter-spacing:.14em;color:#e9c176;text-transform:uppercase;margin-bottom:14px}
.hd h1{font-size:26px;font-weight:700;color:#fff;line-height:1.3}
.bd{background:#fff;padding:40px 44px}
.eyebrow{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:700;letter-spacing:.2em;color:#0059bb;text-transform:uppercase;margin-bottom:18px}
.eyebrow::before{content:'';display:inline-block;width:20px;height:2px;background:#0059bb;border-radius:1px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px}
.field{background:#f7f9fb;border:1px solid #e2e8f0;border-radius:11px;padding:16px 18px}
.fl{font-size:10px;font-weight:700;letter-spacing:.12em;color:#718096;text-transform:uppercase;margin-bottom:6px}
.fv{font-size:15px;font-weight:500;color:#0a1628;word-break:break-word;line-height:1.5}
.fv a{color:#0059bb;text-decoration:none}
.msg-box{background:#f7f9fb;border:1px solid #e2e8f0;border-left:4px solid #0059bb;border-radius:0 11px 11px 0;padding:20px 22px;margin-bottom:30px}
.msg-text{font-size:15px;color:#2d3748;line-height:1.75;white-space:pre-wrap}
.cta-row{text-align:center;margin-bottom:28px}
.cta-btn{display:inline-block;background:#0059bb;color:#fff;font-size:14px;font-weight:700;padding:13px 30px;border-radius:100px;letter-spacing:.03em;text-decoration:none}
.divider{height:1px;background:#e2e8f0;margin:24px 0}
.timestamp{font-size:12px;color:#a0aec0;text-align:center}
.ft{background:#0a1628;padding:24px 44px;text-align:center}
.ft p{font-size:12px;color:rgba(255,255,255,.35);line-height:1.7}
@media(max-width:480px){.grid{grid-template-columns:1fr}.bd,.hd{padding:24px}}
</style>
</head>
<body>
<div class="shell">
  <div class="hd">
    <div class="logo">
      <div class="logo-box">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
          <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" stroke="rgba(233,193,118,.9)" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
      <span class="logo-name">RK EXPORTS &amp; IMPORTS</span>
    </div>
    <div class="badge">New Enquiry</div>
    <h1>You have a new<br/>trade enquiry ✦</h1>
  </div>
  <div class="bd">
    <div class="eyebrow">Contact Details</div>
    <div class="grid">
      <div class="field"><div class="fl">Full Name</div><div class="fv">${esc(name)}</div></div>
      <div class="field"><div class="fl">Email</div><div class="fv"><a href="mailto:${esc(email)}">${esc(email)}</a></div></div>
      <div class="field"><div class="fl">Company</div><div class="fv">${esc(co)}</div></div>
      <div class="field"><div class="fl">Phone</div><div class="fv">${esc(ph)}</div></div>
    </div>
    <div class="eyebrow">Message</div>
    <div class="msg-box"><div class="msg-text">${esc(message)}</div></div>
    <div class="cta-row">
      <a class="cta-btn" href="mailto:${esc(email)}?subject=Re%3A%20Your%20Enquiry%20%E2%80%94%20RK%20Exports">
        Reply to ${esc(name.split(' ')[0])} →
      </a>
    </div>
    <div class="divider"></div>
    <div class="timestamp">Received ${now} IST</div>
  </div>
  <div class="ft">
    <p>RK Exports &amp; Imports · Global Trade Authority<br/>Automated notification from your website contact form.</p>
  </div>
</div>
</body>
</html>`
}

// ─── Main handler ─────────────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS — allow your Vercel domain and local dev
  const allowed = [
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
    process.env.CLIENT_ORIGIN || '',
    'http://localhost:5173',
    'http://localhost:3000',
  ].filter(Boolean)

  const origin = req.headers.origin || ''
  if (allowed.some(o => origin.startsWith(o)) || !origin) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed.' })
  }

  const {
    name    = '',
    email   = '',
    company = '',
    phone   = '',
    message = '',
  } = req.body ?? {}

  const errs = validate({ name, email, message })
  if (errs.length) {
    return res.status(400).json({ ok: false, errors: errs })
  }

  const clean = {
    name   : name.trim(),
    email  : email.trim(),
    company: company.trim(),
    phone  : phone.trim(),
    message: message.trim(),
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars')
    return res.status(500).json({ ok: false, message: 'Server misconfiguration — contact admin.' })
  }

  try {
    await getTransporter().sendMail({
      from   : `"RK Exports Website" <${process.env.GMAIL_USER}>`,
      to     : process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      replyTo: `${clean.name} <${clean.email}>`,
      subject: `📦 New Enquiry from ${clean.name}${clean.company ? ` (${clean.company})` : ''}`,
      html   : buildEmail(clean),
    })

    console.log(`[contact] mail sent from ${clean.email} at ${new Date().toISOString()}`)
    return res.status(200).json({ ok: true, message: "Enquiry sent! We'll be in touch soon." })

  } catch (err) {
    console.error('[contact] send error:', err.message)
    return res.status(500).json({ ok: false, message: 'Failed to send. Please email us directly at trade@rkexports.com' })
  }
}
