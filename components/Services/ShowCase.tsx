import React from "react";

import {
  FaStumbleupon,
  FaStrava,
  FaStrikethrough,
  FaStar,
} from "react-icons/fa";

import {
  ShowcaseContainer,
  SConstrain,
  SectionCards,
  Button,
} from "../../styles/Homepage/ShowCase";

const ShowCase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <SConstrain>
        <SectionCards>
          <div className="card-text">
            <FaStumbleupon style={{ fontSize: "5.5em", color: "#003E7C" }} />
            <br />
            <br />
            <h2>Price-Friendly Exchange Rates</h2>
            <br />
            <p>
              Our exchange rates are the best you can find anywhere in Africa.
              With our Cordial Exchange, you can kiss low rates and excessive
              charges goodbye.
            </p>
            <br />
            <Button>Learn More→</Button>
          </div>

          <div className="card-text">
            <FaStar style={{ fontSize: "5.5em", color: "#003E7C" }} />
            <br />
            <br />
            <h2>Price-Friendly Exchange Rates</h2>
            <br />
            <p>
              Our exchange rates are the best you can find anywhere in Africa.
              With our Cordial Exchange, you can kiss low rates and excessive
              charges goodbye.
            </p>
            <br />
            <Button>Learn More→</Button>
          </div>

          <div className="card-text">
            <FaStrikethrough style={{ fontSize: "5.5em", color: "#003E7C" }} />
            <br />
            <br />
            <h2>Price-Friendly Exchange Rates</h2>
            <br />
            <p>
              Our exchange rates are the best you can find anywhere in Africa.
              With our Cordial Exchange, you can kiss low rates and excessive
              charges goodbye.
            </p>
            <br />
            <Button>Learn More →</Button>
          </div>

          <div className="card-text">
            <FaStrava style={{ fontSize: "5.5em", color: "#003E7C" }} />
            <br />
            <br />
            <h2>Price-Friendly Exchange Rates</h2>
            <br />
            <p>
              Our exchange rates are the best you can find anywhere in Africa.
              With our Cordial Exchange, you can kiss low rates and excessive
              charges goodbye.
            </p>
            <br />
            <Button>Learn More →</Button>
          </div>
        </SectionCards>
      </SConstrain>
    </ShowcaseContainer>
  );
};

export default ShowCase;
