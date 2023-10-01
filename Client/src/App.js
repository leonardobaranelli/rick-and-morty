import style from './App.module.css';
import { About, CardsContainer } from './components';
import {  Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className = {style.App}> 
         <Routes>      
            <Route path = "/home" element = {<SearchBar />} /> 
            <Route path = "/home" element = {<CardsContainer />} />         
            <Route path = "/about" element = {<About />}/>            
         </Routes>          
      </div>
  );
}

export default App;