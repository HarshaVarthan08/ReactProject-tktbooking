// SidePanel.js

import React, { useState } from 'react';
import './SidePanel.css'; 
import { Link } from 'react-router-dom';

const SidePanel = () => {
  

  
  const [selectedValue, setSelectedValue] = useState('');

  
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);

   
  };

  return (
    <div class="hv1" style={{color:'white',fontSize:'4vh'}}>
      <div style={{color:'white',fontSize:'4vh'}}>

          <p id="a5" style={{color:'white',fontSize:'3vh'}}>CHENNAI</p>
          <div class="hv2">
              <Link to='/Tnagar'><p style={{color:'white',fontSize:'3vh'}}>T.NAGAR</p></Link>
              <Link to='/ecr'><p style={{color:'white',fontSize:'3vh'}}>ECR</p></Link>
              
              
          </div>
      </div>
    </div>
  );
};


export default SidePanel;
