import React from 'react';
import redStar from '../assets/redStar.png'
import greyStar from '../assets/greyStar.png'

const StarRating = ({ rating }) => {
  const redStars = Math.round(rating);
  const greyStars = 5 - redStars;

  return (
    <div>
      {[...Array(redStars)].map((_, index) => (
        <img key={index} src={redStar} alt="redStar" />
      ))}
      {[...Array(greyStars)].map((_, index) => (
        <img key={redStars + index} src={greyStar} alt="greyStar" />
      ))}
    </div>
  );
};

export default StarRating;
