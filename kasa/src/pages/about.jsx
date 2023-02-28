import Header from "../Components/header";
import Footer from "../Components/footer";
import Banner from "../Components/banner";
import Collapse from "../Components/collapse";
import "../styles/pages.sass/about.scss";
import data from "../data/data.json";

function About() {
  return (
    <div>
      <Header />
      <main>
        <Banner alt="image de haute montagne" />
        <section className="section">
          <div className="collapse">
            {data.map((item) => (
              <Collapse key={item.title} labels={item.title} content={item.content} page="about"
              ></Collapse>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
