import React, { useState } from 'react';
import morningImage from '../assets/morning.jpg';
import afternoonImage from '../assets/afternoon.jpg';
import eveningImage from '../assets/evening.jpg';

const GreetingCard = () => {
  const [userType, setUserType] = useState('guest');
  const [timeOfDay, setTimeOfDay] = useState('morning');

  const getBackgroundImage = () => {
    switch (timeOfDay) {
      case 'morning':
        return morningImage;
      case 'afternoon':
        return afternoonImage;
      case 'evening':
        return eveningImage;
      default:
        return '';
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* Card Content */}
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h1>
            {userType === 'guest'
              ? 'Hello! Welcome to Perminant.'
              : userType === 'returning'
              ? 'Welcome back to Perminant!'
              : 'Admin access granted.'}
          </h1>
          <h2>Have a great {timeOfDay}!</h2>

          <div style={{ marginTop: '20px' }}>
            <label>User Type: </label>
            <select onChange={(e) => setUserType(e.target.value)} value={userType}>
              <option value="guest">Guest</option>
              <option value="returning">Returning</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div style={{ marginTop: '20px' }}>
            <label>Time of Day: </label>
            <select onChange={(e) => setTimeOfDay(e.target.value)} value={timeOfDay}>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
