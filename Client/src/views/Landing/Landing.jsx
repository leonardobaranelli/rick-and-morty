import style from './Landing.module.css';
import { Link } from "react-router-dom";
import Login from '../Login/Login';

const Landing = () => {
    return (
        <div className={style.mainContainer}>                     
            <Login />
            <div className={style.createUser}>
                <p>Don't you have an account ?</p>
                <Link to ="/createUser">CREATE ACCOUNT</Link>
            </div>    
        </div>
    )
}

export default Landing;