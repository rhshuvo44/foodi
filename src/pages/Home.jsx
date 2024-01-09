import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import SpecialDishes from "../components/SpecialDishes";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Services />
    </>
  );
};

export default Home;
