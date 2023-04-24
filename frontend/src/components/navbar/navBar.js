import React from "react";
import NavBar from "./navBar.module.css";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";

const navBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NS Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Row>
            <Col xs={6} md={4}>
              <Image src="" roundedCircle className={NavBar.img} />
              <div className={NavBar.submenu}>
                <div className={NavBar.sub}>
                  <div className={NavBar.user}>
                    <img
                      alt=""
                      src="./1177568.png"
                      className={NavBar.img1}
                    ></img>
                    <h3>Thilina Hansana</h3>
                  </div>
                  <hr></hr>
                  <a href="#" className={NavBar.link}>
                    <p>Dashboard</p>
                    <span>{">"}</span>
                  </a>
                  <a href="#" className={NavBar.link}>
                    <p>Profiile</p>
                    <span>{">"}</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default navBar;
