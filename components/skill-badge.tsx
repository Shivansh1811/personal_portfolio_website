interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="bg-background border rounded-lg p-4 text-center hover:border-primary transition-colors">
      <span className="font-medium">{name}</span>
    </div>
  )
}
