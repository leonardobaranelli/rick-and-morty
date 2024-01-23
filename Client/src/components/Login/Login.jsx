import style from "./Login.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _login, _validate } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components";

const Login = () => {

    const loginState = useSelector((state) => state.login);    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({ message, type });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        _validate({ ...userData, [name]: value }, errors, setErrors);
    };    
    
    const submitHandler = async (event) => {
        event.preventDefault();
        
        try {
            await dispatch(_login(userData));
            
        } catch (error) {
            showAlert(error === 'Unexpected error occurred' ? 'Unexpected response from the server' : error, 'error');
            console.error("Error during login:", error);
        }
    };

    useEffect(() => {        

        if (loginState.access) navigate('/home');        
        
    }, [loginState]);
    
    return(
        <>
            <span className={style.alert} >{alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}</span>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    {/* <input name="email" type="text" onBlur={handleChange}></input> */}
                    <input name="email" type="text" onChange={handleChange}></input>     
                    <p>{userData.email && errors.email}</p>           
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange={handleChange}></input>
                    <p>{userData.password && errors.password}</p>                         
                </div>
                <button type="submit" disabled={Object.values(errors).some((error) => error !== '')}>Login</button>
            </form>
        </>    
    )    
}

export default Login;