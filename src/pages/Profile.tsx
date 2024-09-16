import React from "react";
import { profileBulletPointsMap } from "../dataMaps";
import CategoryAndBulletPoints from "../components/CategoryAndBulletPoints";

const Profile = () => {
  return (
    <div className="contents profile">
      <h2>Ivan Cheung</h2>
      <p>
        Senior test automation engineer with 6+ years experience. Specialises
        in:
      </p>
      {profileBulletPointsMap.map(({ title, bulletPoints }) => {
        return (
          <CategoryAndBulletPoints category={title} bulletPoints={bulletPoints} />
        );
      })}
    </div>
  );
};

export default Profile;
