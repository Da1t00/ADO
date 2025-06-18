import React from 'react';
import model from '../../../assets/dif/model.gif';
import implementation from '../../../assets/dif/implementation.gif';
import team from '../../../assets/dif/team.gif';
import quality from '../../../assets/dif/quality.gif';
import business from '../../../assets/dif/business.gif';
import communication from '../../../assets/dif/communication.gif';
import education from '../../../assets/dif/education.gif';

const AboutUsDiff = () => {
  const features = [
    {
      title: "Собственная модель",
      subtitle: "B20A",
      description: "Проверенный подход, сочетающий гибкость аутсорса и стабильность агентства.",
      gif: model
    },
    {
      title: "Комплексная реализация",
      description: "От идеи до поддержки – закрываем весь цикл разработки.",
      gif: implementation
    },
    {
      title: "Индивидуальный подбор команды",
      description: "Подбираем штатных и внешних специалистов под задачи проекта.",
      gif: team
    },
    {
      title: "Качество и тестирование",
      description: "Соблюдаем стандарты, проводим всестороннюю проверку решений.",
      gif: quality
    },
    {
      title: "Работаем с бизнесом и госсектором",
      description: "Умеем подстраиваться под разные процессы и требования.",
      gif: business
    },
    {
      title: "Прозрачная коммуникация",
      description: "Проект-менеджер и доступ к статусу задач на всех этапах.",
      gif: communication
    },
    {
      title: "Обучающая платформа (в разработке)",
      description: "Готовим собственный кадровый резерв из молодых IT-специалистов.",
      gif: education
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Что нас отличает?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-[#1F2937] rounded-xl shadow-lg text-white">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`
              bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
              transition-all duration-300 hover:-translate-y-1 flex flex-col
              ${index === 6 ? 'md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3' : ''}
            `}
          >
            <div className="flex items-center justify-center h-40 overflow-hidden bg-gray-50">
              <img 
                src={feature.gif} 
                alt={feature.title}
                className="max-w-full max-h-full object-contain p-2" 
                loading="lazy"
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
              {feature.subtitle && (
                <h3 className="text-xl text-gray-600 mb-3">{feature.subtitle}</h3>
              )}
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsDiff;