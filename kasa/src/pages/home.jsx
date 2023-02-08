import Header from "../Components/header";
import Footer from "../Components/footer";
import Banner from "../Components/banner";
import accomodationList from "../accomodationList";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        {accomodationList.map((accomodation) => (
    <li key={ accomodation.id }>
      
    </li>
))}
      </main>

      <Footer />
    </>
  );
}

export default Home;
