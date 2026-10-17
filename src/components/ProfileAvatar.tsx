import React, { useState, useEffect, useRef } from 'react';

export const ProfileAvatar: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
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
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('mubashir_profile_photo');
    setPhotoUrl(null);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Clean, Human Profile Picture Frame */}
      <div
        className="relative group cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
        title="Click to upload your photo"
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-lg transition-all duration-200 group-hover:border-zinc-600">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Muhammed Mubashir"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-300 p-4 select-none">
              <div className="w-16 h-16 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-100 font-bold text-2xl mb-2">
                MM
              </div>
              <span className="text-xs font-medium text-zinc-300">Muhammed Mubashir</span>
              <span className="text-[11px] text-zinc-500 mt-0.5">Click to add photo</span>
            </div>
          )}

          {/* Hover overlay with clean camera prompt */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-200">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
            <span className="text-xs font-medium">Upload photo</span>

            {photoUrl && (
              <button
                onClick={handleResetPhoto}
                className="text-[10px] text-zinc-400 hover:text-white underline mt-1"
              >
                Reset
              </button>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Clean status badge */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-md flex items-center gap-1.5 text-[11px] text-zinc-300 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Available for work</span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-xs text-zinc-500">
          Software Developer at <span className="text-zinc-300 font-medium">Ziqx</span>
        </p>
      </div>
    </div>
  );
};
