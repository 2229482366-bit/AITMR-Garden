import { Link, Navigate, useParams } from 'react-router-dom'
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

      {work.id !== 'rain-screen' ? (
        <img
          src={work.coverImage}
          alt={`${work.title} 封面图`}
          className="w-full rounded-card object-cover shadow-soft"
          loading="lazy"
        />
      ) : null}

      {work.demoUrl ? (
        <section className="overflow-hidden rounded-card border border-[#E7DED0] bg-[#101114] shadow-soft">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <p className="text-sm text-white/75">作品预览</p>
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition-colors hover:border-white/25 hover:text-white"
              >
                回到主页
              </Link>
              <a
                href={work.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition-colors hover:border-white/25 hover:text-white"
              >
                打开独立页
              </a>
            </div>
          </div>
          <iframe
            src={work.demoUrl}
            title={`${work.title} 预览`}
            className="h-[720px] w-full bg-black"
            loading="lazy"
          />
        </section>
      ) : null}

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
