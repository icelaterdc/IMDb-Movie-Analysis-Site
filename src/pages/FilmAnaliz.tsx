import React from 'react';
import ChartCard from '../components/ChartCard';
import FilmCard from '../components/FilmCard';
import { BarChart4, TrendingUp, Award } from 'lucide-react';

const FilmAnaliz: React.FC = () => {
  // Örnek film verileri
  const topRatedFilms = [
    {
      title: 'Esaretin Bedeli',
      year: '1994',
      director: 'Frank Darabont',
      rating: 9.3,
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Drama', 'Suç'],
    },
    {
      title: 'Baba',
      year: '1972',
      director: 'Francis Ford Coppola',
      rating: 9.2,
      imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Suç', 'Drama'],
    },
    {
      title: 'Kara Şövalye',
      year: '2008',
      director: 'Christopher Nolan',
      rating: 9.0,
      imageUrl: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Aksiyon', 'Suç', 'Drama'],
    },
    {
      title: 'Baba 2',
      year: '1974',
      director: 'Francis Ford Coppola',
      rating: 9.0,
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      genres: ['Suç', 'Drama'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Film Analizleri</h1>
        <p className="text-blue-100">
          IMDb verilerine dayalı kapsamlı film analizleri ve istatistikler.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Yıl Aralığı</label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="1900"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="2025"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Film Türü</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Tüm Türler</option>
              <option value="drama">Drama</option>
              <option value="comedy">Komedi</option>
              <option value="action">Aksiyon</option>
              <option value="scifi">Bilim Kurgu</option>
              <option value="horror">Korku</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Minimum IMDb Puanı</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="0">Tümü</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
              <option value="7">7+</option>
              <option value="8">8+</option>
              <option value="9">9+</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Filtrele
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Yıllara Göre IMDb Puanları">
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Burada yıllara göre IMDb puanlarının grafiği yer alacak</p>
          </div>
        </ChartCard>
        <ChartCard title="Film Türlerinin Dağılımı">
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Burada film türlerinin dağılım grafiği yer alacak</p>
          </div>
        </ChartCard>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              <Award size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">En Yüksek IMDb Puanı</p>
              <p className="text-2xl font-bold">9.3</p>
              <p className="text-sm text-gray-500">Esaretin Bedeli (1994)</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              <BarChart4 size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Ortalama IMDb Puanı</p>
              <p className="text-2xl font-bold">7.2</p>
              <p className="text-sm text-gray-500">Tüm zamanlar</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">En Popüler Tür</p>
              <p className="text-2xl font-bold">Drama</p>
              <p className="text-sm text-gray-500">Toplam 12,453 film</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Films */}
      <div>
        <h2 className="text-2xl font-bold mb-4">En Yüksek Puanlı Filmler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRatedFilms.map((film, index) => (
            <FilmCard key={index} {...film} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmAnaliz;