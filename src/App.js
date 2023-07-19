import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Home from './Home';
import About from './about'
import Contact from './contact';
import Header from './component/Header';


function App(){
  return (
    <div className="text-center">
    <Header/>
    <Routes>
    <Route path="/home"  element={<Home/>}/>    
    <Route path="/about"  element={<About/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
