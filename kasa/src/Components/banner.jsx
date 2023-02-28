import "../styles/components.sass/banner.scss";
import React, { useState, useEffect } from "react";
import home from "../assets/banner-home.png";
import about from "../assets/banner-about.png";
import aboutMobile from "../assets/banner-about-mobile.png"

function Banner(props) {
  const [location, setLocation] = useState("home");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const {alt} = props
    

  useEffect(() => {
    if (window.location.pathname === "/") {
      setLocation("home");
    } else if (window.location.pathname === "/about") {
        setLocation("about");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section">
      <div className="banner_container">
        <img src={
          location === "home" ? home :
          location === "about" && screenWidth >= 851 ? about :
          location === "about" && screenWidth < 851 ? aboutMobile :
          ""} alt={alt} />
        {location === "home" && <p>Chez vous, partout et ailleurs</p>}
      </div>
    </section>
  );
}




export default Banner;
