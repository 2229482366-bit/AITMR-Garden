import { AnimatePresence } from 'framer-motion'
import { NavLink, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import PageTransition from './PageTransition'

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const outlet = useOutlet()

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-warm-bg text-warm-text">
      <header className="sticky top-0 z-50 border-b border-warm-accent/35 bg-warm-bg/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <NavLink to="/" className="text-lg font-semibold tracking-wide text-black">
            铁某人的小屋
          </NavLink>
          <nav className="flex flex-wrap items-center gap-5 md:gap-7">
            <button
              type="button"
              onClick={() => scrollToSection('works')}
              className="text-sm text-textMuted transition-colors hover:text-textMain"
            >
              作品
            </button>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                [
                  'text-sm transition-colors',
                  isActive
                    ? 'font-medium text-textMain'
                    : 'text-textMuted hover:text-textMain',
                ].join(' ')
              }
            >
              联系
            </NavLink>

            {[
              { to: '/insights', label: '洞察' },
              { to: '/inspirations', label: '碎片' },
              { to: '/toolbox', label: '百宝箱' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'text-sm transition-colors',
                    isActive
                      ? 'font-medium text-textMain'
                      : 'text-textMuted hover:text-textMain',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>

      <footer className="border-t border-warm-accent/35 bg-warm-bg">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-textMuted md:px-8">
          © {new Date().getFullYear()} 铁某人的小屋 · 持续生长中
        </div>
      </footer>
    </div>
  )
}

export default Layout
