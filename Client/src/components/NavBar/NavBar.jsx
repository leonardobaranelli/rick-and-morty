import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom"; 

const Nav = () => {   
   return (      
      <nav className={style.mainContainer}>          
         <Link to ="/home">HOME</Link><br/>         
         <Link to ="/favorites">FAVORITES</Link><br/>         
         <Link to ="/about">ABOUT</Link><br/>
      </nav>      
   );
}

export default Nav;