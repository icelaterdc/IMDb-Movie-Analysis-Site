import React from 'react';
import ChartCard from '../components/ChartCard';
import { TrendingUp, Calendar, Film } from 'lucide-react';

const TrendAnaliz: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Trend Analizleri</h1>
        <p className="text-blue-100">
          Film dünyasındaki güncel trendleri ve değişimleri keşfedin.
        </p>
      </div>

      {/* Time Period Selector */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Calendar size={20} className="text-blue-600" />
            <span className="font-medium">Zaman Aralığı:</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Son 1 Yıl</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">Son 5 Yıl</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">Son 10 Yıl</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">2000'ler</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">Tüm Zamanlar</button>
          </div>
        </div>
      </div>

      {/* Trend Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Yükselen Tür</p>
              <p className="text-2xl font-bold">Bilim Kurgu</p>
              <p className="text-sm text-blue-600">%32 artış</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              <Film size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">En Çok Artan Konu</p>
              <p className="text-2xl font-bold">Süper Kahramanlar</p>
              <p className="text-sm text-blue-600">%28 artış</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Düşüşte Olan Tür</p>
              <p className="text-2xl font-bold">Romantik Komedi</p>
              <p className="text-sm text-red-600">%15 düşüş</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6">
        <ChartCard title="Film Türlerinin Yıllara Göre Popülerliği">
          <div className="h-80 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Burada film türlerinin yıllara göre popülerlik grafiği yer alacak</p>
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Ortalama Film Sürelerinin Değişimi">
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Burada ortalama film sürelerinin değişim grafiği yer alacak</p>
          </div>
        </ChartCard>
        <ChartCard title="Bütçe ve Hasılat İlişkisi">
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Burada bütçe ve hasılat ilişkisi grafiği yer alacak</p>
          </div>
        </ChartCard>
      </div>

      {/* Trend Topics */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Güncel Trend Konular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Dijital Platformların Yükselişi</h3>
            <p className="text-gray-600 mb-4">
              Son yıllarda Netflix, Amazon Prime ve Disney+ gibi dijital platformların film endüstrisine etkisi ve geleneksel sinema salonlarına karşı rekabeti.
            </p>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-4">
              <p className="text-gray-500">Dijital platform vs sinema salonu grafiği</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Analiz</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Uluslararası Filmlerin Artan Popülerliği</h3>
            <p className="text-gray-600 mb-4">
              Parasite, RRR ve Squid Game gibi yapımların başarısıyla birlikte Hollywood dışı yapımların küresel pazarda artan etkisi.
            </p>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-4">
              <p className="text-gray-500">Uluslararası film popülerliği grafiği</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Detaylı Analiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendAnaliz;