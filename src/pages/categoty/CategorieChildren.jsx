import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PrevpageButton from "../../componenet/PrevpageButton";

const CategorieChildren = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <>
      <div className="py-3 d-flex justify-content-between" >
        <h5 className="text-center">
          <span>زیر گروه:</span>
          <span className="text-info">
            {location.state.parentData.title}
          </span>
        </h5>
        <PrevpageButton/>
      </div>
    </>
  );
};

export default CategorieChildren;
