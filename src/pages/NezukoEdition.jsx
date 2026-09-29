// src/pages/NezukoEdition.jsx
import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import AnimeCard from '../components/ui/AnimeCard';

export default function NezukoEdition() {
  const [animes, setAnimes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNezukoAnimes = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from('animes')
        .select('*')
        .eq('is_nezuko_choice', true) // Filter khusus Nezuko Edition
        .order('created_at', { ascending: false });
        
      if (data) setAnimes(data);
      setIsLoading(false);
    };

    fetchNezukoAnimes();
  }, []);

  // Kategori dinamis menghitung data yang ada di database
  const categories = [
    { 
      name: 'Semua', 
      imgSrc: 'https://simp6.cuckcapital.cr/images4/b6ccf7ef-a5c4-4b16-a65f-38ba4e5f7ee4.webp',
      desc: 'Semua koleksi pilihan Nezuko', 
      count: animes.length 
    },
    { 
      name: 'Action & Fantasy', 
      imgSrc: 'https://simp6.cuckcapital.cr/images4/38b51dfc-3764-45ac-bfcb-0f1a50a847d4.webp',
      desc: 'Pertarungan seru dunia fantasi', 
      count: animes.filter(a => a.category?.includes('Action') || a.category?.includes('Fantasy')).length 
    },
    { 
      name: 'Romance', 
      imgSrc: 'https://simp6.cuckcapital.cr/images4/381a4a4b-b22a-4b5a-81ed-4c0108ff95f4.webp', 
      desc: 'Kisah cinta romantis & heartwarming', 
      count: animes.filter(a => a.category?.includes('Romance')).length
    },
    { 
      name: 'Slice of Life', 
      imgSrc: 'https://simp6.cuckcapital.cr/images4/fba08583-c3b7-403f-a854-777d1791d06d.webp',
      desc: 'Keseharian santai dan menghibur', 
      count: animes.filter(a => a.category?.includes('Slice of Life')).length
    }
  ];

  const scrollToDaftar = () => {
    document.getElementById('daftar-anime-nezuko')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredAnimes = selectedCategory === 'Semua' 
    ? animes 
    : animes.filter(anime => anime.category?.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]));

  return (
    <main className="px-6 max-w-7xl mx-auto w-full flex-grow mb-16 pt-2">
      
      <section className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white mt-28 mb-12 smooth-shadow relative flex flex-col md:flex-row justify-between items-center md:items-start min-h-[300px]">
        
        <div className="max-w-xl relative z-30 text-center md:text-left mb-8 md:mb-0">
          <span className="bg-white/20 backdrop-blur-md text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl inline-block mb-4 shadow-sm">
            Nezuko Kamado Special Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Kategori Khusus Anime Batch Pilihan Nezuko
          </h2>
          <p className="text-pink-50 text-sm md:text-base leading-relaxed mb-8">
            Temukan arsip batch anime super lengkap bertema fantasi, petualangan, 
            dan aksi terbaik dengan tautan unduhan super ngebut tanpa iklan mengganggu.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button 
              onClick={scrollToDaftar}
              className="cursor-pointer bg-white text-pink-600 font-extrabold px-6 py-3.5 rounded-2xl text-sm flex items-center gap-2 hover:bg-pink-50 transition smooth-shadow"
            >
              <i className="fa-solid fa-circle-play text-pink-500 text-lg"></i> Jelajahi Kategori
            </button>
          </div>
        </div>

        <img 
          src="https://simp6.cuckcapital.cr/images4/91bbb8e6-19c7-4212-b0c3-015bd053e7f4.webp" 
          alt="Nezuko" 
          className="relative md:absolute right-0 md:right-10 md:bottom-0 h-[280px] md:h-[480px] w-auto object-contain z-20 drop-shadow-2xl pointer-events-none"
        />
      </section>

      <div id="daftar-anime-nezuko" className="scroll-mt-28 mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Pilih Kategori Pilihan Nezuko</h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Klik salah satu kategori di bawah untuk memfilter daftar anime</p>
          </div>
          <span className="text-xs font-bold text-pink-600 bg-pink-50 border border-pink-100 px-4 py-2 rounded-xl smooth-shadow">
            Kategori Aktif: {selectedCategory}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <div
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border smooth-shadow flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white border-transparent shadow-lg scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-100 hover:border-pink-200 hover:bg-pink-50/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  {cat.imgSrc && (
                    <img 
                      src={cat.imgSrc} 
                      alt={`${cat.name} icon`} 
                      className="h-20 w-auto object-contain drop-shadow-xl -ml-2 -mt-2 pointer-events-none" 
                    />
                  )}
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {cat.count} Batch
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base mb-1">{cat.name}</h4>
                  <p className={`text-xs leading-relaxed ${isActive ? 'text-pink-100' : 'text-slate-500'}`}>
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-extrabold text-slate-900">
          Daftar Anime: {selectedCategory}
        </h3>
        <span className="text-xs font-bold text-slate-500 bg-white border border-slate-100 px-4 py-2 rounded-xl smooth-shadow">
          Menampilkan {filteredAnimes.length} Anime
        </span>
      </div>

      {isLoading ? (
        <div className="text-center py-12 font-bold text-slate-500">Memuat data kategori...</div>
      ) : filteredAnimes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAnimes.map(anime => (
            <AnimeCard key={anime.id} anime={anime} themeColor="pink" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 smooth-shadow flex flex-col items-center justify-center">
          <img 
            src="https://simp6.cuckcapital.cr/images4/49b01bb5-a866-4969-a3a8-4546fb31bf5a.webp" 
            alt="Anime Tidak Ditemukan" 
            className="w-28 h-28 object-contain mb-4 drop-shadow-lg pointer-events-none"
          />
          <p className="text-slate-500 font-bold">Belum ada anime untuk kategori ini.</p>
        </div>
      )}
      
    </main>
  );
}