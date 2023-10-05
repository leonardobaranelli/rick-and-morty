import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({ id, name, species, gender, origin, image }) => {

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ name, species, gender, origin, image, id }));
    }
  };

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  return (
    <div className={style.container}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>      
      <img src={image} alt="Character" />
      <Link to={`/details/${id}`}>
        <h2>{name}</h2>
      </Link>      
      <p>{`Species: ${species}`}</p>
      <p>{`Gender: ${gender}`}</p>
      <p>{`Origin: ${origin}`}</p>
    </div>    
  );
};

export default Card;