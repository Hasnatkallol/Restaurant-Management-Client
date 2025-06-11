import React, { use } from "react";

import { Navigate, useLocation } from "react-router";

import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import Loading from "../Shared/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(FirebaseAuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
