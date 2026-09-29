// src/components/ui/AnimeCard.jsx
import { Link } from 'react-router-dom';

export default function AnimeCard({ anime, themeColor = "emerald" }) {
  const badgeBg = themeColor === 'pink' ? 'bg-pink-500' : 'bg-emerald-500';
  const buttonStyle = themeColor === 'pink' 
    ? 'bg-pink-50 text-pink-600 hover:bg-pink-500' 
    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-500';

  return (
    <Link to={`/anime/${anime.id}`} className="bg-white rounded-3xl p-4 card-hover flex flex-col justify-between smooth-shadow">
      <div>
        <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4] bg-slate-100">
          <img src={anime.image} alt={anime.title} className="w-full h-full object-cover" />
          <span className={`absolute top-3 left-3 ${badgeBg} text-white font-extrabold text-[10px] px-2.5 py-1 rounded-xl smooth-shadow`}>
            {anime.category}
          </span>
          <span className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur-md text-white font-bold text-[10px] px-2.5 py-1 rounded-xl">
            <i className="fa-solid fa-star text-amber-400 mr-1"></i>{anime.rating}
          </span>
        </div>
        <h4 className="font-extrabold text-slate-900 text-sm mb-1 line-clamp-2">{anime.title}</h4>
        <p className="text-xs font-bold text-slate-400 mb-4">{anime.episodes} &bull; {anime.size}</p>
      </div>
      <div className={`w-full ${buttonStyle} hover:text-white font-bold py-3 rounded-2xl text-xs transition flex items-center justify-center gap-2 group smooth-shadow`}>
        <i className="fa-solid fa-download group-hover:scale-110 transition"></i> Download Batch
      </div>
    </Link>
  );
}