import Header from "../Components/header";
import React from "react";
import Footer from "../Components/footer";
import Carrousel from "../Components/carrousel";
import accomodationList from '../data/accomodationList.json'
import { useParams } from "react-router-dom";
import "../styles/pages.sass/accomodation.scss";
import Collapse from "../Components/collapse";
import { useState } from "react";
import StarRating from "../Components/starRating";

function Accomodation() {
  const { id } = useParams();
  const accomodation = accomodationList.find((object) => object.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const equipmentList = accomodation.equipments.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <Carrousel
            images={accomodation.pictures}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </section>
        <section className="section">
          <div className="main-info">
            <div className="left">
              <div className="title">
                <h1>{accomodation.title}</h1>
                <p>{accomodation.location}</p>
              </div>

              <div className="container-tags">
                {accomodation.tags.map((tag, index) => (
                  <div key={index} className="tag">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="right">
              <div className="container-host">
                <span>{accomodation.host.name}</span>
                <img src={accomodation.host.picture} alt="host" />
              </div>

              <div className="container-rating">
                <StarRating rating={accomodation.rating} />
              </div>
            </div>
          </div>

          <div className="container-collapse">
            <div className="container-description">
              <Collapse labels="Description" content={accomodation.description} page="accomodation">
              </Collapse>
            </div>

            <div className="container-equipment">
              <Collapse labels="Equipement" content={equipmentList} page="accomodation">
              </Collapse>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Accomodation;
