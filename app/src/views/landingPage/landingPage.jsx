import React from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
//import { useSelector } from 'react-redux';
=======

import Exchange from '../../components/exchange/exchange.jsx'
>>>>>>> feature/exchange
import { dataService } from '../../services/dataService';

import './landingPage.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        try {
            //const user = useSelector(state => state.user);
            dataService.importInitialData();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <div className="slider">
                    <p>SLIDER</p>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <Exchange/>
                <section className="offers">
                    <p>AeroFlot special offers</p>
                    <NavLink exact to="/offers">
                        <button>ALL SPECIAL OFFERS</button>
                    </NavLink>
                    <div className="container-offers">
                        <div className="first-offer">
                            <img src="" alt="" />
                            <p>Saint Petersburg</p>
                        </div>
                        <div className="second-offer">
                            <img src="" alt="" />
                            <p>Penza</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};
export default LandingPage;