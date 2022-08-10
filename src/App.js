// import React, { useEffect } from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
// import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios.get("https://b4baf3d6-1f2c-4895-9f5c-aeecc00e7aef-prod.e1-us-east-azure.choreoapis.dev/knmr/choreogramacheckintegrationapi/1.0.0/validate", { params: { nic: "196325521555", address: "20/9 Symonds Road, 10", phone: "+8012345555"}, }).then((response) => { console.log(response) }).catch((error) => { console.log(error); });

  // }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Footer />
    </div>
  );
}

export default App;