import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Certificates from './components/certificate/Certificates'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Selects />
      <ImgCarousel />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;