import React from 'react';
import PropTypes from 'prop-types'; // validaçoes de proptypes
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/layouts/auth';
import DefaultLayout from '../pages/layouts/default';

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {

    const signed = true;

    if(!signed && isPrivate) {
        return ( <Redirect to="/"/> )
    }

    if(signed && !isPrivate) {
        return ( <Redirect to="/home"/> )
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route 
        { ...rest}
         render={props => (
             <Layout>
                 <Component {...props} />
             </Layout>
         )}
        />
    )

}
// validaçoes de proptypes
RouteWrapper.propTypes = { 
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};