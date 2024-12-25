import React from "react";
import GurantiTabele from "./gurantiTabele";
import AddGuranti from "./AddGuranti";

const Guranti = () => {
  return (
    <div
      id="manage_guarantee_section"
      className="manage_guarantee_section main_section"
    >
      <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
      <GurantiTabele />
    </div>
  );
};

export default Guranti;
