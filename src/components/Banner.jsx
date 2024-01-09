import React from "react";
import { CiPlay1 } from "react-icons/ci";
import banner from "/images/home/banner.png";
import banner1 from "/images/home/b-food1.png";
const Banner = () => {
  return (
    <section className="section-container bg-gradient-to-r from-[#fafafa] form-0% to-primary to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={banner} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4 ">
            <div className="flex gap-3 bg-white py-2 px-3 rounded-2xl w-64 shadow-lg items-center">
              <img src={banner1} alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-error">$18.00</p>
              </div>
            </div>
            <div className="lg:flex  hidden gap-3 bg-white py-2 px-3 rounded-2xl w-64 shadow-lg items-center">
              <img src={banner1} alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-error">$18.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-7 px-4">
          <h3 className="md:text-5xl text-4xl font-bold leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-accent">Food</span>
          </h3>
          <p className=" text-xl text-[#4a4a4a] my-6">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div className=" flex flex-col md:flex-row items-center gap-8">
            <button className="btn bg-accent px-8 py-3 font-semibold text-white rounded-full hover:bg-black transition-all duration-500">
              Order Now
            </button>
            <button className="btn bg-transparent px-8 py-3 font-semibold text-black rounded-full hover:bg-accent transition-all duration-500 flex items-center gap-5">
              Watch Video <CiPlay1 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
