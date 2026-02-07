import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'

const sadStickers = [
  '/images/milk-mocha-sad/sad1.png',
  '/images/milk-mocha-sad/sad2.png',
  '/images/milk-mocha-sad/sad3.png',
  '/images/milk-mocha-sad/sad4.png',
  '/images/milk-mocha-sad/sad5.png',
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

  const currentSadSticker = useMemo(
    () => sadStickers[noClicks % sadStickers.length],
    [noClicks],
  )

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1)
    setNoPosition(getRandomPosition())
  }

  const handleYesClick = () => {
    // Confetti celebration!
    const duration = 3000
    const end = Date.now() + duration

    const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#ffe4e6']

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()

    // Navigate after a short delay to see confetti
    setTimeout(() => {
      navigate('/days')
    }, 500)
  }

  // Calculate No button scale based on clicks (shrinks as pressed more)
  const noButtonScale = Math.max(0.5, 1 - noClicks * 0.05)

  return (
    <div className="val-bg flex items-center justify-center px-4 pt-4 pb-10">
      <div className="relative max-w-3xl w-full">
        <div className="absolute -top-10 left-2 text-3xl sm:text-4xl opacity-70 animate-bounce">
          💖
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-200/50 px-6 py-7 sm:px-10 sm:py-9 relative">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex-1 space-y-4 sm:space-y-5">
              <h1
                style={{ fontFamily: '"Instrument Serif", serif' }}
                className="text-4xl sm:text-5xl md:text-6xl font-normal text-rose-900 leading-tight"
              >
                Will you be my
                <span className="block text-rose-500 italic">valentine?</span>
              </h1>

              <p className="text-sm sm:text-base text-rose-700/85 max-w-md leading-relaxed">
                No pressure. (umm i mean ofc babyy)
              </p>

              <div className="flex flex-wrap gap-3 pt-2 items-center">
                <button
                  type="button"
                  onClick={handleYesClick}
                  className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors duration-200 shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_25px_rgba(244,63,94,0.5)]"
                >
                  Yesss, obviously!!
                </button>

                <button
                  type="button"
                  onClick={handleNoClick}
                  style={{
                    transform: `scale(${noButtonScale})`,
                    transition: 'transform 0.2s ease-out',
                  }}
                  className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-white/90 px-5 py-2.5 text-sm font-medium text-rose-700 hover:bg-rose-50/90 transition-colors duration-150"
                >
                  No (for now??)
                </button>
              </div>
            </div>

            {/* Sad Milk and Mocha sticker display - replaces reaction log */}
            <div className="relative mt-5 sm:mt-0 sm:w-60 md:w-72">
              <div className="rounded-2xl bg-rose-50/60 border border-rose-200/40 px-4 py-5">
                <div className="flex flex-col items-center gap-3">
                  {noClicks > 0 ? (
                    <img
                      src={currentSadSticker}
                      alt="Sad Milk and Mocha"
                      className="w-32 h-32 sm:w-36 sm:h-36 object-contain transition-opacity duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center rounded-xl text-3xl ">
                      <img
                        src="/images/milk-mocha-sad/sad6.png"
                        alt="Sad Milk and Mocha"
                        className="w-32 h-32 sm:w-36 sm:h-36 object-contain transition-opacity duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                  <p className="text-xs text-center text-rose-400/80">
                    {noClicks === 0
                      ? 'Waiting for your answer...'
                      : `No pressed ${noClicks} time${noClicks === 1 ? '' : 's'}`}
                  </p>
                </div>
              </div>
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

        </div>
      </div>
    </div>
  )
}

export default LandingPage

