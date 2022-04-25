import React from "react";

import { Container } from "../../styles/Homepage/Header";

import Navigation from "../../constants/Navigation";
import Hero from "./Hero";

const Header: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <Hero />
    </Container>
  );
};

export default Header;
