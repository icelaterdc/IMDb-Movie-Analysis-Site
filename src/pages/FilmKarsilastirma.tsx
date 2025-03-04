import React, { useState } from 'react';
import { Search, BarChart4, Clock, Users, Award } from 'lucide-react';

const FilmKarsilastirma: React.FC = () => {
  const [film1, setFilm1] = useState('');
  const [film2, setFilm2] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  // Örnek film verileri (gerçek uygulamada API'den gelecek)
  const filmData1 = {
    title: 'Inception',
    year: '2010',
    director: 'Christopher Nolan',
    rating: 8.8,
    duration: 148,
    genres: ['Bilim Kurgu', 'Aksiyon', 'Macera'],
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    budget: '$160 milyon',
    boxOffice: '$836 milyon',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  };

  const filmData2 = {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    rating: 9.0,
    duration: 152,
    genres: ['Aksiyon', 'Suç', 'Drama'],
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    budget: '$185 milyon',
    boxOffice: '$1 milyar',
    imageUrl: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  };

  const handleCompare = () => {
    // Gerçek uygulamada burada API çağrısı yapılacak
    setShowComparison(true);
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Film Karşılaştırma</h1>
        <p className="text-blue-100">
          İki filmi yan yana karşılaştırarak detaylı analiz yapın.
        </p>
      </div>

      {/* Film Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">1. Film</label>
            <div className="relative">
              <input
                type="text"
                value={film1}
                onChange={(e) => setFilm1(e.target.value)}
                placeholder="Film adı girin..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">2. Film</label>
            <div className="relative">
              <input
                type="text"
                value={film2}
                onChange={(e) => setFilm2(e.target.value)}
                placeholder="Film adı girin..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleCompare}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Filmleri Karşılaştır
          </button>
        </div>
      </div>

      {/* Comparison Results */}
      {showComparison && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-50 p-4 border-b border-blue-100">
            <h2 className="text-xl font-bold text-blue-900">Karşılaştırma Sonuçları</h2>
          </div>

          {/* Film Headers */}
          <div className="grid grid-cols-2 gap-4 p-6 border-b border-gray-200">
            <div className="flex flex-col items-center">
              <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={filmData1.imageUrl}
                  alt={filmData1.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{filmData1.title}</h3>
              <p className="text-gray-600">{filmData1.year}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={filmData2.imageUrl}
                  alt={filmData2.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{filmData2.title}</h3>
              <p className="text-gray-600">{filmData2.year}</p>
            </div>
          </div>

          {/* Comparison Metrics */}
          <div className="p-6">
            {/* IMDb Rating */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full mr-3">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">IMDb Puanı</p>
                  <p className="text-xl font-bold">{filmData1.rating}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full mr-3">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">IMDb Puanı</p>
                  <p className="text-xl font-bold">{filmData2.rating}</p>
                </div>
              </div>
            </div>

            {/* Director */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Yönetmen</p>
                <p className="font-medium">{filmData1.director}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Yönetmen</p>
                <p className="font-medium">{filmData2.director}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Süre</p>
                  <p className="font-medium">{filmData1.duration} dakika</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Süre</p>
                  <p className="font-medium">{filmData2.duration} dakika</p>
                </div>
              </div>
            </div>

            {/* Genres */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Türler</p>
                <div className="flex flex-wrap gap-1">
                  {filmData1.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Türler</p>
                <div className="flex flex-wrap gap-1">
                  {filmData2.genres.map((genre, index) => (
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

            {/* Cast */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Oyuncular</p>
                <div className="flex flex-col space-y-1">
                  {filmData1.cast.map((actor, index) => (
                    <div key={index} className="flex items-center">
                      <Users size={16} className="text-gray-400 mr-2" />
                      <span>{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Oyuncular</p>
                <div className="flex flex-col space-y-1">
                  {filmData2.cast.map((actor, index) => (
                    <div key={index} className="flex items-center">
                      <Users size={16} className="text-gray-400 mr-2" />
                      <span>{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Budget & Box Office */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Bütçe</p>
                <p className="font-medium">{filmData1.budget}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Bütçe</p>
                <p className="font-medium">{filmData2.budget}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Hasılat</p>
                <p className="font-medium">{filmData1.boxOffice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hasılat</p>
                <p className="font-medium">{filmData2.boxOffice}</p>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Karşılaştırma Grafiği</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Burada iki filmin karşılaştırma grafiği yer alacak</p>
            </div>
          </div>
        </div>
      )}

      {/* Suggestion */}
      {!showComparison && (
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-lg font-semibold mb-2">Karşılaştırma İpuçları</h2>
          <p className="text-gray-600 mb-4">
            Film karşılaştırma aracı ile şunları yapabilirsiniz:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>İki filmin IMDb puanlarını karşılaştırın</li>
            <li>Yönetmen ve oyuncu kadrosunu yan yana görün</li>
            <li>Bütçe ve hasılat verilerini analiz edin</li>
            <li>Film türlerini ve temalarını karşılaştırın</li>
            <li>Eleştirmen ve izleyici yorumlarını inceleyin</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilmKarsilastirma;