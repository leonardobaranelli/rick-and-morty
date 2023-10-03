import style from './App.module.css';
import { About, NavBar } from './components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Landing, Details } from './views';


function App() {

  const { pathname } = useLocation();

  return (
    <div className = {style.App}> 
    {pathname !== "/" && <NavBar /> }
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