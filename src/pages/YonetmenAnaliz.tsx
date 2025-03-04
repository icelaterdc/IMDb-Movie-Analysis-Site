import React, { useState } from 'react';
import ChartCard from '../components/ChartCard';
import { Users, User, Award } from 'lucide-react';

const YonetmenAnaliz: React.FC = () => {
  const [activeTab, setActiveTab] = useState('yonetmenler');

  // Örnek yönetmen verileri
  const topDirectors = [
    { name: 'Christopher Nolan', avgRating: 8.6, filmCount: 11, bestFilm: 'Inception', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Martin Scorsese', avgRating: 8.2, filmCount: 25, bestFilm: 'Goodfellas', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Quentin Tarantino', avgRating: 8.1, filmCount: 9, bestFilm: 'Pulp Fiction', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Steven Spielberg', avgRating: 7.9, filmCount: 32, bestFilm: 'Schindler\'s List', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  // Örnek oyuncu verileri
  const topActors = [
    { name: 'Leonardo DiCaprio', avgRating: 8.2, filmCount: 30, bestFilm: 'The Departed', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Meryl Streep', avgRating: 7.8, filmCount: 74, bestFilm: 'The Devil Wears Prada', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Tom Hanks', avgRating: 7.7, filmCount: 50, bestFilm: 'Forrest Gump', imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Cate Blanchett', avgRating: 7.5, filmCount: 51, bestFilm: 'Blue Jasmine', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Yönetmen & Oyuncu Analizleri</h1>
        <p className="text-blue-100">
          Film dünyasının en başarılı yönetmenleri ve oyuncuları hakkında detaylı analizler.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'yonetmenler'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('yonetmenler')}
          >
            <div className="flex items-center justify-center space-x-2">
              <User size={20} />
              <span>Yönetmenler</span>
            </div>
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'oyuncular'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('oyuncular')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Users size={20} />
              <span>Oyuncular</span>
            </div>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input
              type="text"
              placeholder={activeTab === 'yonetmenler' ? 'Yönetmen ara...' : 'Oyuncu ara...'}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tüm Dönemler</option>
              <option value="2010s">2010'lar</option>
              <option value="2000s">2000'ler</option>
              <option value="1990s">1990'lar</option>
              <option value="1980s">1980'ler</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Filtrele
            </button>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title={activeTab === 'yonetmenler' ? 'En İyi Yönetmenlerin IMDb Ortalamaları' : 'En İyi Oyuncuların IMDb Ortalamaları'}>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">
              {activeTab === 'yonetmenler'
                ? 'Burada yönetmenlerin IMDb ortalamaları grafiği yer alacak'
                : 'Burada oyuncuların IMDb ortalamaları grafiği yer alacak'}
            </p>
          </div>
        </ChartCard>
        <ChartCard title={activeTab === 'yonetmenler' ? 'Yönetmenlerin Film Sayıları' : 'Oyuncuların Film Sayıları'}>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">
              {activeTab === 'yonetmenler'
                ? 'Burada yönetmenlerin film sayıları grafiği yer alacak'
                : 'Burada oyuncuların film sayıları grafiği yer alacak'}
            </p>
          </div>
        </ChartCard>
      </div>

      {/* Top Directors/Actors List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {activeTab === 'yonetmenler' ? 'En Başarılı Yönetmenler' : 'En Başarılı Oyuncular'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === 'yonetmenler' ? topDirectors : topActors).map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                <div className="flex items-center mb-2">
                  <Award className="text-yellow-500 mr-1" size={18} />
                  <span className="font-medium">{person.avgRating.toFixed(1)}</span>
                  <span className="text-gray-500 text-sm ml-1">ortalama puan</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">{person.filmCount}</span> film
                </p>
                <p className="text-gray-600 text-sm">
                  En iyi film: <span className="font-medium">{person.bestFilm}</span>
                </p>
                <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Detaylı Analiz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Kariyere Göre Analiz</h2>
        <p className="text-gray-600 mb-6">
          {activeTab === 'yonetmenler'
            ? 'Yönetmenlerin kariyerleri boyunca IMDb puanlarının değişimi ve film türlerine göre başarı oranları.'
            : 'Oyuncuların kariyerleri boyunca IMDb puanlarının değişimi ve film türlerine göre başarı oranları.'}
        </p>
        <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">
            {activeTab === 'yonetmenler'
              ? 'Burada yönetmenlerin kariyer analizi grafiği yer alacak'
              : 'Burada oyuncuların kariyer analizi grafiği yer alacak'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YonetmenAnaliz;