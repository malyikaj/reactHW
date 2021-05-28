import React from 'react';
import { 
  BrowserRouter,
  Route
 } from 'react-router-dom';
 //App components
 import Header from './Header';
 import Home from './Home';
 import DailyHoroscopes from './DailyHoroscopes';
 import WeeklyHoroscopes from './WeeklyHoroscopes';
 import AboutUs from './AboutUs';

 // <BrowserRouter> Wraps all App components. Renders the route router.
{/* Route path goes to relative path and the component to render is in {Curly braces} */}
{/* The 'exact' path instructs the router to render the component ONLY when the path matches the URL exactly  */}


const App = () => (

  <BrowserRouter>
     <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/DailyHoroscopes" component={DailyHoroscopes}/>
      <Route path="/WeeklyHoroscopes" component={WeeklyHoroscopes} />
      <Route path="/AboutUs" component={AboutUs} />
    </div>
  </BrowserRouter>
 
);

export default App;