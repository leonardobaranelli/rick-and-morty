import style from './App.module.css';
import { About } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views';

function App() {
  return (
    <div className = {style.App}> 
         <Routes>      
            <Route path = "/home" element = {<Home />} />         
            <Route path = "/about" element = {<About />}/>            
         </Routes>          
      </div>
  );
}

export default App;