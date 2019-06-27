import React, { Component } from 'react';
import { Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import './News.css';


class News extends Component {
    render() {
        return (
            <div>
                <Carousel className="carousel">
            <Carousel.Item className="Island">
              <img  alt="Bracelet" src="images/bracelet.jpg" />
            </Carousel.Item>
            <Carousel.Item className="Island">
              <img  alt="Shoe" src="images/black.jpg" />
            
            </Carousel.Item>
            <Carousel.Item className="falls">
              <img alt="Lips" src="images/lips.jpg" />
              
            </Carousel.Item>
            <Carousel.Item className="Trees">
              <img alt="Nude" src="images/nude1.jpg" />
              
            </Carousel.Item>
            <Carousel.Item className="Trees">
              <img alt="Couple" src="images/couple.jpg" />
              
            </Carousel.Item>
            <Carousel.Item className="Trees">
              <img alt="Ring" src="images/rings.jpg" />
             
            </Carousel.Item>
          </Carousel>
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Just a happy little shadow that lives in there. We'll put a happy little bush here. Let's put a touch more of the magic here.</p>
                            <p>There is immense joy in just watching - watching all the little creatures in nature. And maybe a little bush lives there. Let's make a happy little mountain now. You can work and carry-on and put lots of little happy things in here. Absolutely no pressure. You are just a whisper floating across a mountain.</p>
                            <p>When you buy that first tube of paint it gives you an artist license. You can do anything here. So don't worry about it. You have to make these big decisions.</p>
                            <p>Brown is such a nice color. There's not a thing in the world wrong with washing your brush. Maybe there's a happy little waterfall happening over here. We'll take a little bit of Van Dyke Brown.</p>
                            <p>We touch the canvas, the canvas takes what it wants. The man who does the best job is the one who is happy at his job. This piece of canvas is your world. You can do anything your heart can imagine. This is your world.</p>
                            <p>If you hypnotize it, it will go away. Let your heart be your guide. We'll play with clouds today. We don't want to set these clouds on fire. There we are.</p>
                            <p>It takes dark in order to show light. Life is too short to be alone, too precious. Share it with a friend. How to paint. That's easy. What to paint. That's much harder.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="images/bonding.jpg" />
                            <p>It takes dark in order to show light. Life is too short to be alone, too precious. Share it with a friend. How to paint. That's easy. What to paint. That's much harder.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default News;