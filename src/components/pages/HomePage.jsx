import React from 'react';
import { MessageCircleMore } from 'lucide-react';
import logo from '../../assets/logo_dark.svg'; // Adjust the path as necessary
const HomePage = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 pt-28 pb-12 md:pt-40 md:pb-20">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Ваша идея —<br />
              наша реализация
            </h1>
            
            <div className="mb-8">
              <p className="text-lg md:text-xl text-slate-600 mb-4">
                <span className="font-semibold text-slate-800">Astana Digital Outsource</span> — это IT-компания,
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                предоставляющая полный цикл разработки цифровых 
                решений под заказ. Мы сопровождаем клиента на 
                каждом этапе пути: от идеи до готового продукта, 
                полностью беря на себя техническую часть реализации.
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Оставить заявку
            </button>
          </div>

          {/* Visual Element */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background circles */}
              <div className="w-100 h-100 md:w-97 md:h-97 relative">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        <MessageCircleMore size={28} />
      </button>
    </main>
  );
};

export default HomePage;