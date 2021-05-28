import React from 'react';
import AriesWeeklyApi from './AriesWeeklyApi'
import TaurusWeeklyApi from './TaurusWeeklyApi'
import GeminiWeeklyApi from './GeminiWeeklyApi'
import CancerWeeklyApi from './CancerWeeklyApi'
import LeoWeeklyApi from './LeoWeeklyApi'
import VirgoWeeklyApi from './VirgoWeeklyApi'
import LibraWeeklyApi from './LibraWeeklyApi'
import ScorpioWeeklyApi from './ScorpioWeeklyApi'
import SagittariusWeeklyApi from './SagittariusWeeklyApi'
import CapricornWeeklyApi from './CapricornWeeklyApi'
import AquariusWeeklyApi from './AquariusWeeklyApi'
import PiscesWeeklyApi from './PiscesWeeklyApi'


const WeeklyHoroscopes = () => (
  <div className="main-content">
    <h1>Weekly Horoscopes</h1>
    <AriesWeeklyApi />
    <TaurusWeeklyApi />
    <GeminiWeeklyApi />
    <CancerWeeklyApi />
    <LeoWeeklyApi />
    <VirgoWeeklyApi />
    <LibraWeeklyApi />
    <ScorpioWeeklyApi />
    <SagittariusWeeklyApi />
    <CapricornWeeklyApi />
    <AquariusWeeklyApi />
    <PiscesWeeklyApi />
  </div>
  
);

export default WeeklyHoroscopes;