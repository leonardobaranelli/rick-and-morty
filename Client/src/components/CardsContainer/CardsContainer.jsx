import React from 'react';
import { useSelector } from 'react-redux';
import style from './Cards.module.css';
import Card from '../Card/Card.jsx';

const CardsContainer = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={style.container}>
      {characters.map(({ id, name, species, gender, origin, image }) => (
        <Card
          id={id}
          name={name}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          key={id}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
