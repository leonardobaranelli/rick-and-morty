import React from 'react';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';
import { Card } from '../index';

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
