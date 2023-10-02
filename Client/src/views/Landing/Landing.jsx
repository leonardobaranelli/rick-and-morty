import style from './Landing.module.css';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home" className={style.mainLink}>
                <h1>GO TO RICK AND MORTY WORLD!</h1>
            </Link>
        </div>
    )
}

export default Landing;