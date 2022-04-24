import React, { useState } from "react";
import Link from "next/link";

import { SiBaremetrics } from "react-icons/si";

import {
  NavigationContainer,
  NavigationColumn,
  Logo,
  Navigator,
  NavigationSection,
  NavigationActionButtion,
} from "../styles/Homepage/Navigation";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isClickedHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationContainer>
        <NavigationColumn>
          <div className="navigation__item-set">
            <NavigationSection>
              <Logo>
                <SiBaremetrics />
                <span>Foundea</span>
              </Logo>

              <Navigator>
                <ul>
                  <li>Home</li>
                  <li>Personal</li>
                  <li>Company</li>
                  <li>Services</li>
                  <li>Help</li>
                </ul>
              </Navigator>
            </NavigationSection>

            <>
              <NavigationActionButtion>
                <Link href="/home">Log in</Link>
                <button type="submit">Get Started</button>
              </NavigationActionButtion>
            </>
          </div>
        </NavigationColumn>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
