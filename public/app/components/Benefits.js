import React from 'react';
import {render} from "react-dom";
import { Link } from 'react-router-dom'
import AOS from 'aos';

export class Benefits extends React.Component{

  render(){
    AOS.init();
    return(
      <div className="benefit-page">
        <div className="benefit-row">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div data-aos="fade-up" className="benefit-info">
                  <h2>High speed of your business</h2>
                  <p>Just some random text herehehehehehe dhwaid hwioadh iowaho idwh</p>
                  <Link className="btn btn-outline-primary btn-lg" to="/contact">Get Started</Link>
                </div>
              </div>
              <div  className="col-sm-12 col-md-6">
                <img data-aos="fade-down" src="/images/benefits/1.png" className="benefit-img img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="benefit-row">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img data-aos="fade-left" src="/images/benefits/2.png" className="benefit-img img-fluid" />
              </div>
              <div className="col-sm-12 col-md-6">
                <div data-aos="fade-right" className="benefit-info benefit-info-left">
                  <h2>High speed of your business</h2>
                  <p>Just some random text herehehehehehe dhwaid hwioadh iowaho idwh</p>
                  <button className="btn btn-outline-primary btn-lg">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefit-row">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div data-aos="flip-down" data-aos-easing="ease-in-back"
     data-aos-delay="800"
     data-aos-offset="0" className="benefit-info">
                  <h2>High speed of your business</h2>
                  <p>Just some random text herehehehehehe dhwaid hwioadh iowaho idwh</p>
                  <button className="btn btn-outline-primary btn-lg">Get Started</button>
                </div>
              </div>
              <div data-aos="flip-down" data-aos-delay="300" className="col-sm-12 col-md-6">
                <img src="/images/benefits/3.png" className="benefit-img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
