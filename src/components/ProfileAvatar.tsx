import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './Icons';
import { soundFX } from '../utils/sound';

export const ProfileAvatar: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded a custom photo previously
    const saved = localStorage.getItem('mubashir_profile_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('mubashir_profile_photo', result);
        soundFX.playChime();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('mubashir_profile_photo');
    setPhotoUrl(null);
    soundFX.playBlip();
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer 3D Rotating Glowing Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]" />
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-blue-500/20 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 blur-2xl -z-10" />
      </div>

      {/* Main Avatar Card Frame */}
      <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl p-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/30 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
          <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 flex flex-col items-center justify-center relative">
            
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="Muhammed Mubashir"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              // Default Developer Avatar Artwork with Initials
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-center p-4 relative overflow-hidden">
                {/* Cyber grid lines */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }}
                />
                
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white font-extrabold text-3xl mb-2 z-10">
                  MM
                </div>

                <div className="text-xs font-bold text-white tracking-wider uppercase z-10">Muhammed Mubashir</div>
                <div className="text-[10px] text-cyan-400 font-mono z-10 mt-0.5">Software Developer</div>

                <div className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 z-10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>Click to add photo</span>
                </div>
              </div>
            )}

            {/* Hover overlay with Change Photo Prompt */}
            <div className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
              <span className="text-xs font-bold text-white">Upload Your Photo</span>
              <span className="text-[10px] text-slate-400 font-mono">PNG / JPG / WEBP</span>

              {photoUrl && (
                <button
                  onClick={handleResetPhoto}
                  className="mt-1 text-[10px] text-rose-400 hover:text-rose-300 underline"
                >
                  Reset to default
                </button>
              )}
            </div>

            {/* Hidden native file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Live Status Pill at bottom of photo */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/40 shadow-lg flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 whitespace-nowrap z-20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Software Developer</span>
        </div>
      </div>

      {/* Floating 3D Tech Badges */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-xs text-xs font-mono">
        <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/10">
          ⚡ React & TypeScript
        </span>
        <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-purple-500/30 text-purple-300 shadow-sm shadow-purple-500/10">
          🪐 Unity AR / VR
        </span>
        <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-300 shadow-sm shadow-amber-500/10">
          🏎️ Automotive OBD
        </span>
      </div>
    </div>
  );
};

