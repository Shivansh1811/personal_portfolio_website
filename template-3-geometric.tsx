"use client"

import { Github, Mail, Linkedin, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function GeometricTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-emerald-400">DEV</span>NAME
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="hover:text-emerald-400 transition-colors duration-300">
              About
            </Link>
            <Link href="#projects" className="hover:text-emerald-400 transition-colors duration-300">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors duration-300">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/5">
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
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-emerald-400">Full-Stack Developer</span> &{" "}
              <span className="text-blue-400">UI/UX Designer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">I'm </span>
              <span className="text-emerald-400">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-8 py-6 rounded-md">
                View My Work
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 rounded-md">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-emerald-400">Featured</span> Projects
            </h2>
            <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  E-Commerce Platform
                </h3>
                <p className="text-white/70 mb-4">
                  A full-featured online store with payment processing and inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  AI Content Generator
                </h3>
                <p className="text-white/70 mb-4">
                  An AI-powered application that generates custom content for various purposes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">OpenAI API</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Tailwind</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  Social Media Dashboard
                </h3>
                <p className="text-white/70 mb-4">
                  A comprehensive dashboard for managing multiple social media accounts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">Chart.js</span>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-md"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-emerald-400">My</span> Skills
            </h2>
            <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Skill Categories */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>React / Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>JavaScript / TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>HTML / CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Node.js / Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>MongoDB / PostgreSQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>GraphQL / REST</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Firebase</span>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Design</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Figma / Adobe XD</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Prototyping</span>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Other</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Git / GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>CI/CD</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Testing (Jest, Cypress)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <span>Agile / Scrum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-emerald-400">Get In</span> Touch
            </h2>
            <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white/70 mb-8">
                I'm currently available for freelance work and full-time positions. If you have a project that needs
                some creative touch, or if you're looking to hire, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Mail size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-white/70">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Linkedin size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-white/70">linkedin.com/in/yourname</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Github size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-white/70">github.com/yourname</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6 bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-3 rounded-md">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 mb-4 md:mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-emerald-400 transition-colors duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-emerald-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="text-white/50 hover:text-emerald-400 transition-colors duration-300"
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
