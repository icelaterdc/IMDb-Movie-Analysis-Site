import React from 'react';
import { Star } from 'lucide-react';

interface FilmCardProps {
  title: string;
  year: string;
  director: string;
  rating: number;
  imageUrl: string;
  genres: string[];
}

const FilmCard: React.FC<FilmCardProps> = ({
  title,
  year,
  director,
  rating,
  imageUrl,
  genres,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{year} • {director}</p>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-500 mr-1" size={18} />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm ml-1">/10</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {genres.map((genre, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmCard;