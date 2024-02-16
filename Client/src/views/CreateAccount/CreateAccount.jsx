import style from "./CreateAccount.module.css";
import { useState } from "react";
import { _createAccount, _validate } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components";


const CreateAccount = () => {
    
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({ message, type });
    };

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property] : value});          
        _validate({...userData, [property] : value}, errors, setErrors); 
    }

    const submitHandler = async (event) => {
        event.preventDefault();
      
        try {
          await _createAccount(userData);
          showAlert('Account created successfully!', 'success');          
          await new Promise(resolve => setTimeout(resolve, 1700));
          navigate("/");
        } catch (error) {
            showAlert(error.message === 'Unexpected error occurred' ? 'Unexpected response from the server' : error.message, 'error');
        }
    };   
    
    return(
        <>
            <span className={style.alert} >{alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}</span>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" onChange={handleChange}></input>     
                    <p>{errors.email}</p>           
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="text" onChange={handleChange}></input>                
                    <p>{errors.password}</p>           
                </div>
                <button type="submit" disabled={Object.values(errors).some((error) => error !== '')}>Create Account</button>                
            </form>
        </>    
    )    
}

export default CreateAccount;