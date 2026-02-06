import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ValentineDaysPage from './pages/ValentineDaysPage.jsx'
import DayDetailPage from './pages/DayDetailPage.jsx'
import GalleryMusePage from './pages/GalleryMusePage.jsx'
import GalleryUsPage from './pages/GalleryUsPage.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#fef9f7] text-[#381217] font-body">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)
          `,
        }}
      />

      <header className="px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-sm font-medium text-rose-700">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-lg">
            💌
          </span>
          <span className="tracking-wide uppercase text-xs text-rose-600/90">
            for my valentine
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-xs sm:text-sm text-rose-700/90">
          <Link to="/days" className="hover:text-rose-900 transition-colors">
            7 days of love
          </Link>
          <Link to="/gallery/us" className="hover:text-rose-900 transition-colors">
            our gallery
          </Link>
        </nav>
      </header>

      <main className="px-4 pb-10 pt-2 sm:pt-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/days" element={<ValentineDaysPage />} />
          <Route path="/days/:dayId" element={<DayDetailPage />} />
          <Route path="/gallery/you" element={<GalleryMusePage />} />
          <Route path="/gallery/us" element={<GalleryUsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
