import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3> who is there.</h3>
            <h5>{user? user.displayName : "no body"}</h5>
        </div>
    );
};

export default Products;