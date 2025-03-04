import React, { useState } from 'react';
import { Film, Search, BarChart4, TrendingUp, Users, Clapperboard } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FilmAnaliz from './pages/FilmAnaliz';
import TrendAnaliz from './pages/TrendAnaliz';
import YonetmenAnaliz from './pages/YonetmenAnaliz';
import FilmKarsilastirma from './pages/FilmKarsilastirma';
import FilmOneriler from './pages/FilmOneriler';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Ana Sayfa', icon: <Film size={20} /> },
    { id: 'filmAnaliz', label: 'Film Analizleri', icon: <BarChart4 size={20} /> },
    { id: 'trendAnaliz', label: 'Trend Analizleri', icon: <TrendingUp size={20} /> },
    { id: 'yonetmenAnaliz', label: 'Yönetmen & Oyuncu', icon: <Users size={20} /> },
    { id: 'filmKarsilastirma', label: 'Film Karşılaştırma', icon: <Clapperboard size={20} /> },
    { id: 'filmOneriler', label: 'Film Önerileri', icon: <Search size={20} /> },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'filmAnaliz':
        return <FilmAnaliz />;
      case 'trendAnaliz':
        return <TrendAnaliz />;
      case 'yonetmenAnaliz':
        return <YonetmenAnaliz />;
      case 'filmKarsilastirma':
        return <FilmKarsilastirma />;
      case 'filmOneriler':
        return <FilmOneriler />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar menuItems={menuItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;