import style from './App.module.css';
import { About } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home, Landing } from './views';
import Details from './views/Details/Details';

function App() {
  return (
    <div className = {style.App}> 
         <Routes>      
            <Route path = "/" element = {<Landing />} />
            <Route path = "/home" element = {<Home />} />    
            <Route path = "/details/:id" element = {<Details />} />     
            <Route path = "/about" element = {<About />}/>            
         </Routes>          
      </div>
  );
}

export default App;