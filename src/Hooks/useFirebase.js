import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);  //ai app ta cara kicui hobe nah ai app ta ashce firebase.init.js file ta
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
 

  const signInWithGoogle = () => {
      console.log("faofho")
      signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user)
    
      })
      .catch((error) => {
 
        const errorCode = error.code;
        const errorMessage = error.message;
    
        const email = error.email;
       console.log(errorCode, errorMessage, email)
        // ...
      });
  };

  const handleSignOut = () =>{
      signOut(auth)
      .then(()=>{})
  }

  useEffect(()=>{
      onAuthStateChanged(auth, user =>{
          setUser(user)

      })
  },[])
  return {
    user,
    signInWithGoogle,
    handleSignOut
  }; //obj akare pathacci login theke rcv korbo obj akare 
};
export default useFirebase;
