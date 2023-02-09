import React from "react";
import accomodationList from "../accomodationList";
import Card from "../Components/card";
import '../styles/components.sass/CardList.scss'

function CardList() {
  return (
    <div className="card-container">
      {accomodationList.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}

export default CardList;
