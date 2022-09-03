import headerImage from '../Assets/doctor.7c2bc96d.png';

function Banner(){

    return <div className='banner'>
       <div className="container">
        <div className="row align-items-center">
           <div className="col-lg-7 col-md-7">
             <h5 className='backimg'>We Provide All Health Care Solution</h5>
             <h2>Protect Your Health And Take Care To Of Your Health</h2>
             <button><a href="#">Read More</a></button>
           </div>

           <div className="col-lg-5 col-md-5">
              <img src={headerImage}/>
           </div>
        </div>
       </div>
    </div>
}

export default Banner ;