import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, currentUser}) => {
    return(
        
        <Route
            render={props =>
            // currentUser ? (
                <Component {...props} />
            // ) : (
            //     <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            // )
            }
        />
    )
}

export default PrivateRoute