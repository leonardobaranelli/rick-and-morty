import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom"; 
import { logout } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Nav = () => {   
   const dispatch = useDispatch();
   const _logout = () => { dispatch(logout())};

   return (      
      <nav className={style.mainContainer}>          
         <Link to ="/home">HOME</Link><br/>         
         <Link to ="/favorites">FAVORITES</Link><br/>         
         <Link to ="/about">ABOUT</Link><br/>
         <Link onClick={_logout}>LOGOUT</Link><br/>         
      </nav>      
   );
}

export default Nav;