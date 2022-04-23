import React from "react";

import { Container } from "../../styles/Homepage/Header";

import Navigation from "../../constants/Navigation";
import Footer from "../../constants/Footer";

const Header: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <Footer />
    </Container>
  );
};

export default Header;
