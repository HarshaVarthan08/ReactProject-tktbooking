import React, { useState } from 'react';
import './Chennai.css'; // Make sure to import the CSS file
import SidePanel from './SidePanel.js';
import deluxeRoomImage from './imgs/room.jpg';
import executiveSuiteImage from './imgs/executivesuite.jpg';
import standardRoomImage from './imgs/standardroom.jpg';
import salar from './imgs/salar.webp';
import './SidePanel.css';
import salar1 from './imgs/salar1.webp';
import fight from './imgs/fightclub.webp';
import joe from './imgs/Joe.jpeg';


const Chennai = () => {
  const roomsData = [
    { id: 1, moviename:'salar',name: 'RAKKI CINEMAS', price: 250, location: 'T.NAGAR', image:salar1},
    { id: 2,moviename:'Joe', name: 'ROHINI CINEMAS', price: 190, location: 'ECR', image:joe},
    { id: 3,moviename:'salar', name: 'RAKKI CINEMAS', price: 250, location: 'ECR', image:fight},
  ];

  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);

  const handleGuestCountChange = (value) => {
    setGuestCount(Math.max(1, guestCount + value));
  };

  const handleRoomCountChange = (value) => {
    setRoomCount(Math.max(1, roomCount + value));
  };

  return (
  <header>

        <SidePanel />
      <div className="chennai-container">
        <div className="container">
        <div className="content">
         
         
          </div>
            <h2>CHENNAI SCREENS</h2>
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

export default Chennai;
