import React from "react";
import "./Annunce.css";
import { ImCross } from "react-icons/im";
import { useState } from "react";
function Announce() {
  const [isActive, setIsActive] = useState(false);
  const remove = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  return (
    <>
      <div className={isActive ? 'announce-remove' : 'announce'}>
        <h2> Grab Discount Upto 25%</h2>
        <h2 className="close">
          <ImCross  onClick={remove} />
        </h2>
      </div>
    </>
  );
}

export default Announce;
