import React from "react";
import style from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharDetails, cleanDetails } from "../../redux/actions";

const Details = () => {

    const { id } = useParams();       
      
      const dispatch = useDispatch();
      const { name, image, status, species, gender, origin } = useSelector((state) => state.characterDetails);
      
      useEffect(() => {
         dispatch(getCharDetails(id));
         return () => {
            dispatch(cleanDetails());
         };
      }, [dispatch, id]);

    return(
        <div>
        {name ? (
            <>
               <img src = {image} alt='image'/>
               <h2>{name}</h2>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>         
               <h2>{origin?.name}</h2>    
            </>
         ) : (       
         <h3>Loading...</h3>
         )}
        </div>            
    );
}

export default Details;

