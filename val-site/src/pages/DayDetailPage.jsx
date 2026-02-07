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
      'Today is for roses— all the ways you quietly make my world feel softer.',
    content: [
      'Happy Rose Day bebuuuu. I just want to write about how i feel about you and how much you mean to me. Comparing you to a rose is silly i know because you are just more beautiful than a rose. But i wanted to start with this because you are the most beautiful thing in my life. ',
      'I just want you to be happy and i want to make you happy & just let you know that you are so special to me. You are very much adored just like how ppl look at a rose :P',
      'Anyways, moving forward- this whole thing is NOT serious!!!(or may be a lil bit serious hehehe)'
    ],
    images: ['/images/pics-days/rose.png'],
  },
  'propose-day': {
    title: 'Propose Day',
    emoji: '💍',
    dateLabel: `8 Feb ${year}`,
    unlockAt: new Date(year, 1, 8, 0, 0, 0).toISOString(),
    intro:
      'The day everything started getting in to my head.',
    content: [
      'Babyyyyyyy.... i LOVE YOUUUU',
      'I love you i love you il love you soooo much babyy. I never wanted to admit it but i am really scared, scared that i might loose you one day???',
      'I just love you bebuuuu... i feel like everything in my life started from the day i met you.',
      'Soooo... will you be my BABY?? baby hehehe'
    ],
    images: ['/images/pics-days/propose.png'],
  },
  'chocolate-day': {
    title: 'Chocolate Day',
    emoji: '🍫',
    dateLabel: `9 Feb ${year}`,
    unlockAt: new Date(year, 1, 9, 0, 0, 0).toISOString(),
    intro:
      'Today is for the sweetest person ever. Chocolate day!!!',
    content: [
      'You resemble chocolate. I mean in a way where people feel comfort over chocolate, you are just more than that to me. Everytime i come through a chocolate section in shop or when i see a dark chocolate in swiggy, it immediately reminds me of youuuu.',
      'You know how much i love sweet stuff? may be is it because you???? wahhhh i finally understood why i love them alot (chocolate=sweet, baby=sweet, me=loves sweet) '
    ],
    images: ['/images/pics-days/choco1.png'],
  },
  'teddy-day': {
    title: 'Teddy Day',
    emoji: '🧸',
    dateLabel: `10 Feb ${year}`,
    unlockAt: new Date(year, 1, 10, 0, 0, 0).toISOString(),
    intro:
      'A soft day!',
    content: [
      'Lets buy a teddyy(its already so long since we thought of doing it.)',
      'But for me, you are the most softest and cutest thing i have ever seen. Theres NO teddy to hug which is better than you. The warmth of your hug is just something else which can make time stop. ',
    ],
    images: ['/images/pics-days/teddy.png'],
  },
  'promise-day': {
    title: 'Promise Day',
    emoji: '🤞',
    dateLabel: `11 Feb ${year}`,
    unlockAt: new Date(year, 1, 11, 0, 0, 0).toISOString(),
    intro:
      'Promises don’t have to be huge or tiny.',
    content: [
      'Never really believed in promises but then i met you. I just want to promise you that i will always be there for you no matter what and i just want you to promise that anything happens, you are going to be strong as you always are.You can let situations destroy you or sustain you. But i just want you to know that things will get better and i will always be there for you no matter what.',
      'I promise to take up nd work on things you always say cuz i believe u know better about me than i do. '
    ],
    images: ['/images/pics-days/prom.png'],
  },
  'hug-day': {
    title: 'Hug Day',
    emoji: '🫂',
    dateLabel: `12 Feb ${year}`,
    unlockAt: new Date(year, 1, 12, 0, 0, 0).toISOString(),
    intro:
      'My safest place.',
    content: [
      'i dont knowwwwwwww what to write here. I just want to hug you so tight and never let you go.',
      'Again dont take me too seriously hehehe, but i love you love you sooo much babyyy',
      'Never knew i could be so easily have a physical touch connection with anyone, but then i met you. Dont get me wrong, i just never knew i could be comfortable with anyone this much (i am still trying to be better with you, than just clingily making you feel awkward.)'
    ],
    images: ['/images/pics-days/hug1.png'],
  },
  'kiss-day': {
    title: 'Kiss Day',
    emoji: '😘',
    dateLabel: `13 Feb ${year}`,
    unlockAt: new Date(year, 1, 13, 0, 0, 0).toISOString(),
    intro:
      'Hehehehheheehehhe',
    content: [
      'Cute bebuuu, Sorry for randomly kissing you soo many times.....  i think and will work to change into a better person (i will try). i dont even know why i do it..... bababbeyyyyyyyyy',
      'i miss you alot babyyy... every day, every hour and every minute.'
    ],
    images: ['/images/pics-days/kiss.png'],
  },
  'valentines-day': {
    title: "Valentine's Day",
    emoji: '💘',
    dateLabel: `14 Feb ${year}`,
    unlockAt: new Date(year, 1, 14, 0, 0, 0).toISOString(),
    intro:
      'Yayyy!! You answered my question as YES?? yyayaya ammooooo vooowh.',
    content: [
      'I just love you so much babyyy... i cant even express it in words. You are the most special person in my life and i will always love you no matter what.',
      'you are something so special to me and my heart, i would never have a person like you.'
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
                JUSt LIKE THAT
              </p>
              <p className="text-sm text-rose-700/95 mb-3">
                a little archive of you and us. (need unlimited space but for now this is it)
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <Link
                  to="/gallery/you"
                  className="group relative overflow-hidden rounded-xl border border-rose-200/50 bg-white/50 p-6 text-center hover:bg-white/80 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="font-display text-2xl text-rose-900 mb-1 group-hover:scale-105 transition-transform duration-300 ">
                      My Bebu
                    </h3>
                    <p className="text-[11px] uppercase tracking-widest text-rose-700/70 mb-4">
                      Just You
                    </p>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 border border-rose-100 text-rose-400 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/gallery/us"
                  className="group relative overflow-hidden rounded-xl border border-rose-200/50 bg-white/50 p-6 text-center hover:bg-white/80 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="font-display text-2xl text-rose-900 mb-1 group-hover:scale-105 transition-transform duration-300">
                      Us
                    </h3>
                    <p className="text-[11px] uppercase tracking-widest text-rose-700/70 mb-4">
                      Our Memories
                    </p>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 border border-rose-100 text-rose-400 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <p className="font-display italic text-sm text-rose-700/95 mt-1 text-center col-span-full">
                  A little tip - Drag the gallery, tap and enjoy the pics beb!
                </p>

              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default DayDetailPage

