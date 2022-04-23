import React, { useState } from "react";

import { SiBaremetrics } from "react-icons/si";
import { FaBars , FaTimes} from "react-icons/fa";

import {
  NavigationContainer,
  NavigationContainerWrapper,
  NavigationMaxLength,
  NavigationDivider,
  Navigator,
} from "../styles/Homepage/Navigation";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isClickedHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationContainer>
        <NavigationContainerWrapper>
          <NavigationMaxLength>
            <div className="container__flex">
              <div className="container__flex">
                <NavigationDivider>
                  <div className="logo">
                    <SiBaremetrics />
                    <h1>Foundea</h1>
                  </div>
                </NavigationDivider>
                <NavigationDivider>
                  <Navigator>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                  </Navigator>
                </NavigationDivider>
              </div>

              <NavigationDivider>
                <div className="logo" onClick={isClickedHandler}>
                  {isOpen ? <FaTimes /> : <FaBars />}
                </div>
              </NavigationDivider>
            </div>
          </NavigationMaxLength>
        </NavigationContainerWrapper>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
