import React from 'react'

type Props = {}

const FooterText = (props: Props) => {
  return (
    <div className="w-full h-52" aria-hidden="true">
      {/* Text */}
      <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-transparent before:to-transparent before:bg-clip-text before:text-transparent before:opacity-10 before:content-['Floxify'] after:absolute after:inset-0 after:bg-transparent after:bg-clip-text after:text-transparent after:opacity-10 after:mix-blend-darken after:content-['Floxify'] after:[text-shadow:0_1px_0_white]"></div>
      
      {/* Glow */}
      <div
        className="absolute bottom-0 -translate-x-1/2 left-1/2 translate-y-2/3"
        aria-hidden="true"
      >
        <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
      </div>
    </div>
  )
}

export default FooterText
