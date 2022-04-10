import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const {signInWithGoogle} = useFirebase();
  return (
    <div>
      <p>please login</p>
      <div style={{margin:'20px'}}>
        <button onClick = {signInWithGoogle}  >Google Sign In</button>
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
