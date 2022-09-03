import './App.css';
import './index.css';
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
import { BrowserRouter , Routes , Route, HashRouter } from 'react-router-dom';

function App() {
  return(
    <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/ourteam' element={<OurTeam/>}/>
    <Route path='/Faqs' element={<FaqS/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/notfound' element={<NotFound/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/servicedetails' element={<ServiceDetails/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/blogdetails' element={<BlogDetails/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
  )
}

export default App;
