import React from "react";
import AboutCompany from "../../features/aboutCompany/aboutCompany";
import ProductCard from "../../features/productCard/productCard";
import Works from '../../features/ourWorks/works';
import Banner from '../../features/banner/banner';

const Home = () => {
  return (
    <section id="homePage" className="page">
     <Banner/>
      <Works/>
      <ProductCard/>
      <AboutCompany/>
    </section>
  );
};

export default Home;
