import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from './Redux/actions';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch])

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}     
        <Routes>
          <Route path='/' element= {<LandingPage/>}/>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/:id' element= {<Detail/>}/>
          <Route path='/form' element= {<Form/>}/>
          <Route/>
        </Routes>
    </div>
  );
}

export default App;
