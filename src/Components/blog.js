import NavBars from '../Sections/navbar.js';
import Footer from '../Sections/footer.js';
import ToTop from '../Sections/totop.js';
import './about.css';
import '../index.css';
import { FiHome } from "react-icons/fi";
import { FaRegCalendarAlt , FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cardimg1 from '../Assets/pic1.a3848a11.jpg';
import Cardimg2 from '../Assets/pic2.67db6c47.jpg';
import Cardimg3 from '../Assets/pic3.89b83151.jpg';
import Cardimg4 from '../Assets/pic4.28ea761e.jpg';
import Cardimg5 from '../Assets/pic5.44c2a542.jpg';
import Cardimg6 from '../Assets/pic6.42f81537.jpg';
import Cardimg7 from '../Assets/pic7.c1733b79.jpg';
import Cardimg8 from '../Assets/pic8.a59ea2da.jpg';
import Cardimg9 from '../Assets/pic9.9ca3a042.jpg';
import member1 from '../Assets/doc11.jpg';
import member2 from '../Assets/doc22.jpg';
import member3 from '../Assets/doc33.jpg';
import member4 from '../Assets/doc44.jpg';
import member5 from '../Assets/doc55.jpg';

function Blog(){
    return <div>
      <NavBars/>
      <div className="banner-wraper">
        <div className="page-banner">
            <div className="container">
                <div className="page-banner-entry text-center">
                    <h1>Blog Grid 3</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={"/home"}>
                                    <FiHome/>
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Blog Grid 3
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      </div>
      <section className="section-area section-sp1 blog-area">
        <div className="container">
            <div className="blog-slide row">
               <div className='col-lg-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg1}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member1}/>
                            John deo
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        21 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>In this hospital there are special surgeon</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg2}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member2}/>
                            Peter Packer
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        22 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Can you get a diflucan prescription online?</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg3}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member3}/>
                            Sonar Moyna
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        23 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Why Is Skin Surgeon Considered Underrated</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg4}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member4}/>
                            Kalina Mollika
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        24 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Dental Care for Women is very important</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg5}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member5}/>
                            Michel
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        25 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Health Will Be A Thing Of The Past And Here's Why</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg6}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member1}/>
                            Peter Packer
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        26 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Can you get a diflucan prescription online?</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg7}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member2}/>
                            Sonar Moyna
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        27 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Ten Gigantic Influences Of Health</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg8}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member3}/>
                            Kalina
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        28 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Ten Gigantic Influences Of Health</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
               <div className='col-xl-4 col-md-6 mb-30'>
               <div className="blog-card">
                <div className="post-media">
                    <Link to={"/blogdetails"}>
                        <img src={Cardimg9}/>
                    </Link>
                </div>
                <div className="post-info">
                    <ul className="post-meta">
                       <li className="author">
                        <Link to={"/blogdetails"}>
                            <img src={member4}/>
                            Michel
                        </Link>
                       </li>
                       <li className="date">
                        <FaRegCalendarAlt/>
                        29 July 2021
                       </li>
                    </ul>
                    <h5 className="post-title">
                        <Link to={"/blogdetails"}>Everyone need to go Dentist regularly</Link>
                    </h5>
                    <Link to={"/blogdetails"} className="btn btn-outline-primary btn-sm">
                       Read More
                      <FaChevronRight className="btn-icon-bx"/>
                    </Link>
                </div>
               </div>
               </div>
            </div>
        </div>
       </section>
       <Footer/>
       <ToTop/>
    </div>
}

export default Blog;