import React from "react";
import '../styles/pages.sass/home.scss'
import Header from "../Components/header";
import Footer from "../Components/footer";
import Banner from "../Components/banner";
import CardList from "../Components/cardList";
import "../styles/components.sass/card.scss";

function Home() {
  return (
    <>
      <Header />
      <main>
      <Banner />
      <CardList/>
      </main>
      <Footer />
    </>
  );
}

export default Home;
