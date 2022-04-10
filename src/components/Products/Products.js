import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h3> who is there.</h3>
            <h5>{user? user.displayName : "no body"}</h5>
        </div>
    );
};

export default Products;