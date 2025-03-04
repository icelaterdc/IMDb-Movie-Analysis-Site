import React, { useState } from 'react';
import { Search, Filter, ThumbsUp } from 'lucide-react';
import FilmCard from '../components/FilmCard';

const FilmOneriler: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(7);
  const [yearRange, setYearRange] = useState<[number, number]>([1990, 2025]);
  const [showFilters, setShowFilters] = useState(false);

  // Örnek film türleri
  const genres = [
    'Aksiyon', 'Macera', 'Animasyon', 'Komedi', 'Suç', 'Belgesel', 
    'Drama', 'Aile', 'Fantastik', 'Tarih', 'Korku', 'Müzik', 
    'Gizem', 'Romantik', 'Bilim Kurgu', 'Gerilim', 'Savaş', 'Western'
  ];

  // Örnek film önerileri
  const recommendedFilms = [
    {
      title: 'Interstellar',
      year: '2014',
      director: 'Christopher Nolan',
      rating: 8.6,
      imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Bilim Kurgu', 'Macera', 'Drama'],
    },
    {
      title: 'Parasite',
      year: '2019',
      director: 'Bong Joon Ho',
      rating: 8.5,
      imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Komedi', 'Drama', 'Gerilim'],
    },
    {
      title: 'Whiplash',
      year: '2014',
      director: 'Damien Chazelle',
      rating: 8.5,
      imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Drama', 'Müzik'],
    },
    {
      title: 'Joker',
      year: '2019',
      director: 'Todd Phillips',
      rating: 8.4,
      imageUrl: 'https://images.unsplash.com/photo-1559583109-3e7968136c99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Suç', 'Drama', 'Gerilim'],
    },
    {
      title: 'Coco',
      year: '2017',
      director: 'Lee Unkrich',
      rating: 8.4,
      imageUrl: 'https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Animasyon', 'Macera', 'Aile'],
    },
    {
      title: 'Soul',
      year: '2020',
      director: 'Pete Docter',
      rating: 8.1,
      imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Animasyon', 'Macera', 'Komedi'],
    },
  ];

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Film Önerileri</h1>
        <p className="text-blue-100">
          Beğenilerinize göre kişiselleştirilmiş film önerileri alın.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Beğendiğiniz bir film adı girin..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
          >
            <Filter size={18} />
            <span>Filtreler</span>
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Öneriler Al
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Film Türleri</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedGenres.includes(genre)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Minimum IMDb Puanı: {minRating}</h3>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.1"
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Yıl Aralığı: {yearRange[0]} - {yearRange[1]}
                </h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={yearRange[0]}
                    onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                    className="w-full px-3 py-1 border border-gray-300 rounded-md"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={yearRange[1]}
                    onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                    className="w-full px-3 py-1 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Liked Films */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 mb-4">
          <ThumbsUp size={20} className="text-blue-600" />
          <h2 className="text-lg font-semibold">Beğendiğiniz Filmler</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Daha iyi öneriler almak için beğendiğiniz filmleri ekleyin.
        </p>
        <div className="flex flex-wrap gap-2">
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center">
            <span>Inception</span>
            <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
          </div>
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center">
            <span>The Matrix</span>
            <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
          </div>
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center">
            <span>Pulp Fiction</span>
            <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Sizin İçin Öneriler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedFilms.map((film, index) => (
            <FilmCard key={index} {...film} />
          ))}
        </div>
      </div>

      {/* Recommendation Categories */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Bilim Kurgu Sevenlere</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedFilms.slice(0, 3).map((film, index) => (
              <FilmCard key={index} {...film} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Drama Tutkunlarına</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedFilms.slice(3, 6).map((film, index) => (
              <FilmCard key={index} {...film} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmOneriler;