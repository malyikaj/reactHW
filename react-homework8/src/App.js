import './App.css';
import List from './components/List'
import SentimentAnalysis from './components/SentimentAnalysis'
import Reviews from './components/Reviews'
import WebsiteVisitors from './components/WebsiteVisitors'
import AverageRating from './components/AverageRating'



function App() {
  return (
    <div className="App">
      <List />
      <Reviews />
      <SentimentAnalysis />
      <AverageRating />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
