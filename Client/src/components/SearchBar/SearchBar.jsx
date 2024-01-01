import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharById } from "../../redux/actions";
import { Alert} from "../../components";

export default function SearchBar() {
  
  const dispatch = useDispatch();   
  const [id, setId] = useState("");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const handleChange = (event) => { 
    setId(event.target.value);
  };
  
  const handleSearch = async () => {
    if(id === undefined || id === null ) return;
    
    try {      
      await dispatch(getCharById(id));                 
      setId("");      
      showAlert("Character found!", 'success')
    } catch {
      showAlert("Please insert a valid ID", 'error')
    }
  };  

  return (
    <>
    <span className={style.alert} >{alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}</span>
    <div className={style.mainContainer}>
      <input className={style.input} type="search" onChange={event => handleChange(event)} placeholder="Search a character" />     
      <button className={style.button} onClick={handleSearch}> SEARCH </button>
    </div>
    </>
  );
}

