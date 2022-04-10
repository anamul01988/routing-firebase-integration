import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Home = () => {
    const [user]= useAuthState(auth)
    return (
        <div>
            <h3>this is home componet </h3>
            <p>Current user is : {user? user.displayName : 'No One'}</p>
        </div>
    );
};

export default Home;