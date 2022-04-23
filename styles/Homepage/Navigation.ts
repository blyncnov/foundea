import styled from "styled-components";

export const NavigationContainer = styled.header`
  width: 100%;
  background-color: transparent;
  height: 80px;
  //   background-color: #3a3ad8;
`;

export const NavigationContainerWrapper = styled.div`
  width: auto;
  padding: 1em 0;
`;

export const NavigationMaxLength = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;

  .container__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4em;
  }
`;

export const NavigationDivider = styled.div`
  width: auto;

  .logo {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3a3ad8;
    cursor: pointer;

    h1 {
      color: #270327;
      font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      cursor: pointer;
      font-size: 2rem;
    }
  }
`;

export const Navigator = styled.ul`
  width: auto;
  display: flex;
  gap: 1em;
  align-items: center;

  li {
    list-style: none;
    cursor: pointer;
    font-weight: 600;
    color: #270327;
    transition: all 0.3s ease-in-out;
  }

  li:hover {
    color: #3a3ad8;
  }


  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavigationContainer;
