import React, { useState } from 'react';
import './Chennai.css';
import deluxeRoomImage from './imgs/room.jpg';
import executiveSuiteImage from './imgs/executivesuite.jpg';
import standardRoomImage from './imgs/standardroom.jpg';
import fight from './imgs/fightclub.webp';
import joe from './imgs/Joe.jpeg';
import './SidePanel.css';
import salar from './imgs/salar.webp';
import DropDown from './DropDown2.js';
import salar1 from './imgs/salar1.webp'


const Coimbatore = () => {
  const roomsData = [
    { id: 1,moviename:'FightClub', name: 'Executive Suite', price: 150, location: 'GANDHIPURAM', image:fight},
    { id: 2, name: 'Deluxe Room', price: 190, location: 'TOWNHALL', image:joe},
    { id: 3, moviename:'salar',name: 'Standard Room', price: 250, location: 'UKKADAM', image:salar1},
  ];

 
  

  return (
  <header>

        <DropDown />
      <div className="chennai-container">
        <div className="container">
        <div className="content">
          
          <h1>COIMBATORE</h1>
          </div>
            
            <div className="counter-container">
            </div>
            <ul className="room-list">
              {roomsData.map((room) => (
                <li key={room.id} className="room-card">
                  <img src={room.image} alt={room.name} />
                  <div className="room-details">
                    <h3>{room.name}</h3>
                    <p>Price: Rs.{room.price}</p>
                    <p>Location: {room.location}</p>
                    <p>MovieName: {room.moviename}</p>
                   
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
  </header>
  );
};

export default Coimbatore;
