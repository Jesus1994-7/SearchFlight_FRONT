import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import logo from './logo.svg';

import Register from './views/register/register.jsx';
import Login from './views/login/login.jsx';
import Profile from './views/profile/profile.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
//import SearchFlight from './components/searchFlight/searchFlight.jsx';

//import CSS
import './App.css';




export default function App() {
    return(
        <div>
          <Router>

 
              <Header />

              <Switch>
                  <Route path="/register" exact component={Register} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/profile" exact component={Profile} />
              </Switch>

              <Footer />
          </Router>
        </div>
    );
}


