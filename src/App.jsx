// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import NezukoEdition from './pages/NezukoEdition';
import Hashira from './pages/Hashira'; 
import Detail from './pages/Detail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-amber-500 selection:text-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nezuko" element={<NezukoEdition />} />
            <Route path="/hashira" element={<Hashira />} /> 
            <Route path="/anime/:id" element={<Detail />} />
          </Routes>
        </div>
        <footer className="bg-white py-8 px-6 text-center text-xs text-slate-400 border-t border-slate-100 mt-auto">
          <p>&copy; 2026 DemonBatch. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}