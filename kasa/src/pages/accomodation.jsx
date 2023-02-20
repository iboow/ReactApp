import Header from "../Components/header";
import Footer from "../Components/footer";
import Carrousel from "../Components/carrousel";
import { accomodationList } from "../accomodationList";
import { useParams } from "react-router-dom";
import "../styles/pages.sass/accomodation.scss";
import Collapse from "../Components/collapse";
import { useState } from "react";
import StarRating from "../Components/starRating";

function Accomodation() {
  const { id } = useParams();
  const accomodation = accomodationList.find((object) => object.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <div className="title">
              <h1>{accomodation.title}</h1>
              <p>{accomodation.location}</p>
            </div>
            <div className="host">
              <span>{accomodation.host.name}</span>
              <img src={accomodation.host.picture} alt="host" />
            </div>
          </div>
          <div className="info">
            <div className="tag-rating">
              <div className="container-tags">
                {accomodation.tags.map((tag) => (
                  <div className="tag">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <div className="container-rating">
                <StarRating rating={accomodation.rating} />
              </div>
            </div>
            <div className="container-collapse">
              <div className="container-description">
                <Collapse labels="Description">
                  <div className="content">
                    <p>{accomodation.description}</p>
                  </div>
                </Collapse>
              </div>
              <div className="container-equipment">
                <Collapse labels="Equipement">
                  <div className="content">
                    {accomodation.equipments.map((item) => (
                      <li>{item}</li>
                    ))}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Accomodation;
