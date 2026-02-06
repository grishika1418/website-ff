import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ValentineDaysPage from './pages/ValentineDaysPage.jsx'
import DayDetailPage from './pages/DayDetailPage.jsx'
import GalleryMusePage from './pages/GalleryMusePage.jsx'
import GalleryUsPage from './pages/GalleryUsPage.jsx'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#fef9f7] relative text-[#381217] font-body">
      {/* Aurora Dream Corner Whispers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
          radial-gradient(ellipse 85% 65% at 8% 8%, rgba(213, 184, 248, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
        `,
        }}
      />

      <main className="relative z-10 px-4 pb-10 pt-2 sm:pt-4">
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
