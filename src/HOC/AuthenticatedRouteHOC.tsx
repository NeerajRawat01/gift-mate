import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { localStorageService } from "../services/localStorageServices";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeAction } from "../store/actions/auth.action";
import { getUserData } from "../store/selectors/user.selector";

const AuthenticatedRouteHOC = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const AuthenticatedRoute: React.FC<P> = ({ ...props }) => {
    const token = localStorageService.getAuthToken();
    const dispatch = useDispatch();
    const userData = useSelector(getUserData);

    if (!token) {
      return <Navigate to={`/auth`} />;
    }

    useEffect(() => {
      if (token && !userData?.id) {
        dispatch(fetchMeAction());
      }
    }, [token, userData?.id, dispatch]);

    if (userData?.id) {
      return <Component {...(props as P)} />;
    }

    return <Navigate to={`/auth`} />;
  };

  return AuthenticatedRoute;
};

export default AuthenticatedRouteHOC;
