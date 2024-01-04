import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SidePanel.css";

import Townhall from "./Townhall";

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    switch (selectedOption) {
      case "TOWN HALL":
        break;
    }
  };

  return (
    <div class="hv1">
        <p id="a5" style={{color:'white',fontSize:'3vh'}}>COIMBATORE</p>
        <div class="hv2">
            <Link to='/gandhi'><p style={{color:'white',fontSize:'3vh'}}>GANDHIPURAM</p></Link>
            <Link to='/townhall' ><p style={{color:'white',fontSize:'3vh'}}>TOWNHALL</p></Link>
            
            
        </div>
    </div>
  );
};

export default DropDown;
