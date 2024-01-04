import React, { useState,useEffect} from 'react';
import './Chennai.css'; 
import SidePanel from './SidePanel.js';
import deluxeRoomImage from './imgs/room.jpg';
import salar from './imgs/salar.webp';
import joe from './imgs/Joe.jpeg';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import executiveSuiteImage from './imgs/executivesuite.jpg';
import standardRoomImage from './imgs/standardroom.jpg';
import './SidePanel.css';


const Tnagar= () => {
  const roomsData = [
    { id: 1, name: 'Executive Suite',cinename:'RAKKI CINEMAS',price: 250, location: 'T.NAGAR,BUS STAND', image:salar,movie:'SALAR',showdate:'23/12/23',showtime:'5:00AM'},
    { id: 2, name: 'Standard Room',cinename:'ROHINI CINEMAS',price: 190, location: 'T.NAGAR,ELECTRONIC STREET', image:joe,movie:'JOE',showdate:'23/12/23',showtime:'5:00AM'},
    
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
      <SidePanel />
      <div className="chennai-container">
        <div className="container">
          <div className="content">
            <h1>CHENNAI</h1>
          </div>
          <h2>TNAGAR</h2>
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
                    <p>Number of {room.movie.name} Tickets: {room.name === 'Executive Suite' ? executiveRoomCount : deluxeRoomCount}</p>
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

export default Tnagar;
