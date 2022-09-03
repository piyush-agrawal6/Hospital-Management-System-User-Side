import NavBars from "../Sections/navbar";
import { FiHome } from "react-icons/fi";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import Card1 from '../Assets/bdetails1.d8c3c8e3.jpg';
import Cardm1 from '../Assets/pic2.2c21a722bd1.jpg';
import Cardm2 from '../Assets/pic5.7eb54729bd2.jpg';
import Cardm3 from '../Assets/pic1.b7a9e70e.jpg';
import Cardm4 from '../Assets/pic3.3275b9e6.jpg';
import Cardm5 from '../Assets/pic4.f008bc42.jpg';
import Cardm6 from '../Assets/pic6.c8e86d3c.jpg';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import member2 from '../Assets/doc22.jpg';
import member1 from '../Assets/doc11.jpg';
import Comimg from '../Assets/downloadcom1.jpg';
import Cardimg1 from '../Assets/pic1.a3848a11.jpg';
import Cardimg2 from '../Assets/pic2.67db6c47.jpg';
import Cardimg3 from '../Assets/pic3.89b83151.jpg';
import { FaRegCalendarAlt , FaFacebookF , FaTwitter , FaInstagram , FaLinkedin } from 'react-icons/fa';
import './about.css';
import '../index.css';
import './blogdt.css';

function BlogDetails(){
    return <div>
      <NavBars/>
      <div className="banner-wraper">
        <div className="page-banner">
            <div className="container">
                <div className="page-banner-entry text-center">
                    <h1>Blog Details</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={"/home"}>
                                    <FiHome/>
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Blog Details
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
       </div>
       <section className="section-area section-sp1 bg-white">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
                    <div className="blog-card blog-single">
                        <div className="post-media">
                            <img src={Card1}/>
                        </div>
                        <div className="info-bx">
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
                        <div className="ttr-post-title">
                            <h2 className="post-title">Precious Tips To Help You Get Better.</h2>
                        </div>
                        <div className="ttr-post-text">
                            <p>You just need to enter the keyword and select 
                                the keyword type to generate a list of 6 title 
                                ideas and suggestions. If you’re not satisfied 
                                with the results, you can always hit the refresh 
                                button to generate a new list of unique titles.
                            </p>
                            <blockquote className="wp-block-quote">
                                <p>Once you’ve gotten all the titles and have chosen the best one,
                                   the next thing you need to do is to craft a magnetic content. 
                                   Great content marketers excel at creating content.
                                </p>
                            </blockquote>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                               and typesetting industry. Lorem Ipsum has been the 
                               industry's standard dummy text ever since the 1500s,
                               when an unknown printer took a galley of type and 
                               scrambled it to make a type specimen book.
                            </p>
                            <ul className="wp-block-gallery columns-6 is-cropped">
                                <li className="blocks-gallery-item">
                                    <img src={Cardm1}/>
                                </li>
                                <li className="blocks-gallery-item">
                                    <img src={Cardm2}/>
                                </li>
                            </ul>
                            <p>You just need to enter the keyword and select the keyword 
                               type to generate a list of 6 title ideas and suggestions. 
                               If you’re not satisfied with the results, you can always 
                               hit the refresh button to generate a new list of unique titles.
                            </p>
                            <p>It has survived not only five centuries, but also the leap into 
                               electronic typesetting, remaining essentially unchanged. 
                               It was popularised in the 1960s with the release of Letraset 
                               sheets containing Lorem Ipsum passages, and more recently with 
                               desktop publishing software like Aldus PageMaker including 
                               versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="ttr-post-footer">
                            <div className="post-tags">
                                <strong>Tags:</strong>
                                <Link to={"/blogdetails"}>Health</Link>
                                <Link to={"/blogdetails"}>Growth</Link>
                                <Link to={"/blogdetails"}>Life</Link>
                            </div>
                            <div className="share-post ml-auto">
                                <ul className="social-media mb-0">
                                    <li>
                                        <strong>Share:</strong>
                                    </li>
                                    <li>
                                        <Link to={"facebook.com"}>
                                           <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"twitter.com"}>
                                           <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"instagram.com"}>
                                           <FaInstagram/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"linkedin.com"}>
                                           <FaLinkedin/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="author-box blog-user mb-50">
                        <div className="author-profile-info">
                            <div className="author-profile-pic">
                              <img src={Comimg}/>
                            </div>
                            <div className="author-profile-content">
                                <h5>Sonar Z. Moyna</h5>
                                <p className="mb-20">
                                   Aenean sollicitudin, lorem quis biber idum auctor 
                                   anisi elit consequat happ quam vel enim augue.
                                </p>
                                <ul className="social-media mb-0">
                                    <li>
                                        <Link to={"facebook.com"}>
                                           <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"twitter.com"}>
                                           <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"instagram.com"}>
                                           <FaInstagram/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"linkedin.com"}>
                                           <FaLinkedin/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clear" id="comment-list">
                        <div className="comments-area" id="comments">
                            <h4 className="widget-title">8 Comments</h4>
                            <div className="clearfix">
                                <ol className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <img src={member2} className="avatar photo"/>
                                                <div className="clearfix">
                                                    <cite className="fn">George</cite>
                                                    <span className="says">says:</span>
                                                    <div className="comment-meta">
                                                        <Link to={"/blogdetails"}>May 09, 2021 at 10:45 am</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing 
                                               and typesetting industry. Lorem Ipsum has been the
                                               industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley.
                                            </p>
                                            <div className="reply">
                                                <Link className="comment-reply-link" to={"/blogdetails"}>Reply</Link>
                                            </div>
                                        </div>
                                        <ol className="children">
                                            <li className="comment odd parent">
                                            <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <img src={member1} className="avatar photo"/>
                                                <div className="clearfix">
                                                    <cite className="fn">Falikaz</cite>
                                                    <span className="says">says:</span>
                                                    <div className="comment-meta">
                                                        <Link to={"/blogdetails"}>May 09, 2021 at 10:45 am</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing 
                                               and typesetting industry. Lorem Ipsum has been the
                                               industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley.
                                            </p>
                                            <div className="reply">
                                                <Link className="comment-reply-link" to={"/blogdetails"}>Reply</Link>
                                            </div>
                                            </div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <img src={member2} className="avatar photo"/>
                                                <div className="clearfix">
                                                    <cite className="fn">Sonar</cite>
                                                    <span className="says">says:</span>
                                                    <div className="comment-meta">
                                                        <Link to={"/blogdetails"}>May 09, 2021 at 10:45 am</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing 
                                               and typesetting industry. Lorem Ipsum has been the
                                               industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley.
                                            </p>
                                            <div className="reply">
                                                <Link className="comment-reply-link" to={"/blogdetails"}>Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <img src={member1} className="avatar photo"/>
                                                <div className="clearfix">
                                                    <cite className="fn">Michel</cite>
                                                    <span className="says">says:</span>
                                                    <div className="comment-meta">
                                                        <Link to={"/blogdetails"}>May 09, 2021 at 10:45 am</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing 
                                               and typesetting industry. Lorem Ipsum has been the
                                               industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley.
                                            </p>
                                            <div className="reply">
                                                <Link className="comment-reply-link" to={"/blogdetails"}>Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                                <div className="comment-respond">
                                    <h4 className="widget-title">Leave a Reply</h4>
                                    <form className="comment-form" id="commentform">
                                        <p className="comment-form-author">
                                            <input type='text' name="Author" placeholder="Name" id="author" required></input>
                                        </p>
                                        <p className="comment-form-email">
                                            <input type='text' name="email" placeholder="Email" id="email" required></input>
                                        </p>
                                        <p className="comment-form-comment">
                                            <textarea rows='8' name="comment" placeholder="Comment" id="comment"></textarea>
                                        </p>
                                        <p className="form-submit">
                                            <input type='submit' className="submit" id="submit" name="submit" value="Submit Comment"></input>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-5 col-xl-4 mb-30">
                    <aside className="side-bar sticky-top aside-bx">
                        <div className="widget widget_search">
                            <form className="searchform">
                                <div className="input-group">
                                    <input name="text" className="form-control" placeholder="Enter your keywords..." type="text"></input>
                                    <div className="input-group-btn">
                                        <button type="submit" className="btn btn-secondary">
                                            <FaSearch/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="widget recent-posts-entry">
                            <h4 className="widget-title">Recent Posts</h4>
                            <div className="widget-post-bx">
                                <div className="widget-post clearfix">
                                    <div className="ttr-post-media">
                                       <img src={Cardimg1}/>
                                    </div>
                                    <div className="ttr-post-info">
                                        <div className="ttr-post-header">
                                            <h6 className="post-title">
                                                <Link to={"/blogdetails"}>Precious Tips To Help You Get Better.</Link>
                                            </h6>
                                        </div>
                                        <ul className="post-meta">
                                          <li className="date">
                                           <FaRegCalendarAlt/>
                                                21 July 2021
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget-post clearfix">
                                    <div className="ttr-post-media">
                                       <img src={Cardimg2}/>
                                    </div>
                                    <div className="ttr-post-info">
                                        <div className="ttr-post-header">
                                            <h6 className="post-title">
                                                <Link to={"/blogdetails"}>Ten Doubts You Should Clarify About.</Link>
                                            </h6>
                                        </div>
                                        <ul className="post-meta">
                                          <li className="date">
                                           <FaRegCalendarAlt/>
                                                21 July 2021
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget-post clearfix">
                                    <div className="ttr-post-media">
                                       <img src={Cardimg3}/>
                                    </div>
                                    <div className="ttr-post-info">
                                        <div className="ttr-post-header">
                                            <h6 className="post-title">
                                                <Link to={"/blogdetails"}>The 10 Steps Needed For Putting.</Link>
                                            </h6>
                                        </div>
                                        <ul className="post-meta">
                                          <li className="date">
                                           <FaRegCalendarAlt/>
                                                21 July 2021
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget_gallery gallery-grid-3">
                            <h4 className="widget-title">Our Gallery</h4>
                            <div>
                                <ul className="magnific-image">
                                  <li>
                                    <img src={Cardm1}/>
                                  </li>
                                  <li>
                                    <img src={Cardm2}/>
                                  </li>
                                  <li>
                                    <img src={Cardm3}/>
                                  </li>
                                  <li>
                                    <img src={Cardm4}/>
                                  </li>
                                  <li>
                                    <img src={Cardm5}/>
                                  </li>
                                  <li>
                                    <img src={Cardm6}/>
                                  </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget widget_tag_cloud">
                        <h4 className="widget-title">Tags</h4>
                        <div className="tagcloud">
                            <Link to={"/blogdetails"}>Improvement</Link>
                            <Link to={"/blogdetails"}>Health</Link>
                            <Link to={"/blogdetails"}>Life</Link>
                            <Link to={"/blogdetails"}>Covid</Link>
                            <Link to={"/blogdetails"}>Healthy</Link>
                            <Link to={"/blogdetails"}>Growth</Link>
                            <Link to={"/blogdetails"}>Education</Link>
                            <Link to={"/blogdetails"}>Manage</Link>
                            <Link to={"/blogdetails"}>General</Link>
                        </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
       </section>
      <Footer/>
      <ToTop/>
    </div>
}

export default BlogDetails;