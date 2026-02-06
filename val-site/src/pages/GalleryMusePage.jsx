const placeholderPhotos = [
  {
    id: 1,
    label: 'soft smile',
    note: 'Replace this with a photo where she looks unintentionally perfect.',
  },
  {
    id: 2,
    label: 'caught off-guard',
    note: 'A candid screenshot or a frame from a call you love.',
  },
  {
    id: 3,
    label: 'favorite outfit',
    note: 'The look that made you think “wow, I am so gone.”',
  },
  {
    id: 4,
    label: 'comfort picture',
    note: 'The one you open on bad days because it instantly helps.',
  },
  {
    id: 5,
    label: 'glow moment',
    note: 'Any picture where the lighting accidentally matched how you see her.',
  },
  {
    id: 6,
    label: 'tiny detail',
    note: 'Hands, hair, shoes, jewelry—little things you notice more than she thinks.',
  },
]

function GalleryMusePage() {
  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-5">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-rose-400">
          you (muse)
        </p>
        <h1 className="font-display text-2xl sm:text-3xl text-rose-900">
          A tiny gallery of you
        </h1>
        <p className="text-sm sm:text-base text-rose-700/95 max-w-2xl">
          Later, you can swap all of these placeholders for real photos—screens,
          selfies, anything that feels unmistakably like her. For now, use the
          captions as a guide for the kind of moments you want to collect.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {placeholderPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-2xl border border-rose-200/50 bg-white/70 transition-colors duration-200 hover:bg-white/80"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-rose-100/90 via-rose-50/90 to-amber-50/90 flex items-center justify-center text-4xl">
              <span className="select-none">✨</span>
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
        When you&apos;re ready, you can replace each card with an actual image
        component pointing to your own photos. Think of this page as a layout
        template and emotional checklist.
      </p>
    </div>
  )
}

export default GalleryMusePage

