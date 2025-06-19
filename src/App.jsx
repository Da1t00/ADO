import React from 'react';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import ServicePage from './components/pages/ServicePage';


const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Ваш контент будет поверх фона */}
      <Header />
      <main className="relative z-10"> {/* z-10 чтобы контент был поверх фона */}
        {/* Ваши страницы и роуты */}
        <HomePage />
        <AboutUsPage />
        <ServicePage />
      </main>
    </div>
  );
};

export default App;