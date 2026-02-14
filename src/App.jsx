import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-load pages the user may not visit — splits them into separate chunks
const Publications = lazy(() => import('./pages/Publications'));
const Teaching = lazy(() => import('./pages/Teaching'));
const JoinUs = lazy(() => import('./pages/JoinUs'));
const Projects = lazy(() => import('./pages/Projects'));
const Seminar = lazy(() => import('./pages/Seminar'));
const Theses = lazy(() => import('./pages/Theses'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={
        <section className="home-section">
          <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Loading...</p>
          </div>
        </section>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/theses" element={<Theses />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
