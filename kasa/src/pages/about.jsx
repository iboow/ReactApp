import Header from "../Components/header";
import Footer from "../Components/footer";
import Banner from "../Components/banner";
import Collapse from "../Components/collapse";


function About() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <section className="section">
        <div className="collapse">
          <Collapse labels="Fiabilité">
            <div className="content">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
            </div>
          </Collapse>
          <Collapse labels="Respect">
          <div className="content">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
            </div>
          </Collapse>
          <Collapse labels="Service">
          <div className="content">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
            </div>
          </Collapse>
          <Collapse labels="Sécurité">
          <div className="content">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
          </Collapse>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
