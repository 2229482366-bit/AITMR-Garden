import { Navigate, useParams } from 'react-router-dom'
import { works } from '../../data/works'

function WorkDetailPage() {
  const { id } = useParams()
  const work = works.find((item) => item.id === id)

  if (!work) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="mx-auto w-full max-w-4xl space-y-6 py-8">
      <header className="space-y-3">
        <p className="text-sm tracking-wide text-textMuted">{work.year}</p>
        <h1 className="text-3xl font-semibold text-textMain md:text-4xl">{work.title}</h1>
        <p className="text-textMuted">{work.role}</p>
      </header>

      <img
        src={work.coverImage}
        alt={`${work.title} 封面图`}
        className="w-full rounded-card object-cover shadow-soft"
        loading="lazy"
      />

      <section className="space-y-4 rounded-card bg-warm-card p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-textMain">项目简介</h2>
        <p className="leading-8 text-textMuted">{work.summary}</p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#EFE9DD] px-3 py-1 text-xs text-textMain"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </article>
  )
}

export default WorkDetailPage
