import React from "react";
import Header from "./componenets/header/Header";
import Hero1 from "./componenets/heroSection/Hero1";
import Layout1 from "./componenets/gridLayout/Layout1";
import HeroSlider from "./componenets/slider/Slider";
import Hero2 from "./componenets/heroSection/Hero2";
import Layout2 from "./componenets/gridLayout/Layou2";
import Hero3 from "./componenets/heroSection/Hero3";
import Footer from "./componenets/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero1 />
      <Layout1 />
      <HeroSlider />
      <Hero2 />
      <Layout2 />
      <Hero3 />
      <Footer />
    </div>
  );
};

export default App;
