import Header from "../Components/header";
import Footer from "../Components/footer";
import '../styles/pages.sass/error.scss'

function NotFound() {
  return (
    <div>
      <Header />
      <div className="notfound">
        <h1>404</h1>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;