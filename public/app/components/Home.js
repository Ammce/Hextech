import React from 'react'
import { Benefits } from './Benefits';
import {Services} from './Services';
import Howwedo from './Howwedo';
import Owl from './Owl';
import Cont from './Cont';
const Home = () => (
  <div className="homePage">
    <div className="slider-main">
      <div className="onOpen">
        <div className="onOpenOpen">
          <div className="container">
            <div id="carouselContent" className="carousel slide" data-interval="5000" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active text-center p-4">
                  <div className="slider-content-hex">
                    <h1>Modern technologies</h1>
                    <p>Our team is constantly learning new skills and improving its ablities to create the best for our clients</p>
                  </div>
                </div>
                <div className="carousel-item text-center p-4">
                  <div className="slider-content-hex">
                    <h1>Outstanding results</h1>
                    <p>Be sure that your needs will not just satisfy, but be the leading and examplary in a field that you are looking for developed by our amazing team!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div className="proba">
             <img src="/images/arrow.gif" className="hextech-arrow img-fluid"></img>
           </div>
        </div>
      </div>
    </div>
    <div className="section-hex">
        <Services />
    </div>

    <div className="slider-idea">
          <div className="col benefits1">
            <div className="benefits">
              <h1>Our Benefits</h1>
            </div>
      </div>
    </div>
    <Benefits />
    <Howwedo />
    <Owl />
    <Cont />
  </div>
)

export default Home
