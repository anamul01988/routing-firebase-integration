
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";
import {useLocation, useNavigate} from "react-router-dom";
const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';
  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(()=>{
      navigate(from, {replace: true})
    })
  }
  return (
    <div>
      <p>please login</p>
      <div style={{margin:'20px'}}>
        <button onClick = {handleGoogleSignIn}  >Google Sign In</button>
      </div>

      <form action="">
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
