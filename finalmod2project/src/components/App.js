import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Teachers from './Teachers.js';
import Header from './Header';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" render= { () => <About title='About' />} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;
