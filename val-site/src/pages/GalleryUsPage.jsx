const placeholderUsPhotos = [
  {
    id: 1,
    label: 'first-ish',
    note: 'The earliest photo where it felt like something was starting.',
  },
  {
    id: 2,
    label: 'loud laugh',
    note: 'A picture that almost has sound because of how hard you were laughing.',
  },
  {
    id: 3,
    label: 'quiet moment',
    note: 'A soft frame—train rides, calls, late-night screenshares.',
  },
  {
    id: 4,
    label: 'somewhere new',
    note: 'A day you tried something different together.',
  },
  {
    id: 5,
    label: 'accidental favorite',
    note: 'The picture that wasn’t posed but somehow became the reference image.',
  },
  {
    id: 6,
    label: 'future blank',
    note: 'Leave one spot empty on purpose—for a photo you haven’t taken yet.',
  },
]

function GalleryUsPage() {
  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-5">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-rose-400">
          our gallery
        </p>
        <h1 className="font-display text-2xl sm:text-3xl text-rose-900">
          Little snapshots of us
        </h1>
        <p className="text-sm sm:text-base text-rose-700/95 max-w-2xl">
          Think of this as a storyboard of your relationship—tiny frames that
          tell the story better than any long explanation ever could.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {placeholderUsPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-2xl border border-rose-200/50 bg-white/70 transition-colors duration-200 hover:bg-white/80"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-rose-100/90 via-rose-50/90 to-sky-50/90 flex items-center justify-center text-4xl">
              <span className="select-none">📸</span>
            </div>
            <div className="px-3.5 py-3 space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                {photo.label}
              </p>
              <p className="text-xs text-rose-700/95 leading-relaxed">
                {photo.note}
              </p>
            </div>
          </div>
        ))}
      </section>

      <p className="text-[11px] text-rose-500 max-w-xl">
        Later, swap each placeholder for your real photos (local images or
        links). You can also add dates or tiny captions under each card to turn
        this into a proper timeline.
      </p>
    </div>
  )
}

export default GalleryUsPage

