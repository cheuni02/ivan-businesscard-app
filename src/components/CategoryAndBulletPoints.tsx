import React from "react";

interface CategoryAndBulletPointsProps {
  category: string;
  bulletPoints: string[];
}

const CategoryAndBulletPoints = ({
  category,
  bulletPoints,
}: CategoryAndBulletPointsProps) => {
  return (
    <div className="category-and-bullet-points">
      <p>{category}</p>
      <ul>
        {bulletPoints.map((bulletPoint) => {
          return <li>{bulletPoint}</li>;
        })}
      </ul>
    </div>
  );
};

export default CategoryAndBulletPoints;
