import React from 'react';
import AboutUs from'./AboutUsSections/AboutUsSection';
import ValueSection from'./AboutUsSections/ValueSection'; 
import AboutUsDiff from'./AboutUsSections/AboutUsDif';



const AboutUsPage = () => (
    <div style={{
        background: 'linear-gradient(to bottom, #F9FAFB, #A8CBEE)'
      }}> 
        <AboutUs />
        <ValueSection />
        <AboutUsDiff />
    </div>
);

export default AboutUsPage;