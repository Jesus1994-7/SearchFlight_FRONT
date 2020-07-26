import React from 'react';
import { NavLink } from 'react-router-dom';

import Exchange from '../../components/exchange/exchange.jsx';
import Search from '../../components/searchFlight/searchFlight.jsx';
import SpecialOffer from '../../components/specialOffer/specialOffer.jsx';
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

                <SpecialOffer/>
            </div>
        );
    };
};
export default LandingPage;