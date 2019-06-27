import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
              <Image src="images/bonding.jpg" className="header-image" />
              <Grid>
                  <Col xs={12} sm={8} smOffset={2}>
                      <Image src="images/pic.jpg" className="about-profile-pic" rounded />
                      <h3>Tasha The Diva</h3>
                      <p>Happiness is found within. Do whatver to always stay happy without hurting others</p>
                      <p>Have friends is good, real friends. But do not let your joy be their happiness.</p>
                      <p>Instead let them find happiness and laughter whenever you are happiness</p>
                  </Col>
              </Grid>
            </div>
        );
    }
}

export default About;