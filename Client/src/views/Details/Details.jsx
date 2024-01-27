import React from "react";
import style from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharDetails, cleanDetails } from "../../redux/actions";

const Details = () => {

    const { id } = useParams();       
      
      const dispatch = useDispatch();
      const { name, image, status, species, gender, origin, location } = useSelector((state) => state.characterDetails);
      
      useEffect(() => {
         dispatch(getCharDetails(id));
         return () => {
            dispatch(cleanDetails());
         };
      }, [dispatch, id]);

    return(
         <div className={style.mainContainer}>
            {name ? (            
               <div>               
                  <img src = {image} alt='image'/>
                  <h2><span className={style.detail}>{name}</span></h2>
                  <p style={{ color: 'black' }}>Status: <span className={style.detail}>{status}</span></p>
                  <p style={{ color: 'black' }}>Specie: <span className={style.detail}>{species}</span></p>
                  <p style={{ color: 'black' }}>Gender: <span className={style.detail}>{gender}</span></p>
                  <p style={{ color: 'black' }}>Origin: <span className={style.detail}>{origin}</span></p>        
                  <p style={{ color: 'black' }}>Location: <span className={style.detail}>{location}</span></p>                  
               </div>             
            ) : (       
               <h3>Loading...</h3>
            )}
        </div>            
    );
}

export default Details;

