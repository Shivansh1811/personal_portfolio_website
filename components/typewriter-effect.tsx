"use client"

import { useState, useEffect } from "react"

export function TypewriterEffect() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Network Security",
    "Secure Coding",
    "Digital Forensics",
    "Ethical Hacking",
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <div className="font-mono text-2xl md:text-3xl">
      <span className="text-white">Specializing in </span>
      <span className="text-[#00ff00] inline-block min-w-[20px]">{text}</span>
      <span className="text-[#00ff00] animate-pulse">_</span>
    </div>
  )
}
