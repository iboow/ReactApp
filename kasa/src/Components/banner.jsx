import "../styles/components.sass/banner.scss";
import React, { useState, useEffect } from "react";
import home from "../assets/banner-home.png";
import about from "../assets/banner-about.png";

function Banner() {
  const [location, setLocation] = useState("home");
  const alt =
    location === "home"
      ? "Paysage côtier, rocher, arbres"
      : "Paysage de haute montagne";

  useEffect(() => {
    if (window.location.pathname === "/") {
      setLocation("home");
    } else if (window.location.pathname === "/about") {
      setLocation("about");
    }
  }, []);

  return (
    <section>
      <div className="banner_container">
        <img src={location === "home" ? home : about} alt={alt} />
        {location === "home" && <p>Chez vous, partout et ailleurs</p>}
      </div>
    </section>
  );
}

export default Banner;
