import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivatRoute";
import LoginForm from "./pages/Login/LoginForm";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import AlertComponent from "./components/AlertComponent/AlertComponent";
import Dashboard from "./pages/Dashboard/dashboard";
import Module1 from "./pages/module1";
import ChWords from "./pages/ch_words";
import ThWords from "./pages/th_words";
import IngWords from "./pages/ing_words";
import Module2 from "./pages/module2";
import ChWordsi from "./pages/ch_words_i";
import ThWordsi from "./pages/th_words_i";
import IngWordsi from "./pages/ing_words_i";
import { useState } from "react";
import Module3 from "./pages/module3";
import Module4 from "./pages/module4";
import UpdateUser from "./pages/updateuser";
import Guidedpath from "./pages/guidedpath";
import Homepage from "./pages/homepage";
function App() {
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <div className="App">
        <div className="d-flex align-items-center flex-column">
          <Route exact path="/register">
            <RegistrationForm showError={updateErrorMessage} />
          </Route>
          <Route exact path="/login">
            <LoginForm showError={updateErrorMessage} />
          </Route>
          <AlertComponent
            errorMessage={errorMessage}
            hideError={updateErrorMessage}
          />
        </div>
      </div>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/chwords" component={ChWords} />
      <PrivateRoute exact path="/thwords" component={ThWords} />
      <PrivateRoute exact path="/ingwords" component={IngWords} />
      <PrivateRoute exact path="/chwordsi" component={ChWordsi} />
      <PrivateRoute exact path="/thwordsi" component={ThWordsi} />
      <PrivateRoute exact path="/ingwordsi" component={IngWordsi} />
      <PrivateRoute exact path="/module3" component={Module3} />
      <PrivateRoute exact path="/module4" component={Module4} />
      <PrivateRoute exact path="/profile" component={UpdateUser} />
      <PrivateRoute exact path="/guidedpath" component={Guidedpath} />
    </Router>
  );
}

export default App;
