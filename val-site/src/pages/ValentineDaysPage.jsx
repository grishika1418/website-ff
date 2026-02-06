import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className="max-w-4xl mx-auto mt-4 sm:mt-6 space-y-6">
      <section className="rounded-3xl bg-white/85 backdrop-blur border border-rose-100 px-5 py-6 sm:px-8 sm:py-7 shadow-[0_16px_50px_rgba(148,27,56,0.18)]">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-rose-400 mb-2">
          7 days + 1 finale
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-rose-900">
          A little countdown to us
        </h2>
        <p className="mt-2 text-sm sm:text-base text-rose-700/95 max-w-2xl">
          Every day from Rose Day to Valentine&apos;s has its own tiny universe
          here—notes, memories, and soft little surprises. Some might be
          unlocked already, others are still patiently waiting for their day.
        </p>
      </section>

      <section className="grid gap-4 sm:gap-5 md:grid-cols-2">
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
              className={`group relative overflow-hidden rounded-3xl border px-4 py-4 sm:px-5 sm:py-5 text-left transition-all duration-200 ${
                isUnlocked
                  ? 'border-rose-100 bg-white/85 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(190,24,93,0.28)]'
                  : 'border-rose-100/70 bg-rose-50/70 opacity-90 cursor-default'
              }`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-70">
                {day.mood === 'soft' && (
                  <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(255,214,214,0.6),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(255,244,228,0.8),transparent_60%)]" />
                )}
                {day.mood === 'bold' && (
                  <div className="h-full w-full bg-[radial-gradient(circle_at_0%_50%,rgba(254,202,202,0.6),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(252,231,243,0.8),transparent_60%)]" />
                )}
              </div>

              <div className="relative z-10 flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/80 border border-rose-100 shadow-sm text-lg">
                  {day.id === 'valentines-day' ? '💘' : '🌹'}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-base sm:text-lg font-semibold text-rose-900">
                      {day.label}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-rose-400">
                      {day.dateLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-rose-700/95">
                    {day.preview}
                  </p>

                  <div className="pt-1.5 flex items-center justify-between text-[11px] text-rose-500">
                    {isUnlocked ? (
                      <>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ready to open
                        </span>
                        <span className="group-hover:text-rose-700 group-hover:underline">
                          tap to enter
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                          locked for now
                        </span>
                        <span>{timeUntil}</span>
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
  )
}

export default ValentineDaysPage

