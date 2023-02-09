import React from "react";
import '../styles/components.sass/card.scss';



function Card({ item }) {
  return (
    <div className="thumb">
      <img src={item.cover} alt={item.title} />
      <h4>{item.title}</h4>
    </div>
  );
}

export default Card;