import { useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const year = new Date().getFullYear()

const daysConfig = [
  {
    id: 'rose-day',
    label: 'Rose Day',
    dateLabel: `7 Feb ${year}`,
    unlockAt: new Date(year, 1, 7, 0, 0, 0).toISOString(),
    mood: 'soft',
    preview: 'A little bouquet of words and petals just for you.',
  },
  {
    id: 'propose-day',
    label: 'Propose Day',
    dateLabel: `8 Feb ${year}`,
    unlockAt: new Date(year, 1, 8, 0, 0, 0).toISOString(),
    mood: 'bold',
    preview: 'The official “no backsies” question, properly documented.',
  },
  {
    id: 'chocolate-day',
    label: 'Chocolate Day',
    dateLabel: `9 Feb ${year}`,
    unlockAt: new Date(year, 1, 9, 0, 0, 0).toISOString(),
    mood: 'sweet',
    preview: 'Sticky sweet, slightly chaotic, exactly like us.',
  },
  {
    id: 'teddy-day',
    label: 'Teddy Day',
    dateLabel: `10 Feb ${year}`,
    unlockAt: new Date(year, 1, 10, 0, 0, 0).toISOString(),
    mood: 'soft',
    preview: 'Evidence that you are, in fact, the softest teddy.',
  },
  {
    id: 'promise-day',
    label: 'Promise Day',
    dateLabel: `11 Feb ${year}`,
    unlockAt: new Date(year, 1, 11, 0, 0, 0).toISOString(),
    mood: 'warm',
    preview: 'Tiny, specific promises that quietly mean everything.',
  },
  {
    id: 'hug-day',
    label: 'Hug Day',
    dateLabel: `12 Feb ${year}`,
    unlockAt: new Date(year, 1, 12, 0, 0, 0).toISOString(),
    mood: 'safe',
    preview: 'All the ways you feel like home, in one place.',
  },
  {
    id: 'kiss-day',
    label: 'Kiss Day',
    dateLabel: `13 Feb ${year}`,
    unlockAt: new Date(year, 1, 13, 0, 0, 0).toISOString(),
    mood: 'spark',
    preview: 'Soft, electric, and extremely us-coded.',
  },
  {
    id: 'valentines-day',
    label: "Valentine's Day",
    dateLabel: `14 Feb ${year}`,
    unlockAt: new Date(year, 1, 14, 0, 0, 0).toISOString(),
    mood: 'finale',
    preview:
      'The big one—with words, memories, and a secret little gallery.',
  },
]

function useNow() {
  return useMemo(() => new Date(), [])
}

function getTimeUntil(unlockAt) {
  const now = new Date()
  const target = new Date(unlockAt)
  const diff = target.getTime() - now.getTime()

  if (diff <= 0) return null

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff / (1000 * 60)) % 60)

  if (hours <= 0 && minutes <= 0) return 'unlocks in a few moments'

  if (hours < 24) {
    return `unlocks in ${hours}h ${minutes.toString().padStart(2, '0')}m`
  }

  const days = Math.floor(hours / 24)
  const remainingHours = hours % 24
  return `unlocks in ${days}d ${remainingHours}h`
}

function ValentineDaysPage() {
  const now = useNow()
  const navigate = useNavigate()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      {/* Back arrow */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-sm text-rose-600 hover:text-rose-800 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Back</span>
      </Link>

      <div className="space-y-5 sm:space-y-6">
        <section className="rounded-xl bg-white/70 backdrop-blur-sm border border-rose-200/40 px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-rose-400/80 mb-2">
            7 days + 1 finale
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-rose-900">
            A little countdown
          </h2>
          <p className="mt-2 text-sm sm:text-base text-rose-700/90 max-w-2xl">
            Every day has its own tiny universe, some are unlocked while others are waiting for their day.
          </p>
        </section>

        <section className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {daysConfig.map((day) => {
          const isUnlocked = new Date(day.unlockAt) <= now
          const timeUntil = isUnlocked ? null : getTimeUntil(day.unlockAt)

          return (
            <button
              key={day.id}
              type="button"
              onClick={() => {
                if (isUnlocked) {
                  navigate(`/days/${day.id}`)
                }
              }}
              className={`group relative overflow-hidden rounded-xl border px-4 py-3.5 sm:px-4 sm:py-4 text-left transition-colors duration-200 ${
                isUnlocked
                  ? 'border-rose-200/30 bg-white/70 hover:bg-white/85 hover:border-rose-200/50'
                  : 'border-rose-200/25 bg-rose-50/40 opacity-75 cursor-default'
              }`}
            >
              <div className="relative z-10 flex items-start gap-2.5 sm:gap-3">
                <div className="mt-0.5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/90 border border-rose-200/30 text-base sm:text-lg flex-shrink-0">
                  {day.id === 'valentines-day' ? '💘' : '🌹'}
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-semibold text-rose-900 leading-tight">
                      {day.label}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.15em] text-rose-400/80 whitespace-nowrap flex-shrink-0">
                      {day.dateLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-rose-700/90 leading-relaxed">
                    {day.preview}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[10px] sm:text-[11px] text-rose-500/90">
                    {isUnlocked ? (
                      <>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="hidden sm:inline">ready to open</span>
                          <span className="sm:hidden">ready</span>
                        </span>
                        <span className="group-hover:text-rose-700 transition-colors">
                          tap →
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                          <span className="hidden sm:inline">locked</span>
                        </span>
                        <span className="text-rose-400/80">{timeUntil}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
        </section>
      </div>
    </div>
  )
}

export default ValentineDaysPage

