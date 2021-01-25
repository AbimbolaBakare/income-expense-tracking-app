import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import { Login } from "./Login";
import { AuthProvider } from "./Authentication";
import PrivateRoute from "./PrivateRoute";



function App() {

    return (
        <AuthProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/home" component={Main} />
                </div>
            </Router>
        </AuthProvider>


    );
}
export default App;