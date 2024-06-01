import { FastField } from "formik";
import React from "react";

const Switch = ({name , label}) => {
  return (
    <div class="form-check form-switch">
      <FastField
       class="form-check-input"
       type="checkbox"
       name={name}
         />
      <label
       class="form-check-label" 
       for="flexSwitchCheckDefault">
        {label}
      </label>
    </div>
  );
};

export default Switch;
