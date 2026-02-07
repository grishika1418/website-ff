import { useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const year = new Date().getFullYear()

const daysConfig = [
  {
    id: 'rose-day',
    label: 'Rose Day',
    emoji: '🌹',
    dateLabel: `7 Feb ${year}`,
    unlockAt: new Date(year, 1, 7, 0, 0, 0).toISOString(),
    mood: 'soft',
    preview: 'A little bouquet of words and petals just for you.',
  },
  {
    id: 'propose-day',
    label: 'Propose Day',
    emoji: '💍',
    dateLabel: `8 Feb ${year}`,
    unlockAt: new Date(year, 1, 8, 0, 0, 0).toISOString(),
    mood: 'bold',
    preview: 'The official question for you, from me.',
  },
  {
    id: 'chocolate-day',
    label: 'Chocolate Day',
    emoji: '🍫',
    dateLabel: `9 Feb ${year}`,
    unlockAt: new Date(year, 1, 9, 0, 0, 0).toISOString(),
    mood: 'sweet',
    preview: 'A sweet day, exactly like you.',
  },
  {
    id: 'teddy-day',
    label: 'Teddy Day',
    emoji: '🧸',
    dateLabel: `10 Feb ${year}`,
    unlockAt: new Date(year, 1, 10, 0, 0, 0).toISOString(),
    mood: 'soft',
    preview: 'You are in fact the softest teddy ever.',
  },
  {
    id: 'promise-day',
    label: 'Promise Day',
    emoji: '🤞',
    dateLabel: `11 Feb ${year}`,
    unlockAt: new Date(year, 1, 11, 0, 0, 0).toISOString(),
    mood: 'warm',
    preview: 'Promises that mean everything to you.',
  },
  {
    id: 'hug-day',
    label: 'Hug Day',
    emoji: '🫂',
    dateLabel: `12 Feb ${year}`,
    unlockAt: new Date(year, 1, 12, 0, 0, 0).toISOString(),
    mood: 'safe',
    preview: 'The way you make me feel like home.',
  },
  {
    id: 'kiss-day',
    label: 'Kiss Day',
    emoji: '😘',
    dateLabel: `13 Feb ${year}`,
    unlockAt: new Date(year, 1, 13, 0, 0, 0).toISOString(),
    mood: 'spark',
    preview: 'ummmahhhhhh babyy',
  },
  {
    id: 'valentines-day',
    label: "Valentine's Day",
    emoji: '💘',
    dateLabel: `14 Feb ${year}`,
    unlockAt: new Date(year, 1, 14, 0, 0, 0).toISOString(),
    mood: 'finale',
    preview:
      'The one with words and a little gallery.',
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
          <h2
            style={{ fontFamily: '"Instrument Serif", serif' }}
            className="text-3xl sm:text-4xl text-rose-900"
          >
            A little countdown
          </h2>
          <p className="mt-2 text-sm sm:text-base text-rose-700/90 max-w-2xl">
            Each day has its own tiny universe. Some are unlocked, while others are waiting for their day.
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
                className={`group relative overflow-hidden rounded-xl border px-4 py-3.5 sm:px-4 sm:py-4 text-left transition-all duration-300 ${isUnlocked
                  ? 'border-rose-200/40 bg-white/80 hover:bg-white/95 hover:border-rose-300/60 shadow-sm hover:cursor-pointer'
                  : 'border-rose-100/40 bg-white/40 opacity-80 cursor-default grayscale-[0.1]'
                  }`}
              >
                <div className="relative z-10 flex items-start gap-2.5 sm:gap-3">
                  <div className={`mt-0.5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border text-base sm:text-lg flex-shrink-0 transition-colors ${isUnlocked
                    ? 'bg-rose-50 border-rose-100 text-rose-500'
                    : 'bg-gray-50 border-gray-100 text-gray-400'
                    }`}>
                    {day.emoji}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-display text-sm sm:text-base font-semibold leading-tight ${isUnlocked ? 'text-rose-900' : 'text-rose-900/70'
                        }`}>
                        {day.label}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.15em] text-rose-400/60 whitespace-nowrap flex-shrink-0">
                        {day.dateLabel}
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${isUnlocked ? 'text-rose-700/90' : 'text-rose-900/50'
                      }`}>
                      {day.preview}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px]">
                      {isUnlocked ? (
                        <>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Opened</span>
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform text-rose-400 font-medium">
                            Open →
                          </span>
                        </>
                      ) : (
                        <div className="flex items-center gap-2 w-full">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-500 font-medium">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Locked</span>
                          </span>
                          <span className="text-rose-300 ml-auto italic">{timeUntil}</span>
                        </div>
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

