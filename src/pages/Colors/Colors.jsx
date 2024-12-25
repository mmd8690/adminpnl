import React from "react";
import ColorTabele from "./ColorTabele";
import AddColor from "./AddColor";

const Color = () => {
  return (
    <div id="manage_color_section" className="add_color_section main_section">
      <h4 className="text-center my-3">مدیریت رنگ ها</h4>
      <ColorTabele />
    </div>
  );
};

export default Color;
