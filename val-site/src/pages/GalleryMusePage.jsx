import { Link } from 'react-router-dom'
import DomeGallery from '../components/DomeGallery'

// Add your own images here! Use paths like '/images/gallery/her1.png' or external URLs
const museImages = [
  { src: '/images/gallery/muse1.jpeg', alt: 'Photo 1' },
  { src: '/images/gallery/muse2.jpeg', alt: 'Photo 2' },
  { src: '/images/gallery/muse3.jpeg', alt: 'Photo 3' },
  { src: '/images/gallery/muse4.jpeg', alt: 'Photo 4' },
  { src: '/images/gallery/muse5.jpeg', alt: 'Photo 5' },
  { src: '/images/gallery/muse6.jpeg', alt: 'Photo 6' },
  { src: '/images/gallery/muse7.jpeg', alt: 'Photo 7' },
  { src: '/images/gallery/muse8.jpeg', alt: 'Photo 8' },
  { src: '/images/gallery/muse9.jpeg', alt: 'Photo 9' },
  { src: '/images/gallery/muse10.jpeg', alt: 'Photo 10' },
  { src: '/images/gallery/muse11.jpeg', alt: 'Photo 11' },
  { src: '/images/gallery/muse12.jpeg', alt: 'Photo 12' },
  { src: '/images/gallery/muse13.jpeg', alt: 'Photo 13' },
  { src: '/images/gallery/muse14.jpeg', alt: 'Photo 14' },
  { src: '/images/gallery/muse15.jpeg', alt: 'Photo 15' },
  { src: '/images/gallery/muse16.jpeg', alt: 'Photo 16' },
  { src: '/images/gallery/muse17.jpeg', alt: 'Photo 17' },
  { src: '/images/gallery/muse18.jpeg', alt: 'Photo 18' },
  { src: '/images/gallery/muse19.jpeg', alt: 'Photo 19' },
  { src: '/images/gallery/muse20.jpeg', alt: 'Photo 20' },
  // Add more images as needed...
]

function GalleryMusePage() {
  return (
    <div className="max-w-6xl mx-auto mt-6 space-y-5 px-4">
      <Link
        to="/days/valentines-day"
        className="inline-flex items-center gap-2 mb-4 text-sm text-rose-600 hover:text-rose-800 transition-colors"
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
      <header className="space-y-2 mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-rose-400">
          you (my muse)
        </p>
        <h1 className="font-display text-2xl sm:text-3xl text-rose-900">
          A tiny gallery of you
        </h1>
        <p className="text-sm sm:text-base text-rose-700/95 max-w-2xl">
          Some pictures of you which i love.
        </p>
      </header>

      {/* Mobile version */}
      <div className="block sm:hidden relative w-full h-[500px] rounded-2xl overflow-hidden bg-rose-50/30 border border-rose-100">
        <DomeGallery
          images={museImages}
          fit={0.85}
          minRadius={380}
          maxVerticalRotationDeg={15}
          segments={18}
          dragDampening={2}
          grayscale={false}
          openedImageWidth="85vw"
          openedImageHeight="85vw"
          padFactor={0.08}
        />
      </div>

      {/* Desktop version */}
      <div className="hidden sm:block relative w-full h-[650px] rounded-2xl overflow-hidden bg-rose-50/30 border border-rose-100">
        <DomeGallery
          images={museImages}
          fit={0.75}
          minRadius={550}
          maxVerticalRotationDeg={20}
          segments={32}
          dragDampening={2}
          grayscale={false}
          openedImageWidth="450px"
          openedImageHeight="450px"
          padFactor={0.15}
        />
      </div>
    </div>
  )
}

export default GalleryMusePage

