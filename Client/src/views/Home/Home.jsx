import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    // }, [dispatch]);

    return (
        <div>
            <SearchBar />
            <CardsContainer />
        </div>
    )
}

export default Home;