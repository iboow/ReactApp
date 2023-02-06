import Header from "../Components/header";
import Footer from "../Components/footer";
import '../styles/pages.sass/error.scss'

function NotFound() {
  return (
    <div>
      <Header />
      <div className="notfound">
        <p>404</p>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;