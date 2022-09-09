import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Info from './pages/Info';
import {useState} from 'react';
import {createBrowserHistory} from "history";



function App({history}) {

  return (
    <div className="App">
      <header className="App-header">
      {console.log('luck228')}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/info" element={<Info /> }></Route>
        </Routes>
        <button onClick={history.push("/home")}>push</button>
      </header>
    </div>
  );
}

export default App;
