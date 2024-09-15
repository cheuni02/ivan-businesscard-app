import React from "react";
import { contactMap } from "../dataMaps/contactMap";
import { CategoryAndBulletPoints } from "../components";

const Contact = () => {
  return (
    <div className="contents contact">
      <h2>Get In Touch! ...</h2>
      {contactMap.map(({ label, contactMethod }) => {
        return (
          <CategoryAndBulletPoints category={label} bulletPoints={contactMethod} />
        );
      })}
    </div>
  );
};

export default Contact;
