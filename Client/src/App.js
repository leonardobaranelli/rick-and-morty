import style from './App.module.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { About, NavBar, Favorites } from './components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home, Landing, Details, CreateAccount } from './views';

function App() {

  const { pathname } = useLocation();
  const loginState = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState.access) {            
        navigate("/");
    }
  }, [loginState]);

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