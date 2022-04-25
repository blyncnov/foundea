import styled from "styled-components";

export const HContainer = styled.header`
  width: 100%;
  background-color: transparent;
  font-family: Inter, sans-serif;
`;

export const HColumns = styled.header`
  background-color: transparent;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 2em;
  padding: 2em 0 3em;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 5px;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const HRows = styled.header`
  background-color: transparent;
  width: 100%;
  position: relative;

  h1 {
    font-size: 3rem;
    line-height: 40px;
    font-weight: 700;
    color: #041834;
  }

  p,
  h6 {
    opacity: 0.7;
    font-weight: 400;
    line-height: 1.5;
    font-family: open sans;
  }

  button {
    background-color: white;
    color: #328eb7;
    border: 1px solid transparent;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
      0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-in-out, color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  button:hover {
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: #133e7c;
    background-color: transparent;
    border: 2px solid white;
  }

  .btn__display,
  .text__display {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  .text__display {
    justify-content: center;
    gap: 0.4em;

    h4 {
      color: #333;
    }
  }

  .animate {
    width: auto;
    position: absolute;
  }

  .top-right {
    right: 0;
    top: -2.5em;
  }

  .top-left {
    left: 0;
    top: -2.5em;
  }

  .down-left {
    bottom: -2.5em;
    left: 0;
  }

  .down-right {
    bottom: 0;
    right: 0;
  }

  @media (max-width: 760px) {
    .down-right {
      display: none;
    }

    .top-left {
      display: none;
    }

    h1 {
      font-size: 2rem;
      line-height: 35px;
    }
  }

  .Himage img {
    width: 100% !important;
  }
`;

export default HContainer;
