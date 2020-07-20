import React from 'react';
import { NavLink } from 'react-router-dom';

import dataRepository from '../../repositories/dataRepository.jsx'

import './landingPage.css'

class LandingPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            questions: [],
            iataCodes: [],
            countries: [],
            currencies: []
        }
        
    }

    //Llamadas del back almacenadas en una constante 
    componentDidMount() {

        const questions = dataRepository.getAllQuestions();
        this.setState({ questions });

        const iataCodes = dataRepository.getAllIataCodes
        this.setState({ iataCodes });

        const countries = dataRepository.getAllCountries();
        this.setState({ countries });

        const currencies = dataRepository.getAllCurrencies();
        this.setState({ currencies });
    }

    render () {
        return(
            <div>
                <div className="slider">
                    <p>SLIDER</p>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <section className="offers">
                    <p>AeroFlot special offers</p>
                    <NavLink exact to="/offers">
                        <button>ALL SPECIAL OFFERS</button>
                    </NavLink>
                    <div className="container-offers">
                        <div className="first-offer">
                            <img src="" alt=""/>
                            <p>Saint Petersburg</p>
                        </div>
                        <div className="second-offer">
                            <img src="" alt=""/>
                            <p>Penza</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};
export default LandingPage;