import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext} from "./context/context";


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default PrivateRoute;