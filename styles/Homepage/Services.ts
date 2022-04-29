import styled from "styled-components";

export const SContainer = styled.header`
  width: 100%;
  background-color: transparent;
  font-family: Inter, sans-serif;
  padding: 2em 0;
`;

export const SConstrain = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const SBoxSection = styled.div`
  background: url("https://cordialexchange.com/static/home-assets/images/s1.png");
  background-size: 50%;
  background-position: right;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
  width: 100%;
  background-color: white;
  padding: 2em;
  border-radius: 0.3em;
  color: #003e7c;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const Button = styled.div`
  background-color: #ffffff;
  color: #003e7c;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  width: 20%;

  &:active {
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: #003e7c;
    background-color: transparent;
    border: 2px solid #ffffff;
  }

  @media (max-width: 760px) {
    width: 40%;
  }
`;

export default SContainer;
