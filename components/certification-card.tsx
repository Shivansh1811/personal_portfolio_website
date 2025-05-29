interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description: string
  image: string
}

export function CertificationCard({ title, issuer, date, description, image }: CertificationCardProps) {
  return (
    <div className="bg-black/50 border border-[#00ff00]/20 rounded-lg p-6 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 shrink-0 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={issuer} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-white/70">
            {issuer} • {date}
          </p>
        </div>
      </div>
      <p className="text-white/70">{description}</p>
    </div>
  )
}
