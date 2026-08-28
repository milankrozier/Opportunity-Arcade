import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { LightboxProvider } from './context/LightboxContext';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import Tools from './pages/Tools';
import Organizations from './pages/Organizations';
import Spotlights from './pages/Spotlights';
import About from './pages/About';
import Submit from './pages/Submit';
import Support from './pages/Support';
import ClawMachine from './pages/ClawMachine';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LightboxProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ScrollToTop />
        <NavBar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/spotlights" element={<Spotlights />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/support" element={<Support />} />
            <Route path="/arcade" element={<ClawMachine />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LightboxProvider>
  );
}
