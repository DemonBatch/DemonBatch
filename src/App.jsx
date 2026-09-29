// src/App.jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

// Terapkan Lazy Loading pada semua halaman untuk Code Splitting
const Home = lazy(() => import('./pages/Home'));
const NezukoEdition = lazy(() => import('./pages/NezukoEdition'));
const Hashira = lazy(() => import('./pages/Hashira'));
const Detail = lazy(() => import('./pages/Detail'));

// Komponen Loading sederhana saat halaman sedang diunduh
const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center pt-32 pb-16">
    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-amber-500 selection:text-white">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nezuko" element={<NezukoEdition />} />
              <Route path="/hashira" element={<Hashira />} /> 
              <Route path="/anime/:id" element={<Detail />} />
            </Routes>
          </div>
        </Suspense>
        <footer className="bg-white py-8 px-6 text-center text-xs text-slate-400 border-t border-slate-100 mt-auto">
          <p>&copy; 2026 DemonBatch. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}