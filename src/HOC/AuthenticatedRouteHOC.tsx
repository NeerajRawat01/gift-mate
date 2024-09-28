import React from "react";
import { Navigate } from "react-router-dom";
import { localStorageService } from "../services/localStorageServices";

// services

const AuthenticatedRouteHOC = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const AuthenticatedRoute: React.FC<P> = ({ ...props }) => {
    const token = localStorageService.getAuthToken();

    console.log("loggedInUser", token);
    if (token) {
      return <Component {...(props as P)} />;
    }

    return <Navigate to={`/auth`} />;
  };

  return AuthenticatedRoute;
};

export default AuthenticatedRouteHOC;
