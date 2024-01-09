import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const Cards = ({ item }) => {
  const { _id, image, name, price, recipe } = item;
  const [isHeartFillted, setIsHeartFillted] = useState(false);
  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };
  return (
    <div className="card bg-base-100 shadow-xl cursor-pointer">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-accent ${
          isHeartFillted ? "text-error" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${_id}`}>
        <figure>
          <img
            src={image}
            alt={name}
            className="hover:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${_id}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <p>{recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            $<span className="text-sm text-error">{price}</span>
          </h5>
          <Link to={`/menu/${_id}`} className="btn bg-accent text-white">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
