import React, {useState,useContext} from 'react';
import { AuthContext } from './AuthContext';

const  SignIn = () => {

  const [email, setUserEmail] = useState();
  const [password, setUserPassword] = useState();
  const { login } = useContext(AuthContext);
  
  const handleSubmit = async e => {
    e.preventDefault();
    
    login(
      email,
      password
    );
  }
  return(
    <div className="sign-in-main">
      <h1>sign-in</h1>
      <form onSubmit={handleSubmit}> 
           
        <div className="sign-in-main-txt">
          <input type="email" onChange={e => setUserEmail(e.target.value)} />
          <span></span>
          <label>E-mail</label>
        </div>  

        <div className="sign-in-main-txt">
          <input type="password" onChange={e => setUserPassword(e.target.value)} />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">
          <a > Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="signup_link">
          Not a member? <a >Signup</a>
        </div>
      </form>
    </div>
  )
}

export default SignIn;