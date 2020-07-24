import React from 'react';
import './exchange.css';
import CurrencyList from '../currencyList/currencyList.jsx';
import { currencyService } from '../../services/currencyService.jsx';
import { utils } from '../../utils/utils';

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
                <form onSubmit={this.calculate}>
                    Divisa Base: <CurrencyList id={0} setCurrency={this.setCurrency} readOnly />
                    Divisa Cambio: <CurrencyList id={1} setCurrency={this.setCurrency} readOnly />
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