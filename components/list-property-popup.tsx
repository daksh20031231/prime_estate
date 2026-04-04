'use client'

import { useEffect, useState } from 'react'

export function ListPropertyPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed left-4 bottom-6 z-[60] w-[92vw] max-w-sm rounded-xl border border-border bg-card text-card-foreground shadow-xl p-4">
      <button
        type="button"
        aria-label="Close popup"
        onClick={() => setVisible(false)}
        className="absolute right-3 top-2 text-foreground/60 hover:text-foreground"
      >
        ×
      </button>

      <p className="text-sm leading-relaxed pr-5">
        Looking to list your property?{' '}
        <a
          href="#contact"
          onClick={() => setVisible(false)}
          className="font-bold underline text-primary hover:text-primary/80"
        >
          Contact Us
        </a>
      </p>
    </div>
  )
}
