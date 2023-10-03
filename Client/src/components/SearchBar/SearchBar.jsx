import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharById } from "../../redux/actions";

export default function SearchBar() {
  
  const dispatch = useDispatch();   
  const [id, setId] = useState("");

  const handleChange = (event) => { 
    setId(event.target.value);
  };

  const handleSearch = () => {    
    dispatch(getCharById(id));
    setId("");
  };

  return (
    <div className={style.mainContainer}>
      <input className={style.input} type="search" onChange={event => handleChange(event)} placeholder="Search a character" />     
      <button className={style.button} onClick={handleSearch}> search </button>
    </div>
  );
}

