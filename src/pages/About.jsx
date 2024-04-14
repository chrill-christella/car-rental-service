import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                
We are dedicated to ensuring that every ride with us is not just a journey, 
but a safe and secure experience. Our commitment to safety begins with our rigorous vehicle 
maintenance protocols, where every car in our fleet undergoes thorough inspections 
to meet the highest safety standards. From routine checks to advanced safety features,
 we prioritize your well-being on the road
                </p>

                <p className="section__description">
                Beyond our vehicles, we invest in training our drivers to 
                prioritize safe driving practices and passenger comfort. 
                Our team is equipped with the knowledge and skills to
                 navigate diverse road conditions while prioritizing the safety of everyone on board.
                 We believe that safe transportation is not just a service; 
                it's our promise to you for every ride, every time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <BecomeDriverSection /> */}

      <section>
        {/* <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container> */}
      </section>
    </Helmet>
  );
};

export default About;
