import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Carousels from './Carousel';

class Home extends Component {
    render() {
        return (
            <Grid>
               <Jumbotron className="jumbo"> 
                   <h2>Welcome to this Demo</h2>
                   <p>This is a clone of code.io using React, React-Router and React-Bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary"> About </Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="images/kirill.jpg" circle className="profile-pic" />
                        <h3>Tasha</h3>
                        <p>Taking a step is better than always procastinating. Always believe in yourself</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="images/alex.jpg" circle className="profile-pic" />
                        <h3>Jerry</h3>
                        <p>Taking a step is better than always procastinating. Always believe in yourself</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="images/tyler-nix.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>Taking a step is better than always procastinating. Always believe in yourself</p>
                    </Col>
                </Row>
                <Carousels/>
               

            </Grid>
        );
    }
}

export default Home;