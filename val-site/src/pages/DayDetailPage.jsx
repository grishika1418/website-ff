import { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const year = new Date().getFullYear()

const dayDetails = {
  'rose-day': {
    title: 'Rose Day',
    emoji: '🌹',
    dateLabel: `7 Feb ${year}`,
    unlockAt: new Date(year, 1, 7, 0, 0, 0).toISOString(),
    intro:
      'Today is for roses—real ones, digital ones, and all the ways you quietly make the world feel softer.',
    content: [
      'Here you can write about the very first “rose moment” that made you look at her differently.',
      'Add little bullet points of things you adore about her—how she laughs, how she texts, the way she says your name.',
      'You can also paste in a tiny poem or a screenshot of a moment that felt like someone handing you a flower.',
    ],
    images: ['/images/pics-days/rose.png'],
  },
  'propose-day': {
    title: 'Propose Day',
    emoji: '💍',
    dateLabel: `8 Feb ${year}`,
    unlockAt: new Date(year, 1, 8, 0, 0, 0).toISOString(),
    intro:
      'The day the question stopped living only in your head and started living in the world.',
    content: [
      'Describe how you imagined asking her, versus how it actually happened (or how you want it to happen).',
      'Write down the exact words you never want to forget, even if they only live here.',
      'Use this as a space to confess something soft, brave, and very you-coded.',
    ],
    images: ['/images/pics-days/propose.png'],
  },
  'chocolate-day': {
    title: 'Chocolate Day',
    emoji: '🍫',
    dateLabel: `9 Feb ${year}`,
    unlockAt: new Date(year, 1, 9, 0, 0, 0).toISOString(),
    intro:
      'Today is for sweet, messy, slightly over-the-top affection—like too much chocolate and not enough self-control.',
    content: [
      'List the tiny, sweet rituals you share—late night calls, silly memes, comfort shows.',
      'Note down the “comfort snacks” or drinks that now secretly remind you of her.',
      'You can later replace this text with specific stories of dates, desserts, or inside jokes.',
    ],
    images: ['/images/pics-days/choco1.png'],
  },
  'teddy-day': {
    title: 'Teddy Day',
    emoji: '🧸',
    dateLabel: `10 Feb ${year}`,
    unlockAt: new Date(year, 1, 10, 0, 0, 0).toISOString(),
    intro:
      'For everything soft, safe, and a little bit clingy—in other words: this is the “I want to hug you forever” page.',
    content: [
      'Write about a hug (real or imagined) that felt like time paused for a second.',
      'Describe how it feels when you miss her, in the gentlest, most honest words you can find.',
      'You can also write a little “if I could teleport to you right now…” paragraph.',
    ],
    images: ['/images/pics-days/teddy.png'],
  },
  'promise-day': {
    title: 'Promise Day',
    emoji: '🤞',
    dateLabel: `11 Feb ${year}`,
    unlockAt: new Date(year, 1, 11, 0, 0, 0).toISOString(),
    intro:
      'Promises don’t have to be huge to matter—tiny, specific ones are often the most romantic.',
    content: [
      'List a few soft promises: to listen, to be patient, to send memes when she needs cheering up.',
      'Add some oddly specific ones that only the two of you would understand.',
      'Leave space to come back later and add more as your story grows.',
    ],
    images: ['/images/pics-days/prom.png'],
  },
  'hug-day': {
    title: 'Hug Day',
    emoji: '🫂',
    dateLabel: `12 Feb ${year}`,
    unlockAt: new Date(year, 1, 12, 0, 0, 0).toISOString(),
    intro:
      'A warm, slightly squishy reminder that you are someone’s safest place.',
    content: [
      'Write about the way you imagine holding her after a long, hard day.',
      'Describe what calms you down when you think about her: her voice, her presence, her texts.',
      'Use this as a space to reassure her (and yourself) that you are not going anywhere.',
    ],
    images: ['/images/pics-days/hug1.png'],
  },
  'kiss-day': {
    title: 'Kiss Day',
    emoji: '😘',
    dateLabel: `13 Feb ${year}`,
    unlockAt: new Date(year, 1, 13, 0, 0, 0).toISOString(),
    intro:
      'For stolen glances, almost-kisses, real kisses, and imaginary ones that already feel real.',
    content: [
      'Note down the little moments that felt charged in the softest way.',
      'Write how you think your first (or next) kiss with her would feel.',
      'You can also add a playlist link here later—the “I think of you” songs.',
    ],
    images: ['/images/pics-days/kiss.png'],
  },
  'valentines-day': {
    title: "Valentine's Day",
    emoji: '💘',
    dateLabel: `14 Feb ${year}`,
    unlockAt: new Date(year, 1, 14, 0, 0, 0).toISOString(),
    intro:
      'The big page. The one with the words you maybe never said out loud—but always felt.',
    content: [
      'Use this space for a long letter: how you met, what changed, and what you quietly wish for.',
      'You can break it into sections—“you”, “me”, “us”, “future”—and write a little under each.',
      'Down below, there are two tiny doors: one for her pictures, one for yours together.',
    ],
    isFinale: true,
  },
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

function DayDetailPage() {
  const { dayId } = useParams()
  const navigate = useNavigate()

  const detail = dayDetails[dayId]

  if (!detail) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center space-y-3">
        <p className="text-2xl">🕊️</p>
        <p className="text-sm text-rose-700">
          This page hasn&apos;t been written yet.
        </p>
        <Link
          to="/days"
          className="inline-flex items-center gap-1 text-sm text-rose-600 hover:text-rose-800 hover:underline"
        >
          ← back to the timeline
        </Link>
      </div>
    )
  }

  const unlockDate = new Date(detail.unlockAt)
  const isUnlocked = new Date() >= unlockDate
  const timeUntil = isUnlocked ? null : getTimeUntil(detail.unlockAt)

  return (
    <div className="max-w-3xl mx-auto mt-5 sm:mt-7 space-y-6">
      <button
        type="button"
        onClick={() => navigate('/days')}
        className="hover:cursor-pointer inline-flex items-center gap-1 rounded-full border border-rose-200/50 bg-white/90 px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50/90 transition-colors"
      >
        ← back to all days
      </button>

      <section className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-200/50 px-5 py-6 sm:px-7 sm:py-7">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(0, 0, 0, 0.65),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(255,244,228,0.9),transparent_60%)]" />
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 border border-rose-200/50 text-lg">
                {detail.emoji}
              </div>
              <div>
                <h1 className="font-display text-xl sm:text-2xl text-rose-900">
                  {detail.title}
                </h1>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500">
                  {detail.dateLabel}
                </p>
              </div>
            </div>

            {/* <div className="text-right text-[11px] text-rose-600">
              {isUnlocked ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50/70 px-2 py-1 text-[10px] font-semibold text-emerald-700 border border-emerald-200/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  this page is open
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-50/70 px-2 py-1 text-[10px] font-semibold text-rose-600 border border-rose-200/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  locked for now • {timeUntil}
                </span>
              )}
            </div> */}
          </div>

          {!isUnlocked && (
            <p className="mt-2 text-xs sm:text-sm text-rose-700/90">
              You can pre-write everything here now, but when she visits, this
              page will only open on or after{' '}
              <span className="font-semibold">{detail.dateLabel}</span>.
            </p>
          )}

          <p className="mt-2 text-sm sm:text-base text-rose-800/95">
            {detail.intro}
          </p>

          <div className="mt-4 space-y-2.5 text-sm sm:text-base text-rose-800/95">
            {detail.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image Gallery Section */}
          {detail.images && detail.images.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {detail.images.map((imgSrc, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border border-rose-100/50 shadow-sm transition-transform hover:scale-[1.02] duration-300 bg-white/50 flex items-center justify-center p-2 h-64 w-64 sm:h-80 sm:w-80"
                >
                  <img
                    src={imgSrc}
                    alt={`${detail.title} moment ${index + 1}`}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.error(`Failed to load image: ${imgSrc}`);
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {detail.isFinale && (
            <div className="mt-5 border-t border-rose-200/40 pt-4">
              <p className="text-xs uppercase tracking-[0.26em] text-rose-400 mb-2">
                finale extras
              </p>
              <p className="text-sm text-rose-700/95 mb-3">
                When you&apos;re ready, you can split this into sections,
                attach photos, and turn it into a little archive of your
                favorite us-moments.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  to="/gallery/you"
                  className="group relative overflow-hidden rounded-xl border border-rose-200/50 bg-rose-50/60 px-4 py-3 text-sm text-rose-800 hover:bg-rose-50/80 transition-colors duration-200"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 border border-rose-200/50 text-lg">
                      ✨
                    </div>
                    <div>
                      <p className="font-semibold text-rose-900 text-sm">
                        you (muse)
                      </p>
                      <p className="text-[11px] text-rose-700/95">
                        A little wall of her photos, or anything that feels like
                        her.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/gallery/us"
                  className="group relative overflow-hidden rounded-xl border border-rose-200/50 bg-white/70 px-4 py-3 text-sm text-rose-800 hover:bg-white/90 transition-colors duration-200"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 border border-rose-200/50 text-lg">
                      📸
                    </div>
                    <div>
                      <p className="font-semibold text-rose-900 text-sm">
                        our gallery
                      </p>
                      <p className="text-[11px] text-rose-700/95">
                        Your favorite pictures together, all in one soft place.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default DayDetailPage

