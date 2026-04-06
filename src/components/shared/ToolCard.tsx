import { motion } from 'framer-motion'
import type { ToolItem } from '../../types/tool'

interface ToolCardProps {
  tool: ToolItem
}

function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.01, boxShadow: '0 10px 28px -8px rgba(0, 0, 0, 0.12)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="block rounded-card bg-warm-card p-5 shadow-soft"
    >
      <div className="mb-4 flex items-center gap-3">
        <img src={tool.logoSvg} alt={`${tool.name} logo`} className="h-12 w-12 rounded-full" />
        <div>
          <p className="text-xs text-textMuted">{tool.category}</p>
          <h3 className="text-lg font-semibold text-textMain">{tool.name}</h3>
        </div>
      </div>

      <p className="text-sm leading-7 text-textMuted">{tool.description}</p>
    </motion.a>
  )
}

export default ToolCard
