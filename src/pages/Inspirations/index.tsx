import { motion } from 'framer-motion'
import InspirationCard from '../../components/shared/InspirationCard'
import { inspirations } from '../../data/inspirations'

function InspirationsPage() {
  const orderedInspirations = [...inspirations].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  return (
    <section className="space-y-6">
      <header className="card-warm p-6 md:p-8">
        <h1 className="mb-3 text-3xl font-semibold text-textMain md:text-4xl">
          碎片 Inspirations
        </h1>
        <p className="max-w-3xl leading-8 text-textMuted">
          这里像一块软木板，贴着我一路走来的灵感便签：一句话闪念、随手拍下的瞬间，以及打动我的句子。
        </p>
      </header>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {orderedInspirations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: -18,
              rotate: index % 2 === 0 ? -2.2 : 2.2,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? -0.8 : 0.8,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.04,
              ease: 'easeOut',
            }}
            className="inline-block w-full"
          >
            <InspirationCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default InspirationsPage
