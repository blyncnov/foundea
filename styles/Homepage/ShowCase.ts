import styled from "styled-components";

export const ShowcaseContainer = styled.header`
  width: 100%;
  background-color: transparent;
  padding: 2em 0;
`;

export const SConstrain = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;
export const SectionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;

  .card-text {
    background-color: #f5f5f5;
    padding: 2em 1.5em;
    border-radius: 0.3em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    h2 {
      color: #003e7c;
    }

    p {
      color: black;
      opacity: 0.9;
    }

    buton {
      opacity: 0.9;
    }
  }
`;

export const Button = styled.div`
  background-color: transparent;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-align: start;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  padding: 12px 0;
  border-radius: 4px;
  cursor: pointer;
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

//   @media (max-width: 760px) {
//     width: 40%;
//   }
`;

export default ShowcaseContainer;
