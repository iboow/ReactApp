import "../styles/components.sass/header.scss";
import Logo from "../assets/logo-header.png";
import Nav from "../Components/nav";

function Header() {
  return (
    <header>
      <div className="logo-header">
        <img src={Logo} alt="logo de l entreprise : Kasa" />
      </div>
    <Nav/>
    </header>
  );
}

export default Header;
