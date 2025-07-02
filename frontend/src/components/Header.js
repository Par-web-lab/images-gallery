import React from "react";
import { Navbar, Container} from "react-bootstrap";
import { ReactComponent as Logo} from "../images/logo.svg";


const navbarStyle = {
  backgroundColor: "#e3ebf7"
}

const Header = ({ title }) => {
  return (
    <Navbar style = {navbarStyle} variant="light">
    <Container>
      <Logo alt ={title} style={{ maxWidth: '16rem', maxHeight: '5rem'}} />
    </Container>
    </Navbar>
  );
};

export default Header;