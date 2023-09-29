import React from 'react';
import style from "./Card.module.css";

const Card = ({ name, species, gender, origin, image }) => {

  return (
    <div className={style.container}>
      <img src={image} alt="Character" />
      <h2>{name}</h2>
      <p>{`Species: ${species}`}</p>
      <p>{`Gender: ${gender}`}</p>
      <p>{`Origin: ${origin}`}</p>
    </div>
  );
};

export default Card;
