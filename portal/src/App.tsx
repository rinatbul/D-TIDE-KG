import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Consortium } from './pages/Consortium';
import { WorkPackages } from './pages/WorkPackages';
import { WorkPackageDetail } from './pages/WorkPackageDetail';
import { Documentation } from './pages/Documentation';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consortium" element={<Consortium />} />
        <Route path="/work-packages" element={<WorkPackages />} />
        <Route path="/work-packages/:id" element={<WorkPackageDetail />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
