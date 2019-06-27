import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

class Carousels extends Component {
    render() {
        return (
          
          <Carousel className="carousel">
            <Carousel.Item className="Island">
              <img  alt="Island" src="images/1.jpg" />
            <Carousel.Caption>
              <h3>Island</h3>
              <p>A view this beautiful shouldn't be ignored</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="falls">
              <img alt="Water fall" src="images/2.jpg" />
              <Carousel.Caption>
                <h3>Water fall</h3>
                <p>The splash of the water on the rocks gives pleasant sound</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Trees">
              <img alt="Trees" src="images/2.jpg" />
              <Carousel.Caption>
                <h3>Trees</h3>
                <p>The birds find comforts amongst the trees</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default Carousels;