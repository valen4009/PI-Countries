import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
// import About from './components/About.jsx/About';
import LandingPage from './components/LandingPage/LandingPage';
// import Home from './components/Home/Home';
import Cards from './components/Cards/Cards.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/' element= {<LandingPage/>}/>
          <Route path='/home' element= {<Cards/>}/>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
    </div>
  );
}

export default App;
