import logo from '../Assets/download.png';
import { FaPhoneAlt , FaFacebookF , FaTwitter , FaInstagram , FaLinkedin } from 'react-icons/fa';
function Footer(){

    return <div>
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="widget widget-info">
                            <div className="footer-logo">
                               <a href="/">
                                <img src={logo}/>
                               </a>
                            </div>
                            <div className='ft-contact'>
                                <p>Lorem ipsum is dolor sit amet, 
                                   csectetur adipiscing elit, dolore smod tempor 
                                   incididunt ut labore et.</p>
                                   <div className='contact-bx'>
                                    <div className='icon'>
                                        <FaPhoneAlt/>
                                    </div>
                                    <div className='contact-number'>
                                        <span>Contact Us</span>
                                        <h4 className='number'>+01 123 456 7890</h4>
                                    </div>
                                   </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className='widget footer-widget ml-50'>
                            <h3 className='footer-title'>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href='/about'>
                                        <span>About Us</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/service'>
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/booking'>
                                        <span>Booking</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/faqs'>
                                        <span>Faq's</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/blog'>
                                        <span>Blogs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/ourteam'>
                                        <span>Our Team</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className='widget footer-widget ml-50'>
                            <h3 className='footer-title'>Our Service</h3>
                            <ul>
                                <li>
                                    <a href='/servicedetails'>
                                        <span>Dental Care</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/servicedetails'>
                                        <span>Cardiac Clinic</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/servicedetails'>
                                        <span>Massege Therapy</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/servicedetails'>
                                        <span>Cardiology</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/servicedetails'>
                                        <span>Precise Diagnosis</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/servicedetails'>
                                        <span>Abmbulance Services</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6'>
                        <div className='widget widget-form'>
                            <h3 className='footer-title'>Subscribe</h3>
                            <form className='subscribe-form subscription-form mb-30'>
                                <div className='ajax-message'></div>
                                <div className='input-group'>
                                    <input name='email' required className='form-control' placeholder='Email Address' type='email'></input>
                                </div>
                                <button name='submit' value='Submit' type='submit' className='btn btn-secondary shadow w-100'>Subscribe Now</button>
                            </form>
                            <div className='footer-social-link'>
                                <ul>
                                    <li>
                                        <a href='facebook.com'>
                                          <FaFacebookF/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='twitter.com'>
                                          <FaTwitter/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='instagram.com'>
                                          <FaInstagram/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='linkedin.com'>
                                          <FaLinkedin/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='container'>
            <div className='footer-bottom'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p className='copyright-text'>
                           Copyright © 2022 Design & Developed by 
                           <a href='/' className='text-secondary'>KareemWael</a>
                        </p>
                    </div>
                </div>
            </div>
          </div>

        </footer>
    </div>
}

export default Footer;