import React from "react";
import {accomodationList} from "../accomodationList";
import Card from "../Components/card";
import '../styles/components.sass/cardList.scss'

function CardList() {
  return (
    <section className="section">
    <div className="card-container">
      {accomodationList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
    </section>
  );
}

export default CardList;
