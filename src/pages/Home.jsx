// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import AnimeCard from '../components/ui/AnimeCard';

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      setIsLoading(true);
      
      // Mengambil semua anime (diurutkan dari yang terbaru)
      const { data: latestData } = await supabase
        .from('animes')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (latestData) setAnimes(latestData);

      // Mengambil 4 anime terpopuler berdasarkan kolom views
      const { data: popularData } = await supabase
        .from('animes')
        .select('*')
        .order('views', { ascending: false })
        .limit(4);
        
      if (popularData) setPopularAnimes(popularData);
      
      setIsLoading(false);
    };

    fetchHomeData();
  }, []);

  // Filter HANYA berdasarkan pencarian judul
  const filteredAnimes = animes.filter((anime) => {
    return anime.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const scrollToDaftar = () => {
    document.getElementById('daftar-anime')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="px-6 max-w-7xl mx-auto w-full flex-grow mb-16 pt-2">
      
      {/* Banner Utama */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white mt-28 mb-12 smooth-shadow relative flex flex-col md:flex-row items-center md:items-start">
        <div className="max-w-xl relative z-10 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            DemonBatch Download Anime Paket Lengkap Tanpa Ribet
          </h2>
          <p className="text-emerald-50 text-sm md:text-base leading-relaxed mb-8">
            Nikmati koleksi anime batch pilihan dari resolusi 360p hingga 1080p lengkap dengan tautan Google Drive dan TeraBox tercepat.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button 
              onClick={scrollToDaftar}
              className="bg-white text-emerald-600 font-extrabold px-6 py-3.5 rounded-2xl text-sm flex items-center gap-2 smooth-shadow hover:bg-emerald-50 transition cursor-pointer"
            >
              <i className="fa-regular fa-circle-play text-emerald-500 text-lg"></i> Jelajahi Batch
            </button>
          </div>
        </div>

        <img 
          src="https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Tanziro.webp" 
          alt="Tanjiro" 
          className="relative md:absolute right-0 md:right-10 md:bottom-0 h-[280px] md:h-[480px] w-auto object-contain z-20 drop-shadow-2xl pointer-events-none"
        />
      </section>

      {/* Kontainer Pencarian */}
      <div id="daftar-anime" className="mb-8 bg-white p-4 rounded-3xl smooth-shadow border border-slate-100 scroll-mt-24">
         <div className="w-full flex items-center bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-100 focus-within:border-emerald-500 transition">
            <i className="fa-solid fa-magnifying-glass text-slate-400 mr-3"></i>
            <input 
              type="text" 
              placeholder="Cari judul anime batch..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-sm font-bold text-slate-700 placeholder-slate-400" 
            />
         </div>
      </div>

      {/* 1. SEKSI UPDATE TERBARU */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
         <div className="flex items-center gap-3">
           <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-500">
             <i className="fa-solid fa-clock text-sm"></i>
           </div>
           <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
             {searchTerm ? `Hasil Pencarian: "${searchTerm}"` : 'Update Batch Terbaru'}
           </h3>
         </div>
         <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl smooth-shadow">
           {filteredAnimes.length} Anime
         </span>
      </div>

      {isLoading ? (
        <div className="text-center py-12 font-bold text-slate-500">Memuat data anime...</div>
      ) : filteredAnimes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredAnimes.map(anime => (
            <AnimeCard key={anime.id} anime={anime} themeColor="emerald" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 mb-12">
          <i className="fa-solid fa-ghost text-4xl text-slate-300 mb-3"></i>
          <p className="text-slate-500 font-bold">Anime tidak ditemukan.</p>
        </div>
      )}

      {/* 2. SEKSI TERPOPULER BATCH ANIME */}
      {!searchTerm && popularAnimes.length > 0 && (
        <section className="pt-6 border-t border-slate-100 mt-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
             <div className="flex items-center gap-3">
               <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-md shadow-orange-200">
                 <i className="fa-solid fa-fire text-sm"></i>
               </div>
               <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                 Terpopuler Batch Anime
               </h3>
             </div>
             <button className="text-xs font-bold text-slate-500 hover:text-emerald-500 transition flex items-center gap-2 group cursor-pointer">
               Lihat Semua <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularAnimes.map(anime => (
              <AnimeCard key={`popular-${anime.id}`} anime={anime} themeColor="emerald" />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}