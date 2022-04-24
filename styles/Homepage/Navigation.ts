import styled from "styled-components";

export const NavigationContainer = styled.header`
  width: 100%;
  background-color: transparent;
  height: 80px;
`;

export const NavigationColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em 0;

  .navigation__item-set {
    gap: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  font-size: 2em;
  color: #3a3ad8;

  span {
    color: inherit;
    font-weight: 600;
  }
`;

export const Navigator = styled.div`
  font-size: 1.5em;

  ul {
    display: flex;
    gap: 1em;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      font-size: 1rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
    }

    li:hover {
      color: #3a3ad8;
    }
  }
`;

export const NavigationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4em;

  @media (max-width: 1000px) {
    flex: 1;
  }
`;

export const NavigationActionButtion = styled.div`
  width: auto;
  display: flex;
  gap: 2em;
  align-items: center;

  button {
    background-color: #3a3ad8;
    color: #ffffff;
    border: 1px solid transparent;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
      0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
  }

  a {
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export default NavigationContainer;
