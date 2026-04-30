import type { Inspiration } from '../../types/inspiration'

interface InspirationCardProps {
  item: Inspiration
}

const noteBackgrounds = [
  'bg-[#FFF9ED]',
  'bg-[#FFF6E8]',
  'bg-[#FDF7EE]',
  'bg-[#FFF8F1]',
]

const toDisplayTime = (dateIso: string) =>
  new Date(dateIso).toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })

function InspirationCard({ item }: InspirationCardProps) {
  const bg = noteBackgrounds[item.id.charCodeAt(item.id.length - 1) % noteBackgrounds.length]
  const isQuote = item.type === 'quote'
  const isImage = item.type === 'image'
  const mediaAtTop = isImage && item.mediaPosition === 'top'

  return (
    <article
      className={`mb-5 break-inside-avoid rounded-[1rem] border border-dashed border-warm-accent/60 p-4 text-warm-title ${bg}`}
    >
      {mediaAtTop && item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt="灵感配图"
          loading="lazy"
          className="mb-4 w-full rounded-xl object-cover"
        />
      ) : null}

      {isQuote ? (
        <blockquote className="mb-4 border-l-2 border-warm-primary/60 pl-3 text-base leading-8 italic text-textMain">
          “{item.content}”
          {item.author ? (
            <footer className="mt-2 text-sm not-italic text-textMuted">— {item.author}</footer>
          ) : null}
        </blockquote>
      ) : (
        <p className="mb-4 whitespace-pre-wrap text-base leading-8 text-textMain">
          {item.content}
        </p>
      )}

      {isImage && item.imageUrl && !mediaAtTop ? (
        <img
          src={item.imageUrl}
          alt="灵感配图"
          loading="lazy"
          className="mb-4 w-full rounded-xl object-cover"
        />
      ) : null}

      <p className="text-xs tracking-wide text-textMuted/90">{toDisplayTime(item.createdAt)}</p>
    </article>
  )
}

export default InspirationCard
