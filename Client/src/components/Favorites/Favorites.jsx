import Card from "../Card/Card";
import style from "./Favorite.module.css"
import { useSelector, useDispatch } from "react-redux";
import { orderCards } from "../../redux/actions";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();  

  const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));      
  }  

  return (
    <div>
       <select onChange={handleOrder}>
            <option value="A">Ascendent</option>
            <option value="D">Descendent</option>
        </select>
      {favorites.map(({ name, species, status, gender, origin, image, id }) => (
        <Card
          name={name}
          species={species}
          status={status}
          gender={gender}
          origin={origin.name}
          image={image}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
}

export default Favorites;


