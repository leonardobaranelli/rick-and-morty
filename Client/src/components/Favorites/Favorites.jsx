import Card from "../Card/Card";
import style from "./Favorite.module.css"
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <>
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
    </>
  );
}

export default Favorites;


