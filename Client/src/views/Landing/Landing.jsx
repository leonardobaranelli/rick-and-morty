import style from './Landing.module.css';
import Login from '../../components/Login/Login';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={style.mainContainer}>                     
            <Login />
            <div className={style.createUser}>
                <p>Don't you have an account ?</p>
                <Link to ="/createAccount">CREATE ACCOUNT</Link>
            </div>    
        </div>
    )
}

export default Landing;