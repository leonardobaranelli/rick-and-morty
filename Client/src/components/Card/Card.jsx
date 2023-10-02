import React from 'react';
import style from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = ({ id, name, species, gender, origin, image }) => {

  return (
    <div className={style.container}>
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
