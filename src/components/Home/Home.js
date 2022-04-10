import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h3>this is home componet </h3>
            <p>Current user is : {user? user.displayName : 'No One'}</p>
        </div>
    );
};

export default Home;