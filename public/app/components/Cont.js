import React from 'react';
import {render} from 'react-dom'

class Cont extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e){
  e.preventDefault();
  alert("It is working");
}

  render(){
    return(
      <div className="contact-hextech">
        <div className="contact-hextech-margin">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <form className="contact-form">
                  <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-2 col-form-label">Name</label>
                    <div className="col-10">
                      <input className="cont-input form-control" type="text" placeholder="John Bale" id="example-text-input" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
                    <div className="col-10">
                      <input className="cont-input form-control" type="text" placeholder="john.b@gmail.com" id="example-text-input" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
                    <div className="col-10">
                      <textarea className="cont-input form-control" placeholder="Your message goes here" id="exampleTextarea" rows="5"></textarea>
                    </div>
                  </div>
                  <input type="submit" name="submit" className="submit-btn btn btn-outline-primary" onClick={this.handleSubmit} value="Send Message"/>
                </form>

              </div>
              <div className="col-sm-12 col-md-6">
                <div className="contact-info">
                  <h5>Email: office@hextech.io</h5>
                  <h5>Telephone: +381616396485</h5>
                </div>
                <div className="social-contact">
                  <a href="">
                    <img className="contact-img img-fluid" src="/images/social/fb.png"/>
                  </a>
                  <a href="">
                    <img className="contact-img img-fluid" src="/images/social/in.png"/>
                  </a>
                  <a href="">
                    <img className="contact-img img-fluid" src="/images/social/tw.png"/>
                  </a>
                  <a href="">
                    <img className="contact-img img-fluid" src="/images/social/yt.png"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-hextech row">
              <div className="col">
                <p>Copyright 2018 - Hextech.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Cont
