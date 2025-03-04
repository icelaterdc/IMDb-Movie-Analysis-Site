import React from 'react';
import { BarChart4, TrendingUp, Users, Clapperboard, Search } from 'lucide-react';
import ChartCard from '../components/ChartCard';
import FilmCard from '../components/FilmCard';

const HomePage: React.FC = () => {
  // Örnek film verileri
  const popularFilms = [
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
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">IMDb Film Analiz Platformu</h1>
          <p className="text-xl mb-8">
            Film dünyasının en kapsamlı verilerini analiz ederek size özel içgörüler sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Analizleri Keşfet
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Film Önerileri Al
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Platformumuzun Özellikleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-flex mb-4">
              <BarChart4 size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Film Analizleri</h3>
            <p className="text-gray-600">
              IMDb'deki en yüksek puanlı filmleri ve yıllara göre puan değişimlerini inceleyin.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-flex mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trend Analizleri</h3>
            <p className="text-gray-600">
              Film türlerinin popülerliğini ve sinema dünyasındaki değişimleri takip edin.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-flex mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Yönetmen & Oyuncu</h3>
            <p className="text-gray-600">
              En başarılı yönetmenleri ve oyuncuları karşılaştırın, performanslarını analiz edin.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full inline-flex mb-4">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Film Önerileri</h3>
            <p className="text-gray-600">
              Beğenilerinize göre kişiselleştirilmiş film önerileri alın.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Films Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">En Popüler Filmler</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">Tümünü Gör</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularFilms.map((film, index) => (
            <FilmCard key={index} {...film} />
          ))}
        </div>
      </section>

      {/* Sample Charts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Öne Çıkan Analizler</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Yıllara Göre IMDb Puanları">
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">Burada yıllara göre IMDb puanlarının grafiği yer alacak</p>
            </div>
          </ChartCard>
          <ChartCard title="Film Türlerinin Popülerliği">
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">Burada film türlerinin popülerlik grafiği yer alacak</p>
            </div>
          </ChartCard>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Güncel Analizlerden Haberdar Olun</h2>
          <p className="text-gray-600 mb-6">
            Haftalık film analizleri ve öneriler için bültenimize abone olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;