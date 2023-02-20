import Header from "../Components/header";
import Footer from "../Components/footer";
import '../styles/pages.sass/error.scss'
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div>
      <Header />
      <div className="notfound">
        <h1>404</h1>
        <p> Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="backToHome" to='/'>Retournez sur la page d'accueil</Link>
      <Footer />
    </div>
  );
}

export default NotFound;