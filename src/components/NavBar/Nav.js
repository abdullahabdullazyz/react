import React from "react";
import dataCategory from './Nav_Module/Fmap.js';



const Nav = ({ dataC }) => {
  return (
    <>
      {dataC.length > 0 && <div className="tab">
      {dataCategory(dataC)}</div>}
    </>
  );
};

export default Nav;