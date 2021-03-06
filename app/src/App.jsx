import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import logo from './logo.svg';

import Register from './views/register/register.jsx';
import Login from './views/login/login.jsx';
import Profile from './views/profile/profile.jsx';
import LandingPage from './views/landingPage/landingPage.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import ChooseFlight from './views/chooseFlight/chooseFlight.jsx';
import ContactUs from './views/contactUs/contactUs.jsx';
import DetailFlight from './views/detailflight/detailFlight.jsx'
import ForgotPass from './views/forgotPassword/forgotPassword.jsx';
import LogOut from './views/logOut/logOut.jsx';
import AboutUs from './views/aboutUs/aboutUs.jsx';
import Page404 from './views/404page/404page.jsx';
import PrivacyPage from './views/privacyPage/privacyPage.jsx'

//import CSS
import './App.scss';




export default function App() {
    return(
        <div>
          <Router>
              <Header />
              <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/profile" exact component={Profile} />
                  <Route path="/search" exact component={ChooseFlight}/>
                  <Route path="/forgot" exact component={ForgotPass}/>
                  <Route path="/contactUs" exact component={ContactUs}/>
                  <Route path="/logOut" exact component={LogOut}/>
                  <Route path="/aboutUs" exact component={AboutUs}/>
                  <Route path='/buyflight' exact component={DetailFlight}/>
                  <Route path='/privacy' exact component={PrivacyPage}/>

                  
                  <Route component={Page404} />
              </Switch>

              <Footer />
          </Router>
        </div>
    );
}


