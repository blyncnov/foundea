import React from "react";

import { HContainer, HColumns, HRows } from "../../styles/Homepage/Hero";
import Image from "next/image";
import { BsCashCoin } from "react-icons/bs";

import Banner from "../../public/fintech.svg";

const Hero: React.FC = () => {
  return (
    <>
      <HContainer>
        <HColumns>
          <HRows>
            <h1>Fintech solutions and systems Organizations.</h1>
            <br />
            <p>
              We pay attention to digitalization and technological innovation
              that affect the banking and finance industries at every level. We
              thrive to stay competitive in the market.
            </p>
            <br />
            <h6>Fully Licensed by the ... No vex,  Ah dey joke ni jae 😂😂 . Nobody License am. </h6>
            <br />
            <div className="btn__display">
              <button>Get Started </button>
              <div className="text__display">
                <BsCashCoin style={{ fontSize: "2em" }} />
                <h4>Fast Payment</h4>
              </div>
            </div>
          </HRows>
          <HRows>
            <div className="Himage">
              <Image layout="responsive" alt="anem" src={Banner} />
            </div>
          </HRows>
        </HColumns>
      </HContainer>
    </>
  );
};

export default Hero;
