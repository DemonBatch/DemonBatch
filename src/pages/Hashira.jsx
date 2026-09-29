// src/pages/Hashira.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hashira() {
  const [activePanel, setActivePanel] = useState(0);

  const hashiras = [
    {
      id: 1,
      name: 'Kyojuro Rengoku',
      element: 'Flame Hashira (Pilar Api)',
      desc: 'Memiliki semangat membara dan rasa keadilan yang tak tergoyahkan. Teknik Pernapasan Apinya sangat destruktif. Ia rela mengorbankan nyawa demi melindungi siapapun di sekitarnya.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Rengoku.webp',
      color: 'from-orange-400 to-red-500',
      accentText: 'text-orange-600'
    },
    {
      id: 2,
      name: 'Giyu Tomioka',
      element: 'Water Hashira (Pilar Air)',
      desc: 'Pendekar pedang yang dingin dan tenang. Pencipta teknik ke-11 Pernapasan Air: Lull (Ketenangan). Di balik sifat datarnya, ia sangat peduli pada rekan-rekannya.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Gyu.webp',
      color: 'from-blue-400 to-cyan-600',
      accentText: 'text-blue-600'
    },
    {
      id: 3,
      name: 'Shinobu Kocho',
      element: 'Insect Hashira (Pilar Serangga)',
      desc: 'Selalu tersenyum meski menyimpan amarah mendalam terhadap iblis. Mengandalkan kelincahan dan racun bunga Wisteria mematikan untuk membunuh iblis tanpa memenggal lehernya.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Sinobu%20Koco.webp',
      color: 'from-purple-400 to-fuchsia-500',
      accentText: 'text-purple-600'
    },
    {
      id: 4,
      name: 'Obanai Iguro',
      element: 'Serpent Hashira (Pilar Ular)',
      desc: 'Sinis, ketat pada aturan, dan memiliki gaya berpedang meliuk-liuk yang mustahil ditebak. Ia bertarung ditemani ular putih peliharaannya, Kaburamaru.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Iguro.webp',
      color: 'from-slate-500 to-indigo-600',
      accentText: 'text-indigo-600'
    },
    {
      id: 5,
      name: 'Sanemi Shinazugawa',
      element: 'Wind Hashira (Pilar Angin)',
      desc: 'Sangat agresif dan dipenuhi bekas luka. Darah langkanya (Marechi) dapat memabukkan iblis. Ia menyerang dengan kebrutalan dan kecepatan layaknya badai puting beliung.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Sanemi.webp',
      color: 'from-emerald-400 to-teal-600',
      accentText: 'text-emerald-600'
    },
    {
      id: 6,
      name: 'Muichiro Tokito',
      element: 'Mist Hashira (Pilar Kabut)',
      desc: 'Prodigi muda yang pelupa namun memiliki bakat tempur mengerikan. Ketampanan dan sikap acuhnya menyembunyikan fakta bahwa ia adalah keturunan langsung pengguna pernapasan pertama.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Tokito%20Muichiro.webp',
      color: 'from-teal-300 to-cyan-500',
      accentText: 'text-teal-600'
    },
    {
      id: 7,
      name: 'Mitsuri Kanroji',
      element: 'Love Hashira (Pilar Cinta)',
      desc: 'Gadis ceria dengan kepadatan otot 8 kali lipat manusia normal. Ia menggunakan pedang khusus yang sangat lentur layaknya cambuk, menggabungkan kekuatan brutal dengan keanggunan.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Kanroji%20Mitsuri%20.webp',
      color: 'from-pink-400 to-rose-500',
      accentText: 'text-pink-600'
    },
    {
      id: 8,
      name: 'Tengen Uzui',
      element: 'Sound Hashira (Pilar Suara)',
      desc: 'Mantan shinobi yang menjunjung tinggi ke-flamboyan-an. Bertarung menggunakan pedang ganda raksasa dan bom peledak, dengan pendengaran luar biasa untuk membaca ritme musuh.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Ujui%20Tengen.webp',
      color: 'from-yellow-400 to-amber-500',
      accentText: 'text-yellow-600'
    },
    {
      id: 9,
      name: 'Gyomei Himejima',
      element: 'Stone Hashira (Pilar Batu)',
      desc: 'Hashira terkuat di Pasukan Pembasmi Iblis. Meski buta dan memiliki hati yang lembut, kekuatan fisiknya tak tertandingi. Ia menggunakan kapak dan cambuk berduri raksasa.',
      imgSrc: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Karakter/Himejima%20Gyomei%20.webp',
      color: 'from-stone-400 to-stone-600',
      accentText: 'text-stone-600'
    }
  ];

  return (
    <main className="px-6 max-w-7xl mx-auto w-full flex-grow mb-16 pt-2">
      
      {/* Title Section */}
      <div className="mt-28 mb-10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <nav className="flex justify-center lg:justify-start text-slate-500 text-xs font-bold mb-4 gap-2 items-center uppercase tracking-widest">
            <Link to="/" className="hover:text-emerald-500 transition">Home</Link>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="text-slate-800">The Hashira</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Demon Slayer <span className="text-emerald-500">Hashira</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-sm md:text-base leading-relaxed">
            Mengenal lebih dekat kesembilan pendekar pedang terkuat dalam Pasukan Pembasmi Iblis. 
            Mereka adalah pilar harapan terakhir umat manusia dalam pertempuran abadi melawan Kibutsuji Muzan.
          </p>
        </div>
        
        <div className="hidden lg:flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-2xl smooth-shadow">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Elite Vanguard</span>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="w-full flex flex-col lg:flex-row h-[1200px] lg:h-[750px] gap-2 md:gap-3 rounded-3xl p-2 md:p-3 bg-white border border-slate-100 smooth-shadow">
        {hashiras.map((hashira, index) => {
          const isActive = activePanel === index;

          return (
            <div
              key={hashira.id}
              onClick={() => setActivePanel(index)}
              onMouseEnter={() => setActivePanel(index)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden transition-[flex-grow,background-color,border-color,box-shadow] duration-500 ease-out transform-gpu group
                ${isActive 
                  ? 'flex-[4] lg:flex-[5] shadow-lg shadow-slate-200/80 border-transparent' 
                  : 'flex-[1] lg:flex-[1] bg-slate-50 hover:bg-slate-100 border border-slate-100'
                }
              `}
            >
              {/* Overlay Gradient Background */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ease-out bg-gradient-to-t ${hashira.color} 
                ${isActive ? 'opacity-80' : 'opacity-0'}`}
              ></div>
              
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/60 via-transparent to-transparent opacity-50"></div>
              )}

              {/* GAMBAR TEROPTIMASI GPU */}
              <img 
                src={hashira.imgSrc} 
                alt={hashira.name}
                loading="eager"
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom transition-all duration-500 ease-out transform-gpu pointer-events-none z-10
                  ${isActive 
                    ? 'scale-100 opacity-100 drop-shadow-xl' 
                    : 'scale-80 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-75'
                  }
                `}
              />

              {/* Box Informasi Teks dengan Efek Blurry Glass */}
              <div 
                className={`absolute bottom-0 left-0 w-full p-4 md:p-6 transition-all duration-500 ease-out transform-gpu flex flex-col justify-end z-20
                  ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
                `}
              >
                {/* PERUBAHAN DI SINI: Menerapkan Glassmorphism pada kontainer teks */}
                <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-5 rounded-2xl max-w-md shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
                  <h3 className="font-extrabold text-xl md:text-3xl text-slate-900 tracking-tight mb-1 drop-shadow-sm">
                    {hashira.name}
                  </h3>
                  <p className={`text-xs md:text-sm font-extrabold uppercase tracking-widest mb-3 ${hashira.accentText} drop-shadow-sm`}>
                    {hashira.element}
                  </p>
                  
                  <div className="w-12 h-1 bg-white/60 rounded-full mb-3"></div>
                  
                  <p className="text-slate-800 text-xs md:text-sm leading-relaxed font-semibold drop-shadow-sm">
                    {hashira.desc}
                  </p>
                </div>
              </div>

              {/* Label Vertikal Saat Non-Aktif */}
              <div 
                className={`absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none transition-opacity duration-300 z-20
                  ${isActive ? 'opacity-0' : 'opacity-100'}
                `}
              >
                <span className="text-slate-400 font-extrabold uppercase tracking-[0.3em] text-sm whitespace-nowrap -rotate-90">
                  {hashira.name.split(' ')[0]}
                </span>
              </div>
              
            </div>
          );
        })}
      </div>
    </main>
  );
}