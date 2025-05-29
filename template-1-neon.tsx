"use client"

import { Github, Mail, Linkedin, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function NeonTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-[#0ff] drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">DEV</span>NAME
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="hover:text-[#0ff] transition-colors duration-300">
              About
            </Link>
            <Link href="#projects" className="hover:text-[#0ff] transition-colors duration-300">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-[#0ff] transition-colors duration-300">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-[#0ff] transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0ff] transition-colors duration-300"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0ff] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/10">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <Link href="#about" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#projects" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#skills" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#contact" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="text-white">I'm </span>
              <span className="text-[#0ff] drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10">Full-Stack Developer & UI/UX Designer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#0ff] hover:bg-[#0ff]/80 text-black font-medium px-8 py-6 rounded-full">
                View My Work
              </Button>
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10 px-8 py-6 rounded-full">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#0ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-[#0ff] drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]">Featured</span> Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#0ff]/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ff] transition-colors duration-300">
                  E-Commerce Platform
                </h3>
                <p className="text-white/70 mb-4">
                  A full-featured online store with payment processing and inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#0ff] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#0ff] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#0ff]/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ff] transition-colors duration-300">
                  AI Content Generator
                </h3>
                <p className="text-white/70 mb-4">
                  An AI-powered application that generates custom content for various purposes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">OpenAI API</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">Tailwind</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#0ff] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#0ff] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#0ff]/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ff] transition-colors duration-300">
                  Social Media Dashboard
                </h3>
                <p className="text-white/70 mb-4">
                  A comprehensive dashboard for managing multiple social media accounts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs">Chart.js</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#0ff] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#0ff] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10 px-8 py-6 rounded-full">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Let's <span className="text-[#0ff] drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]">Connect</span>
          </h2>

          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff]/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff]/50 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff]/50 focus:border-transparent transition-all duration-300"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff]/50 focus:border-transparent transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-[#0ff] hover:bg-[#0ff]/80 text-black font-medium py-3 rounded-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 mb-4 md:mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#0ff] transition-colors duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#0ff] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="text-white/50 hover:text-[#0ff] transition-colors duration-300"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
