import AboutUs from "../Sections/aboutus";
import Account from "../Sections/account";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import NavBars from "../Sections/navbar";
import News from "../Sections/news";
import Services from "../Sections/services";
import Testimonial from "../Sections/testimonial";
import ToTop from "../Sections/totop";
import Work from "../Sections/work";


function Home(){
    return <div>
      <NavBars/>
      <Banner/>
      <AboutUs/>
      <Work/>
      <Account/>
      <Services/>
      <Testimonial/>
      <News/>
      <Footer/>
      <ToTop/>
    </div>
}

export default Home;