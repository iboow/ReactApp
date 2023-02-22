import React from "react";
import '../styles/components.sass/card.scss';
import { Link } from "react-router-dom";


function Card({ item }) {
  return (
    <Link to={`/accomodation/${item.id}`}
     className="thumb">
      <img src={item.cover} alt={item.title} />
      <p>{item.title}</p>
    </Link>
  );
}

export default Card;