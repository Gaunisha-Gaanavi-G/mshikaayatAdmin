import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter-sign.png";
import youtube from "../../images/youtube.png";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <Container id="first">
        <Row>
          <Col sm>
            <h4>Support Us</h4>
          </Col>
          <Col sm>
            <h4>About Charity</h4>
          </Col>
          <Col sm>
            <h4>Partners</h4>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm>
            <h4>
              <a href="">Donate to us</a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">Who we are</a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">Blog</a>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <h4>
              <a href="">Volunteer</a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">Who we work with</a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">Partnerships</a>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <h4>
              <a href="">Fundraise</a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">Our people</a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">Case studies</a>
            </h4>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col style={{ color: "#e63946" }}>&copy;MShikaayat India</Col>
        </Row>
      </Container>
      {/* </div> */}
      <Container id="second">
        <Row>
          <Col sm>
            <h4>Follow Us</h4>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm>
            <h4>
              <a href="">
                <img src={facebook} width="35px" height="35px" />
              </a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">
                <img src={youtube} width="40px" height="40px" />
              </a>
            </h4>
          </Col>
          <Col sm>
            <h4>
              <a href="">
                <img src={twitter} width="35px" height="35px" />
              </a>
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
