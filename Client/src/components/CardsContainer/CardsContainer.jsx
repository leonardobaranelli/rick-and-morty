import React from 'react';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';
import { Card } from '../index';

const CardsContainer = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={style.mainContainer}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => (
        <Card    
          id={id}      
          name={name}
          status={status}
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
