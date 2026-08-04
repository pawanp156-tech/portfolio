// Simplified stroke marks drawn to match the site's line-art icon language
// rather than pasted-in brand assets. Each is recognisable at 22px.
const icons = {
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" />
      <circle cx="7.2" cy="7.6" r="1.3" fill="currentColor" stroke="none" />
      <path d="M7.2 11v6.4" />
      <path d="M11.6 17.4V11M11.6 13.9a2.4 2.4 0 0 1 4.8 0v3.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M15 8.1h-1.7a1.9 1.9 0 0 0-1.9 1.9v11.4" />
      <path d="M9.2 12.9h5.7" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.4 20.6l1.2-4.1A8.6 8.6 0 1 1 7.9 19.4l-4.5 1.2z" />
      <path
        d="M9.1 8.9c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.6 1.5c.1.2 0 .4-.1.6l-.3.4c-.1.2-.2.3 0 .5a5.4 5.4 0 0 0 2.4 2.1c.2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.4.7c.3.1.4.2.4.4 0 .3-.1.8-.4 1.1-.3.3-.9.7-1.4.7-1.4 0-3.2-1-4.5-2.3-1.1-1.2-2-2.7-2-3.9 0-.5.3-1 .5-1.3z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
}

export default function SocialIcon({ name }) {
  const glyph = icons[name]
  if (!glyph) return null

  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
