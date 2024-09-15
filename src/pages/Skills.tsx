import React from "react";
import CategoryAndBulletPoints from "../components/CategoryAndBulletPoints";
import { skillsMap } from "../dataMaps";

const Skills = () => {
  return (
    <div className="contents skills">
      <h2>Toolbox ...</h2>
      {skillsMap.map(({ category, skills }) => {
        return <CategoryAndBulletPoints category={category} bulletPoints={skills} />;
      })}
    </div>
  );
};

export default Skills;
