import React from 'react';
import { NavLink } from 'react-router-dom';

import Exchange from '../../components/exchange/exchange.jsx';
import Search from '../../components/searchFlight/searchFlight.jsx';
import { dataService } from '../../services/dataService.js';

//Images
import './landingPage.scss';
import fondo from "../../img/fondo.jpg"


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
            <div className="fondo">
                <div >
                    <img className="imagen" src={fondo} alt="" />
                </div>
                <div className="separator"></div>

                <Search className="search" />
                <Exchange />

                <section className="offers">
                    <p>AeroFlot special offers</p>
                    <NavLink exact to="/offers">
                        <button>ALL SPECIAL OFFERS</button>
                    </NavLink>
                    <div className="container-offers">
                        <div className="first-offer">
                            <div src="" alt="" />
                            <p>Saint Petersburg</p>
                        </div>
                        <div className="second-offer">
                            <div src="" alt="" />
                            <p>Penza</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};
export default LandingPage;