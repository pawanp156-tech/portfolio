import { Fragment } from 'react'

/**
 * Splits text into per-word spans so headings can rise into view one word at a
 * time. The words stay real text nodes, so the heading still reads normally to
 * screen readers and to search engines.
 *
 * Each word is clipped by `.word` while `.word-inner` is what actually moves.
 * The separating spaces sit outside the clipping span so they are not swallowed.
 */
export default function SplitWords({ text }) {
  const words = text.split(' ')

  return words.map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      <span className="word">
        <span className="word-inner">{word}</span>
      </span>
      {index < words.length - 1 ? ' ' : null}
    </Fragment>
  ))
}
