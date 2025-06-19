import React from 'react';
import transparencyIcon from '../../../assets/values/transparency.png';
import flexibilityIcon from '../../../assets/values/flexibility.png';
import qualityIcon from '../../../assets/values/quality.png';
import securityIcon from '../../../assets/values/security.png';
import growthIcon from '../../../assets/values/growth.png';

const ValueSection = () => {
  const values = [
    { icon: transparencyIcon, title: 'Прозрачность' },
    { icon: flexibilityIcon, title: 'Гибкость' },
    { icon: qualityIcon, title: 'Качество' },
    { icon: securityIcon, title: 'Безопасность' },
    { icon: growthIcon, title: 'Развитие' },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">Наши ценности</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-20 h-20 mb-4 drop-shadow-md"
              />
              <span className="text-lg text-gray-800 font-medium">{value.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
