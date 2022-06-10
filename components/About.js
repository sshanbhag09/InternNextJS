import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/About.module.css'

const About = () => {

  return (
    <section className={styles.About}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span>Me</span></h3>
              <p className="text-muted"> I am Sushant Shanbhag and I love to watch Movies and read Books</p>
              </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">My Interests and hobbies include</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h4 className="text-dark font-weight-light f-20 mb-3">Films</h4>
                <li className="text-muted font-weight-light">Inception</li>
                <li className="text-muted font-weight-light">Prestige</li>
                <li className="text-muted font-weight-light">Lord of Rings</li>
                <li className="text-muted font-weight-light">Hunger Games</li>
              </Col>
              <Col md={6}>
                <h4 className="text-dark font-weight-light f-20 mb-3">Our Vision</h4>
                <p className="text-muted font-weight-light">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;