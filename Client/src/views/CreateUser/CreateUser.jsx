import style from "./CreateUser.module.css";
import { useState } from "react";
import validations from "./validations";

const CreateUser = ({login}) => {
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property] : value});          
        validations({...userData, [property] : value}, errors, setErrors); 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("all ok")
        //login(userData);
    }
    
    return(
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
            <button>Submit</button>
        </form>
    )    
}

export default CreateUser;