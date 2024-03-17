import React, { useState } from "react";
import './Rating.css'

const Rating = ({totalStars}) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star) => {
    setSelectedStars(star);
  };
  return (
    <div className="ml-3">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleStarClick(starValue)}
            style={{
              color: starValue <= selectedStars ? "gold" : "gray",
            }}
             className="rating-stars"
          >
         
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
