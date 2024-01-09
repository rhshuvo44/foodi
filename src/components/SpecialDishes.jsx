import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import Cards from "./Cards";

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};
const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
};

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipes(specials);
      });
  }, []);
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
  };
  return (
    <div className="section-container py-16 relative">
      <div>
        <p className="subtitle">Special Dishes</p>
        <h3 className="title w-[520px]">Standout Dishes From Our Menu</h3>
      </div>
      <div className="md:absolute right-3 top-12 mb-10 md:mr-24 ">
        <button
          className="btn p-2 rounded-full ml-5 text-secondary transition-all duration-300  hover:bg-accent hover:text-white"
          onClick={() => slider?.current.slickPrev()}
        >
          <FaAngleLeft className="w-8 h-8 p-1 " />
        </button>
        <button
          className="btn p-2 rounded-full ml-5 bg-accent"
          onClick={() => slider?.current.slickNext()}
        >
          <FaAngleRight className="w-8 h-8 p-1 text-white" />
        </button>
      </div>
      <Slider
        ref={slider}
        {...settings}
        className="overflow-hidden mt-10 space-x-5"
      >
        {recipes.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
