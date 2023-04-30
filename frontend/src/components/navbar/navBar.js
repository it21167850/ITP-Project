import React from "react";
import NavBar from "./navBar.module.css";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";

const navBar = () => {
  function toggleMenu() {
    const subMenu = document.getElementById("subMenu");
    subMenu.style.maxHeight = "200px";

    function handleDocumentClick(event) {
      if (!subMenu.contains(event.target)) {
        subMenu.style.maxHeight = "0";
        document.removeEventListener("click", handleDocumentClick);
      }
    }

    setTimeout(() => {
      document.addEventListener("click", handleDocumentClick);
    }, 0);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className={NavBar.nav}>
        <Container>
          <Navbar.Brand href="#home">NS Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Row>
            <Col>
              <div className={NavBar.noti}>
                <NotificationAddIcon />
              </div>
              <Image
                roundedCircle
                className={NavBar.img}
                onClick={toggleMenu}
              />

              <div className={NavBar.submenu} id="subMenu">
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
                  <a href="#dash" className={NavBar.link}>
                    <p>Dashboard</p>
                  </a>
                  <a href="#profile" className={NavBar.link}>
                    <p>Profile</p>
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
