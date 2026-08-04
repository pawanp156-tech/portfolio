export default function Loader({ label, isExiting }) {
  // The logo mark is the brand's "P", so the animated letters pick up from the
  // second character — same construction as the header wordmark.
  const letters = [...label].slice(1)

  return (
    <div
      className={`loader${isExiting ? ' is-exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="loader-inner">
        <div className="loader-wordmark" aria-hidden="true">
          <img className="loader-logo" src="/Logo.svg" alt="" width="56" height="59" />

          <span className="loader-letters">
            {letters.map((character, index) => (
              <span key={`${character}-${index}`} style={{ '--i': index }}>
                {character}
              </span>
            ))}
          </span>
        </div>

        <div className="loader-bar" aria-hidden="true">
          <span />
        </div>

        <p className="loader-text" aria-hidden="true">
          Loading
        </p>
      </div>
    </div>
  )
}
