import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars.push(<FaStar key={i} size={24} className="text-[#FFBF10]" />);
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(<FaStarHalfStroke key={i} size={24} className="text-[#FFBF10]" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} size={24} className="text-[#FFBF10]" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
