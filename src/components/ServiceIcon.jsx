// Line-art icons drawn on a 48x48 grid. Base strokes inherit the text colour;
// `.icon-accent` paths pick up the brand green so each icon reads two-tone.
const icons = {
  monitor: (
    <>
      <rect x="6" y="9" width="36" height="24" rx="3" />
      <path d="M18 39h12M24 33v6" />
      <path className="icon-accent" d="M12 15h9v12h-9z" />
    </>
  ),
  code: (
    <>
      <rect x="4" y="8" width="40" height="32" rx="4" />
      <path className="icon-accent" d="m18 20-5 4 5 4M30 20l5 4-5 4" />
      <path d="M26 18l-4 12" />
    </>
  ),
  layers: (
    <>
      <path d="M24 6 6 15l18 9 18-9-18-9Z" />
      <path className="icon-accent" d="m6 24 18 9 18-9" />
      <path d="m6 33 18 9 18-9" />
    </>
  ),
  cart: (
    <>
      <path d="M6 8h5l5 22h22" />
      <path className="icon-accent" d="M14 14h30l-4 12H17" />
      <circle cx="20" cy="40" r="2.5" />
      <circle cx="35" cy="40" r="2.5" />
    </>
  ),
  search: (
    <>
      <circle cx="21" cy="21" r="14" />
      <path d="m31.5 31.5 9 9" />
      <path className="icon-accent" d="m14 24 5-6 4 4 6-8" />
    </>
  ),
  users: (
    <>
      <circle cx="24" cy="20" r="7" />
      <path d="M12 38a12 12 0 0 1 24 0" />
      <circle className="icon-accent" cx="40" cy="12" r="3" />
      <circle className="icon-accent" cx="8" cy="12" r="3" />
    </>
  ),
  mobile: (
    <>
      <rect x="13" y="4" width="22" height="40" rx="5" />
      <path d="M21 39h6" />
      <path className="icon-accent" d="M19 14h10M19 21h10M19 28h6" />
    </>
  ),
  brand: (
    <>
      <path d="m24 6 5.2 12.4L42 19.6l-9.6 8.4 2.9 12.8L24 34l-11.3 6.8 2.9-12.8L6 19.6l12.8-1.2z" />
      <circle className="icon-accent" cx="24" cy="23" r="4" />
    </>
  ),
  uiux: (
    <>
      <rect x="5" y="8" width="38" height="30" rx="3" />
      <path d="M5 17h38" />
      <path className="icon-accent" d="m21 23 13 5.5-5.4 2.1-2.1 5.4z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="24" cy="12" rx="14" ry="5" />
      <path d="M10 12v24c0 2.8 6.3 5 14 5s14-2.2 14-5V12" />
      <path className="icon-accent" d="M10 20c0 2.8 6.3 5 14 5s14-2.2 14-5" />
      <path className="icon-accent" d="M10 28c0 2.8 6.3 5 14 5s14-2.2 14-5" />
    </>
  ),
  support: (
    <>
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10.5 10.5l4.2 4.2M33.3 33.3l4.2 4.2M37.5 10.5l-4.2 4.2M14.7 33.3l-4.2 4.2" />
      <circle className="icon-accent" cx="24" cy="24" r="3" />
    </>
  ),
}

export default function ServiceIcon({ name }) {
  const glyph = icons[name] ?? icons.monitor

  return (
    <svg
      className="service-icon"
      viewBox="0 0 48 48"
      width="52"
      height="52"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
