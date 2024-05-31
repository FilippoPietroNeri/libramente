// components/YouTubeCinemaEmbed.js
import React from 'react';

const YouTubeCinemaEmbed = ({ videoId, subtitleLang = 'en' }: any) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 border-r">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=${subtitleLang}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCinemaEmbed;
