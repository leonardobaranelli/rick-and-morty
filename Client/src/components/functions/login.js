import { loginSuccess, loginFailure } from "../../redux/actions"

export const login = (userData) => (dispatch) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
  
    axios.get(URL, { params: { email, password } })
      .then(({ data }) => {
        const { access } = data;
        dispatch(loginSuccess(access));
        if (access) {          
            navigate('/home');
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
  