import styled from "styled-components";

interface clickProps {
  click: boolean;
}

export const NContainer = styled.header`
  width: 100%;
  // background-color: #3A3AD8;
  // height: 80px;
`;

export const NContainerColumn = styled.div`
  width: 100%;
  padding: 1.5em 0;

  @media (max-width: 768px) {
    padding: 2em 0;
  }
`;

export const NStrainColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const NContainerRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .N-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4em;

    .N-logo {
      color: #3a3ad8;
      cursor: pointer;
    }
  }

  .N-actions {
    display: flex;
    gap: 2em;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .N-mobile-controls {
    display: none;
    z-index: 2;
    cursor: pointer;
    color: grey;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const NListItems = styled.ul<clickProps>`
  display: flex;
  gap: 1em;

  li {
    color: black;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media (max-width: 768px) {
      color: #ffffff;
      margin: 1em 0;
    }
  }

  li:hover {
    color: #3a3ad8;

    @media (max-width: 768px) {
      color: #dfd9f8;
    }
  }

  @media (max-width: 768px) {
    display: ${({ click }) => (click ? "block" : "none")};
    position: absolute;
    width: 100%;
    color: white;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #3a3ad8;
    padding: 1em 2em;
    transition: all 0.5s ease-in-out;
  }
`;

export const Nmobile = styled.div`
  width: auto;
`;

export default NContainer;
