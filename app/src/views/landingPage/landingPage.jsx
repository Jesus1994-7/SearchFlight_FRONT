import React from 'react';

import Exchange from '../../components/exchange/exchange.jsx';
import Search from '../../components/searchFlight/searchFlight.jsx';
import SpecialOffer from '../../components/specialOffer/specialOffer.jsx';
import { dataService } from '../../services/dataService.js';

//Images
import './landingPage.scss';
import fondo from "../../img/fondo.jpg"


class LandingPage extends React.Component {

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

                <img className="imagen" src={fondo} alt="fondo" />

                <Search className="search" />

                <SpecialOffer />
                <Exchange />
            </div>
        );
    };
};
export default LandingPage;