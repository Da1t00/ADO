import React from 'react';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import ServicePage from './components/pages/ServicePage';


const App = () => {
  return (
    <div 
      className="min-h-screen"
    >
      <Header />
      <HomePage />
      <AboutUsPage />
      <ServicePage />
    </div>
  );
};

export default App;