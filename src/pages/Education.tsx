import React from "react";
import { educationMap } from "../dataMaps/educationMap";

const Education = () => {
  return (
    <div className="contents education">
      <h2>Educated at ...</h2>
      {educationMap.map((school) => {
        return <p>{school}</p>;
      })}
    </div>
  );
};

export default Education;
