import React from 'react';
import {Route, RouteProps, useHistory} from "react-router-dom";
import {AuthContext} from "./authContext";

export const AuthRouteComponent: React.FunctionComponent<RouteProps> = (props) =>{
    const  userInfo  = React.useContext(AuthContext);
    const history = useHistory();

    React.useEffect(()=>{
        if(!userInfo.userInfo){
            history.push('/');
        }
    },
    [props?.location?.pathname]);

    return <Route{...props} />;
};
