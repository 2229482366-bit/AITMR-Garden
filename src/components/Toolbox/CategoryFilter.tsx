import type { ToolCategory } from '../../types/tool'

export type ToolboxFilter = '全部' | ToolCategory

interface CategoryFilterProps {
  categories: ToolboxFilter[]
  activeCategory: ToolboxFilter
  onChange: (category: ToolboxFilter) => void
}

function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={[
              'rounded-full border px-4 py-1.5 text-sm transition-colors',
              isActive
                ? 'border-primary/60 bg-primary/10 text-primary'
                : 'border-warm-accent/50 text-textMuted hover:text-textMain',
            ].join(' ')}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
