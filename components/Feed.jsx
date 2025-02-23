import React from "react";
import Image from "next/image";
const Feed = ({ filteredCards, setfilteredCards }) => {
  console.log(filteredCards);
  return (
    <div>
      <div>
        {filteredCards.map((card) => {
          <div>
            <p>{filteredCards.description}</p>
            <h2>{filteredCards.price}</h2>
            <button>Book now</button>
            <h4></h4>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Feed;
