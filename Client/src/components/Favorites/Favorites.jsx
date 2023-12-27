import Card from "../Card/Card";
import style from "./Favorite.module.css"
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();  

  const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));      
  }  

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div>
      <div className={style.selectContainer}>
       <select onChange={handleOrder}>
            <option value="A">Ascendent</option>
            <option value="D">Descendent</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            <option value="AllCharacters">AllCharacters</option>
        </select>
      </div>  
      <div className={style.CardsContainer}>        
        {favorites.map(({ name, species, status, gender, origin, image, id }) => (
          <Card
            name={name}
            species={species}
            status={status}
            gender={gender}
            origin={origin}
            image={image}
            id={id}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;


