// src/components/layout/Header.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Pengaturan tema default (Home)
  let theme = {
    bg: 'bg-emerald-500',
    text: 'text-emerald-500',
    btnBg: 'bg-emerald-50',
    btnText: 'text-emerald-600',
    hover: 'hover:bg-emerald-100',
    textImg: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Krakter%20Header/homeHeader.webp'
  };

  // Pengaturan tema jika berada di halaman Nezuko
  if (location.pathname === '/nezuko') {
    theme = {
      bg: 'bg-pink-500',
      text: 'text-pink-500',
      btnBg: 'bg-pink-50',
      btnText: 'text-pink-600',
      hover: 'hover:bg-pink-100',
      textImg: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Krakter%20Header/Nezukoheader.webp'
    };
  } 
  // Pengaturan tema jika berada di halaman Hashira - Diubah ke emerald agar serasi dengan konten
  else if (location.pathname === '/hashira') {
    theme = {
      bg: 'bg-emerald-500',
      text: 'text-emerald-500',
      btnBg: 'bg-emerald-50',
      btnText: 'text-emerald-600',
      hover: 'hover:bg-emerald-100',
      textImg: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Krakter%20Header/homeHeader.webp'
    };
  }
  // Pengaturan tema jika berada di halaman Detail
  else if (location.pathname.startsWith('/anime/')) {
    theme = {
      bg: 'bg-amber-500',
      text: 'text-amber-500',
      btnBg: 'bg-amber-50',
      btnText: 'text-amber-600',
      hover: 'hover:bg-amber-100',
      textImg: 'https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Krakter%20Header/zenitsuHeader.webp'
    };
  }

  // Cek menu mana yang sedang aktif
  const isHomeActive = location.pathname === '/';
  const isNezukoActive = location.pathname === '/nezuko';
  const isHashiraActive = location.pathname === '/hashira';

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md w-full border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-between gap-2 w-full">
        
        {/* KIRI: Logo & Gambar Teks */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img 
            src="https://wdpnjsmlhyiitnfeynjt.supabase.co/storage/v1/object/public/Asset%20Demon%20Batch/Logo/LogoDemonBatch.webp" 
            alt="DemonBatch Icon" 
            className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-sm" 
          />
          <img 
            src={theme.textImg} 
            alt="DemonBatch Text" 
            className="h-5 sm:h-7 md:h-8 w-auto object-contain mt-0.5 sm:mt-1 hidden sm:block" 
          />
        </Link>

        {/* TENGAH: Menu Navbar Navigasi */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8">
          <Link
            to="/"
            className={`text-xs sm:text-sm font-extrabold transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 ${
              isHomeActive
                ? theme.text
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-house text-xs sm:text-sm"></i>
            <span className="hidden sm:inline">Home</span>
          </Link>
          
          <Link
            to="/nezuko"
            className={`text-xs sm:text-sm font-extrabold transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 ${
              isNezukoActive
                ? theme.text
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-heart text-xs sm:text-sm"></i>
            <span className="hidden sm:inline">Nezuko Choice</span>
          </Link>

          <Link
            to="/hashira"
            className={`text-xs sm:text-sm font-extrabold transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 ${
              isHashiraActive
                ? theme.text
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <i className="fa-solid fa-user-ninja text-xs sm:text-sm"></i>
            <span className="hidden sm:inline">Hashira</span>
          </Link>
        </nav>

        {/* KANAN: Lonceng Notifikasi (Warna mengikuti tema halaman aktif) */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button className={`relative transition-transform hover:scale-110 cursor-pointer ${theme.text}`}>
            <i className="fa-solid fa-bell text-lg sm:text-xl"></i>
            {/* Badge Notifikasi */}
            <span className={`absolute -top-1 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white animate-pulse ${theme.bg}`}></span>
          </button>
        </div>

      </div>
    </header>
  );
}