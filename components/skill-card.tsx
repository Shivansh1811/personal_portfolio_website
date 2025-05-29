import type { ReactNode } from "react"

interface SkillCardProps {
  icon: ReactNode
  title: string
  skills: string[]
}

export function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-white/70">
            <div className="w-1 h-1 bg-[#00ff00] rounded-full"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
