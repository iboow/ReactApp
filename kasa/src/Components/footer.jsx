import "../styles/components.sass/footer.scss";
import Logo from '../assets/logo-footer.png'


function Footer() {
    return (
      <footer>
        <div className="logo-footer">
        <img src={Logo} alt="logo de l entreprise : Kasa" />
      </div>
      <div className="rights-text">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
      </footer>
    );
  }
  
  export default Footer;