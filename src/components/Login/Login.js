
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <p>please login</p>
      <div style={{margin:'20px'}}>
        <button onClick = {()=>signInWithGoogle()}  >Google Sign In</button>
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
