import React, { useState } from 'react';
import PhotoViewer from './PhotoViewer';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const photos = Array.from({ length: 23 }, (_, i) => `/h${i + 1}.jpeg`);

  return (
    <div className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">
          <span className="text-sky-500">Our</span> Facility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-[4/3] group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`Facility view ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedPhoto && (
        <PhotoViewer
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
