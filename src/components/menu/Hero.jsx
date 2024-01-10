import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="">
          <h3 className="md:text-5xl text-4xl font-bold leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-accent">Food</span>
          </h3>
          <p className=" text-xl text-[#4a4a4a] my-6">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-accent px-8 py-3 font-semibold text-white rounded-full hover:bg-black transition-all duration-500">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
