import React from 'react';
import './exchange.scss';
import CurrencyList from '../currencyList/currencyList.jsx';
import { currencyService } from '../../services/currencyService.js';
import { utils } from '../../utils/utils.js';

class ExchangeComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            num: 0,
            currency: [" ", " "],
        }
    }

    setCurrency = (currency, id) => {
        this.state.currency.splice(id, 1, currency);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value });
    }

    calculate = (ev) => {
        ev.preventDefault();
        let result;
        let num = ev.target.num.value;
        try {
            if (utils.isNullOrEmpty(this.state.currency[0])
                || utils.isNullOrEmpty(this.state.currency[1])
                || num < 1) {
                result = 0;
            } else if (this.state.currency[0] === this.state.currency[1]) { result = num; }
            else {
                currencyService.exchange(this.state.currency[0], this.state.currency[1], num)
                    .then(result => this.setState({ total: result }));
            }
        } catch (error) {
            console.log(error);
            result = 0;
        }
        this.setState({ total: result });
    }
    render() {
        return (
            <div className="exchangeForm">
                <h3>Cambio de Divisas</h3>
                <form onSubmit={this.calculate}>
                   <label> Divisa Base:</label> <CurrencyList id={0} setCurrency={this.setCurrency} readOnly /><br/>
                   <label> Divisa Cambio:</label> <CurrencyList id={1} setCurrency={this.setCurrency} readOnly />
                    <br />
                    Cantidad para cambiar:  <input type="text" placeholder="0" name="num" value={this.state.num}
                        onChange={this.handleChange}/>
                    <button type="submit">Calculate!</button>

                </form>
                <p>{this.state.total}</p>
            </div>
        )
    }
}
export default ExchangeComp;