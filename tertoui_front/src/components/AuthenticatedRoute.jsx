import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../contexts/Auth";

const AuthenticatedRoute = ({Component }) => {
    const { auth } = useContext(Auth);

    return auth ? (
        <Component />
    ) : (
        <Navigate to="/login" />
    )
}

export default AuthenticatedRoute;