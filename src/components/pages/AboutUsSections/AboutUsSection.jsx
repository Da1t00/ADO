import React from 'react';
import logo from '../../../assets/logo.svg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row shadow-md overflow-hidden rounded-xl mb-10">
          {/* Left Blue Section with Logo */}
          <div className="bg-blue-500 flex items-center justify-center p-8 md:w-1/2">
            <img src={logo} alt="Logo" className="w-52 h-52" />
          </div>

          {/* Right Text Section */}
          <div className="bg-slate-800 text-white flex flex-col justify-center p-8 md:w-1/2">
            <div className="text-sm text-gray-300 mb-2">Astana Digital Outsource</div>
            <h1 className="text-2xl md:text-3xl font-light leading-snug">
              Мы превращаем идеи в<br /> цифровые решения
            </h1>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Миссия</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Создавать надёжные и масштабируемые цифровые решения, которые помогают бизнесу расти, упрощают процессы
              и усиливают конкурентные преимущества.
            </p>
          </div>

          {/* B2OA */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">B2OA</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Наша модель B2OA позволяет бизнесу и госструктурам делегировать технические задачи без расширения
              штата, получая готовый результат в срок с удобным контролем. Это надёжность агентства и гибкость аутсорса
              в одном.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
