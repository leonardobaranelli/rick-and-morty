import style from "./CreateUser.module.css";
import { useState } from "react";

const CreateUser = () => {
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property] : value});           
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("all ok")
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email" type="text" onChange={handleChange}></input>                
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input name="password" type="text" onChange={handleChange}></input>                
            </div>
            <button>Submit</button>
        </form>
    )    
}

export default CreateUser;