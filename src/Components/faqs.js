import NavBars from '../Sections/navbar';
import './faqs.css';
import './about.css';
import '../index.css';
import { FiHome } from "react-icons/fi";
import News from '../Sections/news';
import Footer from '../Sections/footer';
import ToTop from '../Sections/totop';
import Accordion from 'react-bootstrap/Accordion';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function FaqS(){
    return <div>
     <NavBars/>
     <div className="banner-wraper">
        <div className="page-banner">
            <div className="container">
                <div className="page-banner-entry text-center">
                    <h1>Faq's</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={"/home"}>
                                    <FiHome/>
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                               Faq's
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
     </div>
     <section className='section-sp3'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6'>
                <Accordion>
           <Accordion.Item eventKey="0">
        <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
        <Accordion.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled 
           it to make a type specimen book.
        </Accordion.Body>
           </Accordion.Item>
          <Accordion.Item eventKey="1">
        <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
          </Accordion.Item>
           <Accordion.Item eventKey="2">
        <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
             </Accordion.Item>
              <Accordion.Item eventKey="3">
        <Accordion.Header>What types of systems do you support?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
               </Accordion.Item>
                <Accordion.Item eventKey="4">
        <Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
                 </Accordion.Item>
                  <Accordion.Item eventKey="5">
                   <Accordion.Header>How Can I Contact You?</Accordion.Header>
                   <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                     aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                </div>
                <div className='col-lg-6'>
                <Accordion>
           <Accordion.Item eventKey="0">
        <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
        <Accordion.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled 
           it to make a type specimen book.
        </Accordion.Body>
           </Accordion.Item>
          <Accordion.Item eventKey="1">
        <Accordion.Header>What’s a payment statement?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
          </Accordion.Item>
           <Accordion.Item eventKey="2">
        <Accordion.Header>How Can I Contact You?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
             </Accordion.Item>
              <Accordion.Item eventKey="3">
        <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
               </Accordion.Item>
                <Accordion.Item eventKey="4">
        <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
                 </Accordion.Item>
                  <Accordion.Item eventKey="5">
                   <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
                   <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                     aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                   </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                </div>
            </div>
        </div>
     </section>
     <News/>
     <Footer/>
     <ToTop/>
    </div>
}

export default FaqS;