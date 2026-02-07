import { Link } from 'react-router-dom'
import DomeGallery from '../components/DomeGallery'

// Add your own images here! Use paths like '/images/gallery/us1.png' or external URLs
const usImages = [
  { src: '/images/gallery/us1.jpeg', alt: 'Us together 1' },
  { src: '/images/gallery/us2.jpeg', alt: 'Us together 2' },
  { src: '/images/gallery/us3.jpeg', alt: 'Us together 3' },
  { src: '/images/gallery/us4.jpeg', alt: 'Us together 4' },
  { src: '/images/gallery/us5.jpeg', alt: 'Us together 5' },
  { src: '/images/gallery/us6.jpeg', alt: 'Us together 6' },
  { src: '/images/gallery/us7.jpeg', alt: 'Us together 7' },
  { src: '/images/gallery/us8.jpeg', alt: 'Us together 8' },
  { src: '/images/gallery/us9.jpeg', alt: 'Us together 9' },
  { src: '/images/gallery/us10.jpeg', alt: 'Us together 10' },
  { src: '/images/gallery/us11.jpeg', alt: 'Us together 11' },
  { src: '/images/gallery/us12.jpeg', alt: 'Us together 12' },
  { src: '/images/gallery/us13.jpeg', alt: 'Us together 13' },
  // Add more images as needed...
]

function GalleryUsPage() {
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
          our gallery
        </p>
        <h1 className="font-display text-2xl sm:text-3xl text-rose-900">
          A gallery of us
        </h1>
        <p className="text-sm sm:text-base text-rose-700/95 max-w-2xl">
          Random pictures of us.
        </p>
      </header>

      {/* Mobile version */}
      <div className="block sm:hidden relative w-full h-[500px] rounded-2xl overflow-hidden bg-white/40 border border-rose-100">
        <DomeGallery
          images={usImages}
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
      <div className="hidden sm:block relative w-full h-[650px] rounded-2xl overflow-hidden bg-white/40 border border-rose-100">
        <DomeGallery
          images={usImages}
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

export default GalleryUsPage

