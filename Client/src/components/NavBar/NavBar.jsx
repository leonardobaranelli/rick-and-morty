import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Nav = () => {   
   return (      
      <nav>          
         <Link to ="/about">About</Link><br/>
         <Link to ="/home">Home</Link><br/>         
      </nav>      
   );
}

export default Nav;