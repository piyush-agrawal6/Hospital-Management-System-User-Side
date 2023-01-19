import AboutUs from "../Sections/aboutus";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import NavBars from "../Sections/navbar";
import Services from "../Sections/services";
import ToTop from "../Sections/totop";

function Home() {
  return (
    <div>
      <NavBars />
      <Banner />
      <AboutUs />
      <Services />
      <Footer />
      <ToTop />
    </div>
  );
}

export default Home;
