import { useMemo, useState } from 'react'
import CategoryFilter, {
  type ToolboxFilter,
} from '../../components/Toolbox/CategoryFilter'
import ToolCard from '../../components/shared/ToolCard'
import { tools } from '../../data/tools'

const categories: ToolboxFilter[] = ['全部', '设计', '开发', '效率', '数据']

function ToolboxPage() {
  const [activeCategory, setActiveCategory] = useState<ToolboxFilter>('全部')

  const filteredTools = useMemo(() => {
    if (activeCategory === '全部') {
      return tools
    }
    return tools.filter((tool) => tool.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="space-y-6">
      <header className="card-warm p-6 md:p-8">
        <h1 className="mb-3 text-3xl font-semibold text-textMain md:text-4xl">
          百宝箱 Toolbox
        </h1>
        <p className="mb-5 max-w-3xl leading-8 text-textMuted">
          这里整理了我常用的设计、开发、效率与数据工具。按分类快速筛选，找到当下最合手的那一件。
        </p>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}

export default ToolboxPage
