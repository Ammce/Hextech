import React from 'react';
import {render} from "react-dom";
import { Link } from 'react-router-dom'

export class Services extends React.Component{
  render(){
    return(
      <div className="container services-center">
        <div className="row row-services">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <Link className="services-link" to="/services/webapps">
                <img className="img-fluid" src="images/icons/2.png"></img>
                </Link>
              </div>
              <div className="col-10">
                  <Link className="services-link" to="/services/webapps">
                <p className="services-header">Web Apps Development</p>
                <p className="services-text">Most advanced web development technologies for modern, fast and reliable web apps, sites and services.</p>
                  </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
              <img className="img-fluid" src="images/icons/6.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">Mobile Apps Development</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-services">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src="images/icons/8.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">Software Development</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src="images/icons/4.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">Database Design</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-services">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src="images/icons/5.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">Graphic Design</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src="images/icons/1.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">Cloud Computing</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-services">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src="images/icons/3.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">IT Consulting</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-2">
                <img className="img-fluid" src="images/icons/7.png"></img>
              </div>
              <div className="col-10">
                <p className="services-header">Trainings</p>
                <p className="services-text">Native or hybrid, we provide mobile apps development services for all major platfroms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
