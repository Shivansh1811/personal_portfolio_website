"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Shield,
  Terminal,
  Code,
  Server,
  Database,
  Lock,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Send,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Typewriter effect state
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

  // Handle typewriter effect
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

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)

    // Initialize Matrix background
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const fontSize = 14
        const columns = Math.floor(canvas.width / fontSize)

        const drops: number[] = []
        for (let i = 0; i < columns; i++) {
          drops[i] = 1
        }

        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(
          "",
        )

        function draw() {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          ctx.fillStyle = "#00ff00"
          ctx.font = `${fontSize}px monospace`

          for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)]
            ctx.fillText(text, i * fontSize, drops[i] * fontSize)

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0
            }

            drops[i]++
          }
        }

        const interval = setInterval(draw, 33)

        const handleResize = () => {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)

        return () => {
          clearInterval(interval)
          window.removeEventListener("resize", handleResize)
        }
      }
    }
  }, [])

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="fixed inset-0 z-0 opacity-10">
        <canvas id="matrix-canvas" className="w-full h-full"></canvas>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00ff00]/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-mono font-bold tracking-tight">
            <span className="text-[#00ff00]">&gt;_</span> <span className="text-white">SECURITY</span>
            <span className="text-[#00ff00]">.DEV</span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className={`text-sm hover:text-[#00ff00] transition-colors duration-300 ${activeSection === "home" ? "text-[#00ff00]" : "text-white/70"}`}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`text-sm hover:text-[#00ff00] transition-colors duration-300 ${activeSection === "about" ? "text-[#00ff00]" : "text-white/70"}`}
            >
              About
            </Link>
            <Link
              href="#skills"
              className={`text-sm hover:text-[#00ff00] transition-colors duration-300 ${activeSection === "skills" ? "text-[#00ff00]" : "text-white/70"}`}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className={`text-sm hover:text-[#00ff00] transition-colors duration-300 ${activeSection === "projects" ? "text-[#00ff00]" : "text-white/70"}`}
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className={`text-sm hover:text-[#00ff00] transition-colors duration-300 ${activeSection === "certifications" ? "text-[#00ff00]" : "text-white/70"}`}
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className={`text-sm hover:text-[#00ff00] transition-colors duration-300 ${activeSection === "contact" ? "text-[#00ff00]" : "text-white/70"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/Shivansh1811"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#00ff00] transition-colors duration-300"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shars03/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#00ff00] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </Link>
            <Button
              size="sm"
              className="bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 rounded-md hidden md:flex"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Resume
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-[#00ff00]/10">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <Link href="#home" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#skills" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#projects" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#certifications" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Certifications
              </Link>
              <Link href="#contact" className="text-lg" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex gap-4 pt-4 border-t border-[#00ff00]/10">
                <Link href="https://github.com/Shivansh1811" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/shars03/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </Link>
                <Button
                  size="sm"
                  className="ml-auto bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  Resume
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center relative pt-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 border border-[#00ff00]/20 rounded-full bg-black/50 backdrop-blur-sm">
              <span className="text-[#00ff00]">NYU Cybersecurity Graduate Student</span> &{" "}
              <span className="text-white">Security Researcher</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="text-[#00ff00]">Shivansh Sharma</span>
            </h1>

            <div className="h-20 mb-8">
              <div className="font-mono text-2xl md:text-3xl">
                <span className="text-white">Specializing in </span>
                <span className="text-[#00ff00] inline-block min-w-[20px]">{text}</span>
                <span className="text-[#00ff00] animate-pulse">_</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#00ff00] hover:bg-[#00ff00]/80 text-black font-medium px-8 py-6 rounded-md">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                className="border-[#00ff00]/50 text-[#00ff00] hover:bg-[#00ff00]/10 px-8 py-6 rounded-md"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated arrow */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#00ff00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/80 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#00ff00]">About</span> Me
            </h2>
            <div className="h-px bg-gradient-to-r from-[#00ff00] to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#00ff00]/5 rounded-lg blur-lg"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-[#00ff00]/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-04%20at%203.44.11%E2%80%AFPM-iXQBdagQB3oaM61JW68xDkuhQ4RaJ2.png"
                  alt="Shivansh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-white/70 mb-6">
                I'm a Cybersecurity Graduate Student at New York University, specializing in network security,
                penetration testing, and offensive security. Currently serving as a K-12 Cybersecurity/AWS Instructor at
                NYU, I'm passionate about sharing knowledge and building secure systems.
              </p>
              <p className="text-white/70 mb-6">
                With experience as a SOC Analyst and Cloud Security professional, I've developed expertise in SIEM log
                analysis, incident response, and cloud security configurations. My background in Computer Science from
                Purdue University Fort Wayne provides a strong foundation for tackling complex security challenges.
              </p>
              <p className="text-white/70 mb-8">
                I'm dedicated to staying ahead of emerging threats through continuous learning and practical
                application, with a particular focus on threat detection, malware analysis, and secure system design.
              </p>
              <Button
                className="bg-black border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 flex items-center gap-2"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download Resume <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#00ff00]">Technical</span> Skills
            </h2>
            <div className="h-px bg-gradient-to-r from-[#00ff00] to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Card - Network Security */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-10 h-10 text-[#00ff00]" />
                <h3 className="text-xl font-bold">Network Security</h3>
              </div>
              <ul className="space-y-2">
                {["Firewall Configuration", "IDS/IPS", "VPN Setup", "Network Monitoring"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70">
                    <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Card - Penetration Testing */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Terminal className="w-10 h-10 text-[#00ff00]" />
                <h3 className="text-xl font-bold">Penetration Testing</h3>
              </div>
              <ul className="space-y-2">
                {["Vulnerability Assessment", "Exploitation", "Post-Exploitation", "Reporting"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70">
                    <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Card - Secure Coding */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-10 h-10 text-[#00ff00]" />
                <h3 className="text-xl font-bold">Secure Coding</h3>
              </div>
              <ul className="space-y-2">
                {["OWASP Top 10", "Code Review", "Secure SDLC", "DevSecOps"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70">
                    <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Card - System Security */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Server className="w-10 h-10 text-[#00ff00]" />
                <h3 className="text-xl font-bold">System Security</h3>
              </div>
              <ul className="space-y-2">
                {["Hardening", "Patch Management", "Access Control", "Endpoint Protection"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70">
                    <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Card - Digital Forensics */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Database className="w-10 h-10 text-[#00ff00]" />
                <h3 className="text-xl font-bold">Digital Forensics</h3>
              </div>
              <ul className="space-y-2">
                {["Disk Imaging", "Memory Analysis", "Log Analysis", "Chain of Custody"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70">
                    <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Card - Cryptography */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-10 h-10 text-[#00ff00]" />
                <h3 className="text-xl font-bold">Cryptography</h3>
              </div>
              <ul className="space-y-2">
                {["Encryption Algorithms", "Key Management", "PKI", "Hashing"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70">
                    <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Kali Linux",
                "Metasploit",
                "Wireshark",
                "Burp Suite",
                "Nmap",
                "OWASP ZAP",
                "Nessus",
                "Python",
                "Bash",
                "Docker",
                "AWS",
                "Splunk",
              ].map((tool) => (
                <div
                  key={tool}
                  className="bg-black/50 border border-[#00ff00]/20 rounded-md p-4 text-center hover:border-[#00ff00] hover:bg-[#00ff00]/5 transition-all duration-300"
                >
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/80 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#00ff00]">Security</span> Projects
            </h2>
            <div className="h-px bg-gradient-to-r from-[#00ff00] to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00ff00]" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors duration-300">
                    Automated SOC Threat Detection System
                  </h3>
                </div>
                <p className="text-white/70 mb-6">
                  A real-time log monitoring tool detecting Brute Force Attacks, Privilege Escalations, and Insider
                  Threats, improving response time by 60%. Integrated with SIEM platforms for efficient alert
                  management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "SIEM", "Threat Intelligence", "Incident Response"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#00ff00]" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors duration-300">
                    YARA Malware Scanner
                  </h3>
                </div>
                <p className="text-white/70 mb-6">
                  Advanced malware detection tool using YARA rules, identifying 30% more malware variants. Features
                  automated scanning system and custom YARA rules for enhanced detection accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "YARA", "Digital Forensics", "Malware Analysis"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-[#00ff00]" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors duration-300">
                    Security Monitoring Dashboard
                  </h3>
                </div>
                <p className="text-white/70 mb-6">
                  A real-time security monitoring dashboard that aggregates logs from multiple sources and visualizes
                  potential security incidents.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["ELK Stack", "SIEM", "Data Visualization", "Alerting"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                    <Server className="w-6 h-6 text-[#00ff00]" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors duration-300">
                    Web Application Firewall
                  </h3>
                </div>
                <p className="text-white/70 mb-6">
                  A custom WAF implementation that protects web applications from common attacks like SQL injection,
                  XSS, and CSRF.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["ModSecurity", "Nginx", "Rule Development", "Traffic Analysis"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-[#00ff00]" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors duration-300">
                    Password Strength Analyzer
                  </h3>
                </div>
                <p className="text-white/70 mb-6">
                  A tool that evaluates password strength using multiple algorithms and provides recommendations for
                  creating stronger passwords.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Machine Learning", "NLP", "Web Interface"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-[#00ff00]" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff00] transition-colors duration-300">
                    CTF Challenge Platform
                  </h3>
                </div>
                <p className="text-white/70 mb-6">
                  A platform for hosting and participating in Capture The Flag security competitions with various
                  challenge categories.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Docker", "Kubernetes", "Full-Stack", "Authentication"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href="#" className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#00ff00]/50 text-[#00ff00] hover:bg-[#00ff00]/10 px-8 py-3 rounded-md"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#00ff00]">Certifications</span> & Education
            </h2>
            <div className="h-px bg-gradient-to-r from-[#00ff00] to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification Card 1 - CompTIA Security+ */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="font-bold">CompTIA Security+</h3>
                  <p className="text-sm text-white/70">CompTIA • In Progress • Expected June 2025</p>
                </div>
              </div>
              <p className="text-white/70">Validated knowledge of core security functions and best practices.</p>
            </div>

            {/* Certification Card 2 - CCNA */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="font-bold">CCNA</h3>
                  <p className="text-sm text-white/70">Cisco • In Progress • Expected June 2025</p>
                </div>
              </div>
              <p className="text-white/70">
                Cisco Certified Network Associate certification covering networking fundamentals, security, and
                automation.
              </p>
            </div>

            {/* Certification Card 3 - Google Cybersecurity Certificate */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="font-bold">Google Cybersecurity Certificate</h3>
                  <p className="text-sm text-white/70">Google • 2025</p>
                </div>
              </div>
              <p className="text-white/70">
                Comprehensive cybersecurity program covering security frameworks, incident response, threat analysis,
                and hands-on experience with industry-standard tools and practices.
              </p>
            </div>

            {/* Certification Card 4 - NYU */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="font-bold">Master of Science in Cybersecurity</h3>
                  <p className="text-sm text-white/70">New York University • Expected May 2025</p>
                </div>
              </div>
              <p className="text-white/70">
                Specializing in Network Security, Penetration Testing, Offensive Security, and Information Security.
              </p>
            </div>

            {/* Certification Card 5 - Purdue */}
            <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#00ff00]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-white/70">Purdue University Fort Wayne • May 2023</p>
                </div>
              </div>
              <p className="text-white/70">
                Minor in Mathematics with focus on computer science fundamentals and mathematical principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/80 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#00ff00]">Get In</span> Touch
            </h2>
            <div className="h-px bg-gradient-to-r from-[#00ff00] to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white/70 mb-8">
                I'm currently available for internships, research opportunities, and collaboration on security projects.
                If you're looking for a cybersecurity professional with a passion for protecting digital assets, feel
                free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center">
                    <Mail size={20} className="text-[#00ff00]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-white/70">shivansh.work23@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center">
                    <Linkedin size={20} className="text-[#00ff00]" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-white/70">
                      <Link
                        href="https://www.linkedin.com/in/shars03/"
                        className="hover:text-[#00ff00] transition-colors"
                      >
                        linkedin.com/in/shars03
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center">
                    <Github size={20} className="text-[#00ff00]" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-white/70">
                      <Link href="https://github.com/Shivansh1811" className="hover:text-[#00ff00] transition-colors">
                        github.com/Shivansh1811
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
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
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="space-y-6 bg-black/50 border border-[#00ff00]/20 rounded-lg p-6"
                >
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-[#00ff00]/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 mb-4 md:mb-0">
              © {new Date().getFullYear()} Shivansh Sharma. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/Shivansh1811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#00ff00] transition-colors duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shars03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#00ff00] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:shivansh.work23@gmail.com"
                className="text-white/50 hover:text-[#00ff00] transition-colors duration-300"
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
