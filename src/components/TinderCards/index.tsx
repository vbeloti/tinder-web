import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./styles.css";

const TinderCards: React.FC = () => {
  const [people, setPeople] = useState([
    {
      name: "Dwayne Johnson ",
      url:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjM5ODg2MzUx/dwayne-johnson-11818916-1-402.jpg",
    },
    {
      name: "Beyoncé Knowles",
      url:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <div className="swipe">
            <TinderCard
              preventSwipe={["up", "down"]}
              key={person.name}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
