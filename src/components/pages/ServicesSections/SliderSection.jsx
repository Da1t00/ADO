import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Импортируем изображения
import webAppsImg from '../../../assets/slider/web-apps.png';
import mobileAppsImg from '../../../assets/slider/mobile-apps.png';
import supportImg from '../../../assets/slider/support.png';
import outsourcingImg from '../../../assets/slider/outsourcing.png';
import educationImg from '../../../assets/slider/education.png';
import consultingImg from '../../../assets/slider/consulting.png';
import webSitesImg from '../../../assets/slider/web-sites.png';

const SliderSection = () => {
  const [, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Веб-сайты",
      subtitle: "Корпоративные, лендинги, e-commerce",
      image: webSitesImg
    },
    {
      title: "Веб-приложения",
      subtitle: "Платформы, CRM, информационные системы",
      image: webAppsImg
    },
    {
      title: "Мобильные приложения",
      subtitle: "Разработка под iOS и Android",
      image: mobileAppsImg
    },
    {
      title: "Поддержка",
      subtitle: "Обновление, сопровождение, оптимизация",
      image: supportImg
    },
    {
      title: "IT-аутсорсинг",
      subtitle: "Команды под проекты бизнеса и госструктур",
      image: outsourcingImg
    },
    {
      title: "Консалтинг",
      subtitle: "Технический аудит и помощь в ТЗ",
      image: consultingImg
    },
    {
      title: "Образование",
      subtitle: "Обучение и подготовка специалистов",
      image: educationImg
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Основные направления деятельности
      </h2>

      <div className="relative">
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            speed={3000} // Плавная анимация перехода (в миллисекундах)
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: true, // Ждать завершения перехода перед следующим автопрокрутом
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-12"
          >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full p-4 group">
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:scale-105 hover:z-10`} style={{ minHeight: '400px' }}>
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{slide.title}</h3>
                    <p className="text-gray-600">{slide.subtitle}</p>
                  </div>
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Индикатор текущего слайда */}
      </div>
    </section>
  );
};

export default SliderSection;