import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { HeroSection } from './pages/HeroSection';
import { About } from './pages/About';
import { Consortium } from './pages/Consortium';
import { WorkPackages } from './pages/WorkPackages';
import { Publications } from './pages/Publications';
import { News } from './pages/News';

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen bg-white flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/hero-section" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/consortium" element={<Consortium />} />
              <Route path="/work-packages" element={<WorkPackages />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
