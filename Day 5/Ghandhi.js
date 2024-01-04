import React, { useState,useEffect } from 'react';
import './Chennai.css';
import deluxeRoomImage from './imgs/room.jpg';
import executiveSuiteImage from './imgs/executivesuite.jpg';
import salar from './imgs/salar.webp';
import joe from './imgs/Joe.jpeg';
import { Link } from 'react-router-dom';
import {Checkbox} from '@mui/material';
import standardRoomImage from './imgs/standardroom.jpg';
import salar1 from './imgs/salar1.webp'
import './SidePanel.css';
import DropDown from './DropDown2.js';


const Ghandhi= () => {
  const roomsData = [
    { id: 1, name: 'Executive Suite',moviename:'KG CINEMAS',price: 250, location: 'GANDHIPURAM,BUS STAND', image:salar1,movie:'SALAR',showdate:'23/12/23',showtime:'5:00AM'},
    { id: 2, name: 'Deluxe Room',moviename:'KG CINEMAS',price: 150, location: 'GANDHIPURAM,CROSS CUT ROAD', image:joe,movie:'JOE',showdate:'23/12/23',showtime:'5:00AM'},
    
  ];

  const [guestCount, setGuestCount] = useState(0);
  const [executiveRoomCount, setExecutiveRoomCount] = useState(0);
  const [deluxeRoomCount, setDeluxeRoomCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [executivePrice,setExecutivePrice]=useState(0);
  const [deluxePrice,setDeluxePrice]=useState(0);



  const handleRoomCountChange = (value, roomType) => {
    if (roomType === 'executive') {
      setExecutiveRoomCount(Math.max(1, executiveRoomCount + value));
    } else if (roomType === 'deluxe') {
      setDeluxeRoomCount(Math.max(1, deluxeRoomCount + value));
    }
  };


  const calculateTotalPrice = () => {
    setExecutivePrice(executiveRoomCount * roomsData[0].price);
    setDeluxePrice(deluxeRoomCount * roomsData[1].price);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [executiveRoomCount, deluxeRoomCount]);

  useEffect(() => {
    setTotalPrice(executivePrice + deluxePrice);
  }, [executivePrice, deluxePrice]);

  return (
    <header>
      <DropDown />
      <div className="chennai-container">
        <div className="container">
          <div className="content">
            <h1>COIMBATORE</h1>
          </div>
          <h2>GANDHIPURAM</h2>
          <ul className="room-list">
            {roomsData.map((room) => (
              <li key={room.id} className="room-card">
                <img src={room.image} alt={room.name} />
                <div className="room-details">
                <h3>{room.cinename}</h3>
                  <p>Price: Rs.{room.price}</p>
                  <p>Location: {room.location}</p>
                  <p>Contact: {room.Contact}</p>
                  <p>Movie:{room.movie}</p>
                  <p>ShowDate:{room.showdate}</p>
                  <p>ShowTime:{room.showtime}</p>
                  <div style={{margin:'1px'}}>
                    
                    <p>Total Price: {room.name==='Executive Suite' ? executivePrice:deluxePrice}</p>
                    <p>Number of {room.moviename}/{room.movie} Tickets: {room.name === 'Executive Suite' ? executiveRoomCount : deluxeRoomCount}</p>
                    <br></br>
                    <button onClick={() => handleRoomCountChange(-1, room.name === 'Executive Suite' ? 'executive' : 'deluxe')}>-</button>
                    <button onClick={() => handleRoomCountChange(1, room.name === 'Executive Suite' ? 'executive' : 'deluxe')}>+</button>
                  </div>
                </div>
              </li>
            ))}
            
            <div>
              <p>Total PRICE: {totalPrice}</p>
              <div style={{marginLeft:'60vh'}}>
                <p>Accept Terms And Conditions and Proceed for Payment</p><Checkbox></Checkbox>
                <br></br>
                <Link to='/pay'><button>PROCEED</button></Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Ghandhi;
