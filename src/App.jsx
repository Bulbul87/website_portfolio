

import React from 'react';
import Header from './components/Header';
 import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
 import Services from './components/Services';
import Testimonials from './components/Testimonials';
 import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutUs />
            <Services />
             <HeroSection />
            
             <Testimonials/>
             <Footer/>
            
        </div>
    );
}

export default App;
