import React from 'react';
import AriesDailyApi from './AriesDailyApi';
import AquariusDailyApi from './AquariusDailyApi';

const DailyHoroscopes = () => (
  <div className="main-content">
    <h1>Daily Horoscopes</h1>
    <AriesDailyApi />
    <AquariusDailyApi />
  </div>
  
);

export default DailyHoroscopes;