import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Consortium } from './pages/Consortium';
import { WorkPackages } from './pages/WorkPackages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consortium" element={<Consortium />} />
        <Route path="/work-packages" element={<WorkPackages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
