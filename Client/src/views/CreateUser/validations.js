const validations = (userData, errors, setErrors) => {
    const { email, password } = userData;
    const newErrors = {};
  
    const setEmptyError = (key) => {
      newErrors[key] = "";
    };
  
    const validateEmail = () => {
      if (!email) {
        newErrors.email = "Please complete the field";
      } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        newErrors.email = "Must be a valid email";
      } else if (email.length > 35) {
        newErrors.email = "35 characters is the maximum";
      } else {
        setEmptyError('email');
      }
    };
  
    const validatePassword = () => {
      if (!password) {
        newErrors.password = "Please complete the field";
      } else if (password.length < 6 || password.length > 10) {
        newErrors.password = "Password must be between 6 and 10 characters";
      } else if (!/\d/.test(password)) {
        newErrors.password = "Password must contain a number";
      } else {
        setEmptyError('password');
      }
    };
      
    validateEmail();
    validatePassword();
  
    setErrors({
      ...errors,
      ...newErrors
    });
  };
  
  export default validations;
  