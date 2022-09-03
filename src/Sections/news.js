import Slider from "react-slick";
import Cardimg1 from '../Assets/pic1.a3848a11.jpg';
import Cardimg2 from '../Assets/pic2.67db6c47.jpg';
import Cardimg3 from '../Assets/pic3.89b83151.jpg';
import Cardimg4 from '../Assets/pic4.28ea761e.jpg';
import Cardimg5 from '../Assets/pic5.44c2a542.jpg';
import member1 from '../Assets/doc11.jpg';
import member2 from '../Assets/doc22.jpg';
import member3 from '../Assets/doc33.jpg';
import member4 from '../Assets/doc44.jpg';
import member5 from '../Assets/doc55.jpg';
import { FaRegCalendarAlt , FaChevronRight } from 'react-icons/fa';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            infinite: true
            }
        }, {
            breakpoint: 600,

            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              dots: false
            }
          }, {
            breakpoint: 300,
        
            settings: "unslick",
          }]
};

function News(){
    return <div>
       <section className="section-area section-sp1 blog-area">
        <div className="container">
            <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">Latest News</h6>
                <h2 className="title">Our Latest News</h2>
            </div>
            <Slider className="blog-slide" {...settings}>
               <div className="blog-card">
                <div className="post-media">
                    <a href="/blogdetails">
                        <img src={Cardimg1}/>
                    </a>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <a href="/blogdetails">
                            <img src={member1}/>
                            John deo
                        </a>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        21 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <a href="/blogdetails">In this hospital there are special surgeon</a>
                    </h5>
                    <a href="/blogdetails" className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </a>
                </div>
               </div>
               <div className="blog-card">
                <div className="post-media">
                    <a href="/blogdetails">
                        <img src={Cardimg2}/>
                    </a>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <a href="/blogdetails">
                            <img src={member2}/>
                            Peter Packer
                        </a>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        22 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <a href="/blogdetails">Can you get a diflucan prescription online?</a>
                    </h5>
                    <a href="/blogdetails" className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </a>
                </div>
               </div>
               <div className="blog-card">
                <div className="post-media">
                    <a href="/blogdetails">
                        <img src={Cardimg3}/>
                    </a>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <a href="/blogdetails">
                            <img src={member3}/>
                            Sonar Moyna
                        </a>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        23 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <a href="/blogdetails">Why Is Skin Surgeon Considered Underrated</a>
                    </h5>
                    <a href="/blogdetails" className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </a>
                </div>
               </div>
               <div className="blog-card">
                <div className="post-media">
                    <a href="/blogdetails">
                        <img src={Cardimg4}/>
                    </a>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <a href="/blogdetails">
                            <img src={member4}/>
                            Kalina Mollika
                        </a>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        24 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <a href="/blogdetails">Dental Care for Women is very important</a>
                    </h5>
                    <a href="/blogdetails" className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </a>
                </div>
               </div>
               <div className="blog-card">
                <div className="post-media">
                    <a href="/blogdetails">
                        <img src={Cardimg5}/>
                    </a>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <a href="/blogdetails">
                            <img src={member5}/>
                            Michel
                        </a>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        25 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <a href="/blogdetails">Health Will Be A Thing Of The Past And Here's Why</a>
                    </h5>
                    <a href="/blogdetails" className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </a>
                </div>
               </div>
            </Slider>
        </div>
       </section>
    </div>
}

export default News