import Header from "../Components/header";
import Footer from "../Components/footer";
import '../styles/pages.sass/error.scss'
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <>
     <Header />
     <section className="section-error">
    <div className="container-error">
      <div className="errorNumber">
        <h1>404</h1>
        </div>
        <div className="notfound">
        <p> Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="backToHome" to='/'>Retournez sur la page d'accueil</Link>
    </div>
    </section>
    <Footer />
    </>
  );
}

export default NotFound;