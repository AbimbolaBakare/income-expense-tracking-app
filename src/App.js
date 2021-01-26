import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import { Login } from "./Login";
import { ContextProvider } from "./context/context";
import PrivateRoute from "./PrivateRoute";



function App() {

    return (
        <ContextProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/home" component={Main} />
                </div>
            </Router>
        </ContextProvider>


    );
}
export default App;