import React from 'react';
import AriesDailyApi from './AriesDailyApi';
import TaurusDailyApi from './TaurusDailyApi';
import GeminiDailyApi from './GeminiDailyApi';
import CancerDailyApi from './CancerDailyApi';
import LeoDailyApi from './LeoDailyApi';
import VirgoDailyApi from './VirgoDailyApi';
import LibraDailyApi from './LibraDailyApi';
import ScorpioDailyApi from './ScorpioDailyApi';
import SagittariusDailyApi from './SagittariusDailyApi';
import CapricornDailyApi from './CapricornDailyApi';
import AquariusDailyApi from './AquariusDailyApi';
import PiscesDailyApi from './PiscesDailyApi';


const DailyHoroscopes = () => (
  <div className="main-content">
    <h1>Daily Horoscopes</h1>
    <AriesDailyApi />
    <TaurusDailyApi />
    <GeminiDailyApi />
    <CancerDailyApi />
    <LeoDailyApi />
    <VirgoDailyApi />
    <LibraDailyApi />
    <ScorpioDailyApi />
    <SagittariusDailyApi />
    <CapricornDailyApi />
    <AquariusDailyApi />
    <PiscesDailyApi />
  </div>
  
);

export default DailyHoroscopes;