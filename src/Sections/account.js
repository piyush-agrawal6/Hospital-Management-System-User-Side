import MobileImg from '../Assets/mobile.f82d7322.png';
import WomanImg from '../Assets/women.eb5c49c5.png';

function Account(){
    return <div>
      <section className="section-area account-wraper1">
       <div className="container-fluid">
        <div className="appointment-inner section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                        <div className="appointment-form form-wraper">
                            <h3>Book Appointment</h3>
                            <form action="#">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Selecty Department</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Selecty Doctor</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name"></input>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Phone Numbers"></input>
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control"></input>
                                </div>
                                <button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                        <div className="appointment-thumb">
                            <img src={MobileImg}/>
                            <div className='images-group'>
                                <img className='img1' src={WomanImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
      </section>
    </div>
}

export default Account;