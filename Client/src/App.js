import style from './App.module.css';
import { About, NavBar, Favorites } from './components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Landing, Details, CreateAccount } from './views';

function App() {

  const { pathname } = useLocation();

  return (
    <div className = {style.App}> 
    {pathname !== "/" && pathname !== "/createAccount" && <NavBar /> }
         <Routes>      
            <Route path = "/" element = {<Landing />} />
            <Route path = "/home" element = {<Home />} />    
            <Route path = "/details/:id" element = {<Details />} />    
            <Route path = "/about" element = {<About />}/>                
            <Route path = "/favorites" element = {<Favorites />}/>
            <Route path = "/createAccount" element = {<CreateAccount />}/>         
         </Routes>          
      </div>
  );
}

export default App;