import React from "react";
import { experienceMap } from "../dataMaps/experienceMap";

const Experience = () => {
  return (
    <div className="contents experience">
      <h2>Worked at ... </h2>
      {experienceMap.map((company) => {
        return <p>{company}</p>;
      })}
    </div>
  );
};

export default Experience;
