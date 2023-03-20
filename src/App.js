import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import SingleBeer from './views/SingleBeer';

function App() {
  const URL = useLocation();
  return (
    <div className="App">
      {URL.pathname !== "/" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/beers/:beerId" element={<SingleBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
