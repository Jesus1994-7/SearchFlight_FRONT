import React from 'react';
import './currencyList.css';

import { connect } from 'react-redux';

class CurrencyList extends React.Component {

    state = {}

    render() {
        return (
            <select defaultValue={this.props.selected} onChange={
                e => this.props.setCurrency(
                    e.target.value, this.props.id
                )}>
                {this.props.currencies?.map(currency => (
                    <option key={currency.code}
                        value={currency.code}
                    >
                        {currency.name}
                    </option>
                ))}
            </select>
        )
    }
}

const mapStateToProps = ({ currenciesList }) => ({ currencies: currenciesList })
export default connect(mapStateToProps)(CurrencyList);
