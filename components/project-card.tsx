import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  codeUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, codeUrl }: ProjectCardProps) {
  return (
    <div className="group relative bg-black/50 border border-[#00ff00]/20 rounded-lg overflow-hidden hover:border-[#00ff00]/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/0 via-[#00ff00]/0 to-[#00ff00]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ff00] transition-colors duration-300">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={demoUrl} className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
            <ExternalLink size={16} /> Live Demo
          </Link>
          <Link href={codeUrl} className="text-[#00ff00] hover:text-white flex items-center gap-1 text-sm">
            <Github size={16} /> Source Code
          </Link>
        </div>
      </div>
    </div>
  )
}
