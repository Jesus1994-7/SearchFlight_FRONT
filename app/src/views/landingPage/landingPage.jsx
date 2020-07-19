import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
        axios.get(`http://localhost:3005/data/questions`)
            .then( res => {
                const questions = res.data;
                this.setState({ questions });
            })
        axios.get(`http://localhost:3005/data/iatacodes`)
            .then( res => {
                const iataCodes = res.data;
                this.setState({ iataCodes });
            })
        axios.get(`http://localhost:3005/data/countries`)
            .then( res => {
                const countries = res.data;
                this.setState({ countries });
            })
        axios.get(`http://localhost:3005/data/currencies`)
            .then( res => {
                const currencies = res.data;
                this.setState({ currencies });
            }) 
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