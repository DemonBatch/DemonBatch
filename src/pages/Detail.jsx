// src/pages/Detail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../services/supabase';

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [downloads, setDownloads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      setIsLoading(true);
      
      // 1. Ambil detail Anime dari tabel animes
      const { data: animeData } = await supabase
        .from('animes')
        .select('*')
        .eq('id', id)
        .single();

      if (animeData) {
        setDetail(animeData);
        
        // Menambahkan jumlah penayangan (views) otomatis
        await supabase
          .from('animes')
          .update({ views: (animeData.views || 0) + 1 })
          .eq('id', id);
      }

      // 2. Ambil data link download dari tabel downloads
      const { data: downloadData } = await supabase
        .from('downloads')
        .select('*')
        .eq('anime_id', id)
        .order('quality', { ascending: false }); // Urutkan resolusi 1080p, 720p, dst

      if (downloadData) {
        setDownloads(downloadData);
      }
      
      setIsLoading(false);
    };

    fetchAnimeDetail();
  }, [id]);

  if (isLoading || !detail) return <div className="p-8 mt-32 text-center font-bold text-slate-500">Memuat detail download...</div>;

  return (
    <main className="px-6 max-w-7xl mx-auto w-full flex-grow mb-16 pt-2">
      
      {/* Header Banner Detail (Zenitsu) */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl px-8 py-12 md:px-12 md:py-16 text-white mb-8 mt-24 smooth-shadow relative flex flex-col md:flex-row justify-between items-center md:items-start min-h-[300px]">
        
        <div className="max-w-xl relative z-10 text-center md:text-left mb-8 md:mb-0">
          <span className="bg-white/20 backdrop-blur-md text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl inline-block mb-4">
            Zenitsu Lightning Edition
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pusat Download Detail & Link Batch Terlengkap
          </h2>
          <p className="text-amber-50 text-sm md:text-base leading-relaxed">
            Dapatkan tautan unduhan berkecepatan tinggi dengan berbagai pilihan
            resolusi (360p, 480p, 720p, 1080p) serta mirror Google Drive dan TeraBox.
          </p>
        </div>

        <img 
          src="https://simp6.cuckcapital.cr/images4/6177c7ab-ff68-4293-bd33-63812805e4ba.webp" 
          alt="Zenitsu" 
          className="relative md:absolute right-0 md:right-16 md:-bottom-6 h-[250px] md:h-[420px] w-auto object-contain z-20 drop-shadow-2xl pointer-events-none"
        />
      </section>

      {/* Breadcrumb Navigasi */}
      <nav className="flex text-slate-400 text-xs font-bold mb-6 gap-2 items-center">
        <Link to="/" className="hover:text-amber-500 transition"><i className="fa-solid fa-home"></i> Home</Link>
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
        <span className="text-slate-700">{detail.title}</span>
      </nav>

      {/* Detail Anime Info Box */}
      <div className="bg-white rounded-3xl p-6 md:p-8 smooth-shadow mb-8 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* Kolom Kiri: Poster */}
        <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
          {detail.image ? (
            <img src={detail.image} alt={detail.title} className="w-full rounded-2xl aspect-[3/4] object-cover smooth-shadow" />
          ) : (
            <div className="bg-slate-800 text-white rounded-2xl aspect-[3/4] flex items-center justify-center font-bold smooth-shadow text-lg">
              No Poster
            </div>
          )}
        </div>

        <div className="w-full flex-1">
          <div className="flex gap-4 items-center mb-4 text-[10px] font-extrabold">
            <span className="text-amber-500 uppercase tracking-wider">COMPLETED BATCH</span>
            <span className="text-amber-500"><i className="fa-solid fa-star"></i> {detail.rating}/5.0 Rating</span>
            <span className="text-slate-400"><i className="fa-solid fa-eye"></i> {detail.views} Views</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">{detail.title}</h3>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">{detail.synopsis}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase"><i className="fa-solid fa-list-ul mr-1"></i> Total Episode</p>
              <p className="text-sm font-extrabold text-slate-800">{detail.episodes}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase"><i className="fa-solid fa-file-video mr-1"></i> Format File</p>
              <p className="text-sm font-extrabold text-slate-800">{detail.format}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase"><i className="fa-solid fa-closed-captioning mr-1"></i> Subtitle</p>
              <p className="text-sm font-extrabold text-slate-800">{detail.subtitle}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase"><i className="fa-solid fa-hard-drive mr-1"></i> Ukuran Total</p>
              <p className="text-sm font-extrabold text-slate-800">{detail.total_size}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Link Download */}
      <div className="bg-white rounded-3xl p-6 md:p-8 smooth-shadow mb-8 relative z-10">
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100">
          <h4 className="font-extrabold text-slate-800 flex items-center gap-2">
            <i className="fa-solid fa-cloud-arrow-down text-amber-500 text-xl"></i> Tautan Download Batch
          </h4>
          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
            <i className="fa-regular fa-circle-check"></i> Link Tested & Safe
          </span>
        </div>

        <div className="space-y-4">
          {downloads.length > 0 ? (
             downloads.map((item) => {
               let badgeColor = "text-slate-600 bg-slate-100";
               if (item.quality.includes("1080p")) badgeColor = "text-rose-500 bg-rose-50";
               else if (item.quality.includes("720p")) badgeColor = "text-blue-500 bg-blue-50";

               return (
                 <div key={item.id} className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 transition">
                   <div className="flex items-center gap-4 w-full md:w-auto">
                     <span className={`font-black px-4 py-2.5 rounded-xl text-sm min-w-[80px] text-center ${badgeColor}`}>
                       {item.quality}
                     </span>
                     <div>
                       <p className="font-extrabold text-slate-800 text-sm">{item.label}</p>
                       <p className="text-xs text-slate-500 mt-0.5"><i className="fa-regular fa-file-zipper"></i> {item.size} &bull; Format {detail.format}</p>
                     </div>
                   </div>

                   <div className="flex flex-wrap items-center gap-6 w-full md:w-auto justify-start md:justify-end px-2">
                     {item.link_gdrive && (
                       <a href={item.link_gdrive} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-600 hover:text-amber-500 transition flex items-center gap-1.5">
                         <i className="fa-brands fa-google-drive text-sm"></i> GDrive
                       </a>
                     )}
                     {item.link_terabox && (
                       <a href={item.link_terabox} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-600 hover:text-blue-500 transition flex items-center gap-1.5">
                         <i className="fa-solid fa-cloud text-sm"></i> TeraBox
                       </a>
                     )}
                   </div>
                 </div>
               );
             })
          ) : (
             <div className="text-center py-6">
                <p className="text-sm font-bold text-slate-500">Link download belum tersedia.</p>
             </div>
          )}
        </div>
      </div>
      
    </main>
  );
}