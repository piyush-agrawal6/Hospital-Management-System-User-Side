import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'slick-carousel/slick/slick.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/home';
import About from './Components/about';
import OurTeam from './Components/ourteam';
import FaqS from './Components/faqs';
import Booking from './Components/booking';
import NotFound from './Components/notfound';
import Login from './Components/login';
import Service from './Components/service';
import ServiceDetails from './Components/servicedetails';
import Blog from './Components/blog';
import BlogDetails from './Components/blogdetails';
import Contact from './Components/contact';
import {Routes , Route , HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/#/about' element={<About/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/#/ourteam' element={<OurTeam/>}/>
    <Route path='/#/Faqs' element={<FaqS/>}/>
    <Route path='/#/booking' element={<Booking/>}/>
    <Route path='/#/notfound' element={<NotFound/>}/>
    <Route path='/#/login' element={<Login/>}/>
    <Route path='/#/service' element={<Service/>}/>
    <Route path='/#/servicedetails' element={<ServiceDetails/>}/>
    <Route path='/#/blog' element={<Blog/>}/>
    <Route path='/#/blogdetails' element={<BlogDetails/>}/>
    <Route path='/#/contact' element={<Contact/>}/>
   </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
