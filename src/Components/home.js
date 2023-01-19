import AboutUs from "../Sections/aboutus";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import NavBars from "../Sections/navbar";
import Services from "../Sections/services";
import ToTop from "../Sections/totop";
import Work from "../Sections/work";

function Home() {
  return (
    <div>
      <NavBars />
      <Banner />
      <AboutUs />
      {/* <Work /> */}
      <Services />
      <Footer />
      <ToTop />
    </div>
  );
}

export default Home;
