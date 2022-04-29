import React from "react";

import {
  SContainer,
  SConstrain,
  SBoxSection,
  Button,
} from "../../styles/Homepage/Services";

const Services: React.FC = () => {
  return (
    <SContainer>
      <SConstrain>
        <SBoxSection>
          <div className="S-Text">
            <h1>Ready To Start Exchanging ?</h1>
            <br />
            <p>Create a free account on Foundea to get started!</p>
            <br />
            <br />
          </div>
          <Button>Sign Up →</Button>
        </SBoxSection>
      </SConstrain>
    </SContainer>
  );
};

export default Services;
