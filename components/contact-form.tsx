"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-[#00ff00]/10 p-3">
            <Send className="h-6 w-6 text-[#00ff00]" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-white/70">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <Button
          className="mt-4 bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-black/50 border border-[#00ff00]/20 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black/50 border border-[#00ff00]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:border-transparent transition-all duration-300"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black/50 border border-[#00ff00]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:border-transparent transition-all duration-300"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-3 bg-black/50 border border-[#00ff00]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:border-transparent transition-all duration-300"
          placeholder="Subject of your message"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-black/50 border border-[#00ff00]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:border-transparent transition-all duration-300"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <Button
        type="submit"
        className="w-full bg-[#00ff00] hover:bg-[#00ff00]/80 text-black font-medium py-3 rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
