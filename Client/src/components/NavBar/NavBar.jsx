import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Nav = () => {   
   return (      
      <nav>          
         <Link to ="/about">About</Link><br/>
         <Link to ="/home">Home</Link><br/>         
         <Link to ="/favorites">Favorites</Link><br/>
         <Link to ="/createUser">Create User</Link>
      </nav>      
   );
}

export default Nav;