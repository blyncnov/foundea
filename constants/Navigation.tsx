import React, { useState } from "react";
import Link from "next/link";

import { SiBaremetrics } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import {
  NContainer,
  NContainerColumn,
  NStrainColumn,
  NContainerRow,
  NListItems,
  Nmobile,
} from "../styles/Homepage/Navigation";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isClickedHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NContainer>
        <NContainerColumn>
          <NStrainColumn>
            <NContainerRow>
              <div className="N-controls">
                <div className="N-logo">
                  <SiBaremetrics style={{ fontSize: "3em" }} />
                </div>

                <NListItems onClick={isClickedHandler} click={isOpen}>
                  <li>Home</li>
                  <li>Personal</li>
                  <li>Business</li>
                  <li>Company</li>
                  <li>Help</li>
                </NListItems>
              </div>

              <div className="N-actions">
                <Link href="/login">Log in</Link>
                <button>Get Started</button>
              </div>

              <Nmobile onClick={isClickedHandler} className="N-mobile-controls">
                {isOpen ? (
                  <FaTimes style={{ fontSize: "1.5em" }} />
                ) : (
                  <RiBarChartHorizontalLine style={{ fontSize: "1.5em" }} />
                )}
              </Nmobile>
            </NContainerRow>
          </NStrainColumn>
        </NContainerColumn>
      </NContainer>
    </>
  );
};

export default Navigation;
