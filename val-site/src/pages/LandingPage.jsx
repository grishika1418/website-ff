import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cuteImages = [
  {
    emoji: '🧸',
    caption: 'Wait—look how soft this bear is.',
  },
  {
    emoji: '🐰',
    caption: 'What if the bunny gets sad?',
  },
  {
    emoji: '🌷',
    caption: 'But the flowers already picked you.',
  },
  {
    emoji: '🍓',
    caption: 'Strawberries say you’re the sweetest.',
  },
  {
    emoji: '💌',
    caption: 'The love letter already has your name.',
  },
]

function getRandomPosition() {
  const top = 30 + Math.random() * 40
  const left = 10 + Math.random() * 80
  return { top, left }
}

function LandingPage() {
  const navigate = useNavigate()
  const [noClicks, setNoClicks] = useState(0)
  const [noPosition, setNoPosition] = useState(() => getRandomPosition())

  const currentImage = useMemo(
    () => cuteImages[noClicks % cuteImages.length],
    [noClicks],
  )

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1)
    setNoPosition(getRandomPosition())
  }

  const handleYesClick = () => {
    navigate('/days')
  }

  return (
    <div className="val-bg flex items-center justify-center px-4 pt-4 pb-10">
      <div className="relative max-w-3xl w-full">
        <div className="absolute -top-10 left-2 text-3xl sm:text-4xl opacity-70 animate-bounce">
          💖
        </div>
        <div className="absolute -bottom-8 right-4 text-2xl sm:text-3xl opacity-70">
          ✨
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur-md shadow-[0_18px_60px_rgba(148,27,56,0.20)] border border-rose-100 px-6 py-7 sm:px-10 sm:py-9 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[radial-gradient(circle_at_10%_20%,rgba(255,160,146,0.26),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(255,217,199,0.6),transparent_55%)]" />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex-1 space-y-3 sm:space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-rose-500">
                soft launch
                <span className="text-[10px]">•</span>
                <span>valentine&apos;s edition</span>
              </p>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-rose-900 leading-tight">
                Will you be my
                <span className="block text-rose-500">valentine this year?</span>
              </h1>

              <p className="text-sm sm:text-base text-rose-700/90 max-w-md">
                If you say no, this page is fully prepared to get increasingly
                dramatic and unbearably cute until you change your mind. No
                pressure. (Lots of pressure.)
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleYesClick}
                  className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-rose-50 shadow-[0_14px_40px_rgba(190,24,93,0.55)] hover:bg-rose-600 hover:shadow-[0_18px_55px_rgba(190,24,93,0.7)] transition-all duration-200"
                >
                  Yes, obviously
                  <span>💘</span>
                </button>

                <button
                  type="button"
                  onClick={handleNoClick}
                  className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-rose-700 shadow-sm hover:bg-rose-50/80 transition-all duration-150"
                >
                  No (for now)
                </button>
              </div>
            </div>

            <div className="relative mt-5 sm:mt-0 sm:w-60 md:w-72">
              <div className="relative rounded-3xl bg-rose-50/80 border border-rose-100 px-4 py-5 shadow-[0_12px_35px_rgba(190,24,93,0.22)]">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-rose-400">
                    reaction log
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-medium text-rose-500 border border-rose-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                    live
                  </span>
                </div>

                <div className="mt-2 flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-3xl">
                    {currentImage.emoji}
                  </div>
                  <p className="text-xs text-center text-rose-700/95">
                    {currentImage.caption}
                  </p>
                  <p className="mt-1 text-[11px] text-rose-400">
                    No pressed{' '}
                    <span className="font-semibold text-rose-500">
                      {noClicks}
                    </span>{' '}
                    time{noClicks === 1 ? '' : 's'} so far.
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-5 -bottom-4 h-16 w-16 rounded-2xl bg-rose-100/80 blur-sm" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-10 w-10 rounded-full bg-rose-200/80 blur-md" />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute"
          style={{
            top: `${noPosition.top}%`,
            left: `${noPosition.left}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="rounded-full bg-white/80 border border-rose-100 px-4 py-1 text-[11px] shadow-sm text-rose-500">
            She keeps trying to say no but the universe already said yes.
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

