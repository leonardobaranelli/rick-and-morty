import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({ id, name, status, species, gender, origin, image }) => {

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const userId = useSelector((state) => state.userId); 
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, origin, image }, userId));
    }
  };

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  return (
    <div className={style.mainContainer}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>      
      <img src={image} alt="Character" />
      <Link to={`/details/${id}`}>
        <h2>{name}</h2>
      </Link>     
      <div>
        <p style={{ color: 'black' }}>Specie: <span className={style.detail}>{species}</span></p>
        <p style={{ color: 'black' }}>Gender: <span className={style.detail}>{gender}</span></p>
        <p style={{ color: 'black' }}>Origin: <span className={style.detail}>{origin}</span></p>        
      </div> 
    </div>    
  );
};

export default Card;